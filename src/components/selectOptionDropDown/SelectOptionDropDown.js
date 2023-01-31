import { useEffect, useState } from 'react'

import './select_option_drop_down.css'

const SelectOptionDropDown = ({ defaultText, optionsList, reset }) => {
  const [defaultSelectText, setDefaultSelectText] = useState('')
  const [showOptionList, setShowOptionList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setDefaultSelectText(defaultText)
  }, [defaultText])

  useEffect(() => {
    if (reset) {
      setDefaultSelectText(defaultText)
      setSearchTerm('')
    }
  }, [reset, defaultText])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    setDefaultSelectText(defaultText)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [defaultText])

  const handleClickOutside = e => {
    if (
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text') &&
      !e.target.classList.contains('select-filter')
    ) {
      setShowOptionList(false)
    }
  }

  const handleListDisplay = () => {
    setShowOptionList(prevShowOptionList => !prevShowOptionList)
  }

  const handleOptionClick = e => {
    setDefaultSelectText(e.target.getAttribute('data-name'))
    setShowOptionList(false)
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  optionsList.sort((a, b) => {
    if (a.name.toLowerCase().indexOf(searchTerm) > b.name.toLowerCase().indexOf(searchTerm)) {
      return 1
    }
    return -1
  })

  useEffect(() => {
    const options = document.querySelectorAll('.custom-select-option')
    if (showOptionList) {
      options.forEach(option => {
        option.style.display = 'flex'
      })
    }
  }, [showOptionList])

  return (
    <div className='custom-select-container'>
      <div className={showOptionList ? 'selected-text active' : 'selected-text'} onClick={handleListDisplay}>
        <span>{defaultSelectText}</span>
      </div>
      {showOptionList && (
        <ul className='select-options'>
          <div className='select-filter__wrapper'>
            <input className='select-filter' type='text' placeholder='Type to filter' onChange={handleSearch} />
          </div>
          {optionsList.map(option => (
            <li
              className='custom-select-option'
              data-name={option.name}
              key={option.id}
              onClick={handleOptionClick}
              style={{
                display: option.name.toLowerCase().indexOf(searchTerm) !== -1 ? 'flex' : 'none'
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectOptionDropDown
