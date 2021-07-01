import React, { useMemo, useRef, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import {
  AsyncSearch,
  AsyncSearchOption,
  AsyncSearchProps,
} from '@island.is/island-ui/core'

const DEBOUNCE_TIMER = 600

interface SearchInputProps {
  title?: string
  size?: AsyncSearchProps['size']
  logoTitle?: string
  logoUrl?: string
}

export const SearchInput = ({
  title = '',
  logoTitle = '',
  logoUrl,
  size = 'large',
}: SearchInputProps) => {
  const timerRef = useRef(null)
  const [isBusy, setIsBusy] = useState<boolean>(false)
  const [searchTerms, setSearchTerms] = useState<string>('')

  //const [doSearch, { data, loading, called, error }] = useLazyQuery<
  //  FreshdeskSearchQuery,
  //  FreshdeskSearchQueryVariables
  //>(FRESHDESK_SEARCH, {
  //  variables: {
  //    input: {
  //      terms: searchTerms,
  //    },
  //  },
  //})

  useMemo(() => {
    clearTimeout(timerRef.current)

    //if (!called && searchTerms) {
    if (searchTerms) {
      console.log('first search!', searchTerms)
      //doSearch()
    } else {
      timerRef.current = setTimeout(() => {
        //doSearch()
        console.log('doing new search!', searchTerms)
      }, DEBOUNCE_TIMER)
    }
  }, [searchTerms])
  const data = {
    freshdeskSearch: [{ title: 'Hallo' }],
  }

  const options =
    data?.freshdeskSearch?.map(({ title }, index) => {
      return {
        label: title,
        value: title,
      } as AsyncSearchOption
    }) ?? []

  return (
    <AsyncSearch
      size={size}
      key="island-helpdesk"
      placeholder="Leitaðu á þjónustuvefnum"
      options={options}
      onChange={(value) => {
        console.log('onChange', value)
      }}
      inputValue={searchTerms}
      //loading={loading}
      loading={false}
      onInputValueChange={(value) => setSearchTerms(value)}
    />
  )
}

export default SearchInput
