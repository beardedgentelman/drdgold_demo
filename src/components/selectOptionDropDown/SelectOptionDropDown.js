import { useEffect, useState } from 'react'
import { Calendar } from 'react-calendar'
import classNames from 'classnames'

import 'react-calendar/dist/Calendar.css'
import './select_option_drop_down.css'

const SelectOptionDropDown = ({ defaultText, optionsList, reset, calendar }) => {
  const [defaultSelectText, setDefaultSelectText] = useState('')
  const [showOptionList, setShowOptionList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isCalendar, setIsCalendar] = useState('')
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setIsCalendar(calendar)
  }, [calendar])

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
      !e.target.closest('.calendar') &&
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text') &&
      !e.target.classList.contains('select-filter')
    ) {
      setShowOptionList(false)
    }
  }

  console.log(showOptionList)

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
    <div
      className={classNames(
        showOptionList
          ? isCalendar === '_calendar'
            ? 'custom-select-container_calendar'
            : 'custom-select-container active'
          : isCalendar === '_calendar'
          ? 'custom-select-container_calendar'
          : 'custom-select-container'
      )}
    >
      <div className='selected-text' onClick={handleListDisplay}>
        {defaultSelectText}
      </div>

      {showOptionList &&
        (isCalendar === '_calendar' ? (
          <div className='calendar'>
            <Calendar value={date} onChange={setDate} defaultView='year' />
          </div>
        ) : (
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
        ))}
    </div>
  )
}

export default SelectOptionDropDown
