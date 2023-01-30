import { useEffect, useState } from 'react'

import './search-input.css'

const SearchInput = props => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (props.reset) {
      setInputValue('')
    }
  }, [props.reset])

  return (
    <input
      className='search_input'
      type='search'
      placeholder={props.placeholder}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
  )
}

export default SearchInput
