import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { activeNav } from 'helpers/activeNav/activeNav'
import options from 'helpers/selectOptions/SelectOptions'

import {
  AnomaliesItem,
  Audit,
  Btn,
  Document,
  Modal,
  PageTitle,
  Pagination,
  PaginationPageNum,
  SelectOptionDropDown
} from 'components'

import './anomalies.css'

const svg = (
  <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.8125 27.125L7.4375 23.0625L2.71875 22.0938L3.25 17.5L0.25 14L3.25 10.5312L2.71875 5.9375L7.4375 4.96875L9.8125 0.875L14 2.8125L18.1875 0.875L20.5938 4.96875L25.2812 5.9375L24.75 10.5312L27.75 14L24.75 17.5L25.2812 22.0938L20.5938 23.0625L18.1875 27.125L14 25.1875L9.8125 27.125ZM10.6562 24.6562L14 23.25L17.4375 24.6562L19.5312 21.5312L23.1875 20.5938L22.8125 16.875L25.3438 14L22.8125 11.0625L23.1875 7.34375L19.5312 6.46875L17.375 3.34375L14 4.75L10.5625 3.34375L8.46875 6.46875L4.8125 7.34375L5.1875 11.0625L2.65625 14L5.1875 16.875L4.8125 20.6562L8.46875 21.5312L10.6562 24.6562ZM12.6562 18.1562L19.75 11.125L18.3438 9.84375L12.6562 15.4688L9.6875 12.375L8.25 13.7812L12.6562 18.1562Z'
      fill='#1DAD2C'
    />
  </svg>
)

const somId = ['done', 'warn', 'pend', 'expir', 'info', 'conc']

function Anomalies() {
  const [reset, setReset] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedItem, setSelectedItem] = useState({})
  const [doc, setDoc] = useState(true)
  const [audits, setAudits] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const PAGE_LIMIT = 32
  const totalPages = Math.ceil(80 / PAGE_LIMIT)

  const closeModal = () => setOpenModal(false)

  const randomVal = () => somId[Math.floor(Math.random() * somId.length)]

  const items = useMemo(() => {
    const itemsArr = []
    for (let i = 0; i < 80; i++) {
      const currentItem = {
        id: randomVal(),
        index: i
      }
      itemsArr.push(
        <AnomaliesItem
          key={`${currentItem.id}-${currentItem.index}`}
          id={currentItem.id}
          onClick={() => {
            setSelectedItem(currentItem)
            setOpenModal(o => !o)
          }}
        >
          Some Text
        </AnomaliesItem>
      )
    }
    return itemsArr.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT)
  }, [page])

  const renderPageNumbers = () => {
    const elements = []
    for (let i = 1; i <= totalPages; i++) {
      elements.push(
        <PaginationPageNum key={i} active={page === i} onClick={() => setPage(i)}>
          {i}
        </PaginationPageNum>
      )
    }
    return elements
  }

  return (
    <>
      <PageTitle className='anomalies__title'>{svg} List of Anomalies</PageTitle>
      <div className='anomalies__selects'>
        <SelectOptionDropDown defaultText='SITE' optionsList={options[4]} reset={reset} />
        <SelectOptionDropDown defaultText='DOCUMENT TYPE' optionsList={options[0]} reset={reset} />
        <SelectOptionDropDown defaultText='DATE' optionsList={options[4]} reset={reset} />
        <SelectOptionDropDown defaultText='STATUS' optionsList={options[4]} reset={reset} />
        <Btn onClick={() => setReset(!reset)}>Reset</Btn>
      </div>
      <div className='anomalies__items'>{items}</div>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        modalChildren={
          <AnomaliesItem
            key={`${selectedItem.id}-${selectedItem.index}`}
            id={selectedItem.id}
            onClick={event => console.log(event)}
          >
            Some Text
          </AnomaliesItem>
        }
        navChildrenFirst={
          <NavLink
            className={doc ? 'nav__list-item__link active' : activeNav}
            to='/document'
            onClick={e => {
              e.preventDefault()
              setDoc(true)
              setAudits(false)
            }}
          >
            Document
          </NavLink>
        }
        navChildrenSecond={
          <NavLink
            className={audits ? 'nav__list-item__link active' : activeNav}
            to='/document'
            onClick={e => {
              e.preventDefault()
              setDoc(false)
              setAudits(true)
            }}
          >
            Audits
          </NavLink>
        }
        modalChildrenData={!audits ? <Document /> : <Audit />}
      >
        {() => {
          if (!openModal) {
            setDoc(false)
            setAudits(false)
          }
        }}
      </Modal>
      <Pagination
        onClickPrev={() => setPage(page - 1)}
        onClickNext={() => setPage(page + 1)}
        disabledPrev={page === 1}
        disabledNext={page * PAGE_LIMIT >= 80}
      >
        {renderPageNumbers()}
      </Pagination>
    </>
  )
}

export default Anomalies
