import { useEffect, useState, useCallback } from 'react'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import { useEvent } from 'react-use'

const guessVisibleSection = (
  ids: string[],
  marginTop: number,
): string | null => {
  if (ids.length === 0) return null

  // top of the page is a special case because otherwise we might match the
  // second page section if the first one is small enough
  if (window.scrollY <= 0) return ids[0]

  return ids.reduce((match, id) => {
    const el = document.getElementById(id)
    // so we dont throw an error if the element is not found
    if (!el) {
      return '0'
    }
    const elPosY = Math.floor(el.getBoundingClientRect().top) + window.scrollY
    return window.scrollY + marginTop >= elPosY ? id : match
  }, ids[0])
}

const useScrollSpy = (
  ids: string[],
  { marginTop = 100 }: { marginTop?: number } = {},
): [string | undefined, (id: string) => void] => {
  const [current, setCurrent] = useState(ids[0])

  // flag to ignore scroll event when user navigates manually
  const [ignore, setIgnore] = useState(false)

  // every time scrolling stops we'll reset the ignore flag
  const checkScrollStop = useCallback(
    debounce(() => setIgnore(false), 50),
    [setIgnore],
  )

  const target = process.browser && window

  useEvent('scroll', checkScrollStop, target === false ? null : target)

  // function to manually navigate
  const navigate = useCallback(
    (id: string) => {
      setCurrent(id)
      setIgnore(true)
      const el = document.getElementById(id)
      const rect = el?.getBoundingClientRect()
      window.scrollTo(
        0,
        Math.floor(rect?.top ?? 0) + window.scrollY - marginTop,
      )
    },
    [setCurrent, setIgnore],
  )

  // throttled function to update the active section id
  const updateCurrent = useCallback(
    throttle(() => {
      if (!ignore) {
        setCurrent(guessVisibleSection(ids, marginTop) as string)
      }
    }, 100),
    [ids, ignore, setCurrent],
  )

  // update if id list changes
  useEffect(updateCurrent, [ids])

  // and call the update function on scroll and resize
  useEvent('scroll', updateCurrent, target === false ? null : target)
  useEvent('resize', updateCurrent, target === false ? null : target)

  return [current, navigate]
}

export default useScrollSpy
