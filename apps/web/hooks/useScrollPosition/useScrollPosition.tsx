/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, DependencyList, MutableRefObject } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

interface ScrollProps {
  prevPos: {
    x: number | undefined
    y: number | undefined
  }
  currPos: {
    x: number | undefined
    y: number | undefined
  }
}

interface GetScrollPositionProps {
  element?: MutableRefObject<HTMLElement | null>
  useWindow?: boolean
}

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({ element, useWindow }: GetScrollPositionProps) => {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target?.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position?.left, y: position?.top }
}

export const useScrollPosition = (
  effect: (props: ScrollProps) => void,
  deps?: DependencyList,
  element?: MutableRefObject<HTMLElement | null>,
  useWindow?: boolean,
  wait?: number,
) => {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout: number | null = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = window.setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      throttleTimeout && clearTimeout(throttleTimeout)
    }
  }, deps)
}

export default useScrollPosition
