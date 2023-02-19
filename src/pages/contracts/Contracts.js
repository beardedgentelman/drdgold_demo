import { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { activeNav } from 'helpers/activeNav/activeNav'
import options from 'helpers/selectOptions/SelectOptions'
import { A11y, EffectFlip, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Btn,
  DocumentPreviewMiniature,
  Modal,
  PageTitle,
  PaginationCustom,
  PaginationPageNum,
  SearchInput,
  SelectOptionDropDown,
  TableModal,
  TableModalRow
} from 'components'

import 'swiper/css/effect-flip'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import contractsDoc from '../../assets/images/contracts-document.jpg'

import defLogo from './../../assets/icons/contracts-logo.svg'

import 'swiper/css'
import './contracts.css'

const PAGE_LIMIT = 16
const ElementsQuantity = 150

const Contracts = () => {
  const [reset, setReset] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedDoc, setSelectedDoc] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [history, setHistory] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
    setShowHistory(false)
  }

  const totalPages = Math.ceil(ElementsQuantity / PAGE_LIMIT)

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

  const someDocInfo = useMemo(
    () => ({
      one: 'QUARTZ PLANT HIRE CC',
      two: '2007/042296/23'
    }),
    []
  )

  const documents = useMemo(() => {
    const docMinis = []
    for (let i = 0; i < ElementsQuantity; i++) {
      const currentDoc = {
        one: someDocInfo.one,
        two: someDocInfo.two
      }
      docMinis.push(
        <DocumentPreviewMiniature
          key={i + '-' + currentDoc.one + '-' + currentDoc.two}
          src={defLogo}
          one={currentDoc.one}
          two={currentDoc.two}
          onClick={() => {
            setSelectedDoc(currentDoc)
            setOpenModal(o => !o)
          }}
        />
      )
    }
    return docMinis.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT)
  }, [someDocInfo, page])

  useEffect(() => {
    if (!openModal) {
      setHistory(false)
    }
  }, [openModal, history])

  return (
    <>
      <PageTitle className='contracts__title'>Contracts</PageTitle>
      <div className='contracts__selects'>
        <SearchInput placeholder='CONTRACTOR NAME' reset={reset} />
        <SelectOptionDropDown defaultText='HIRE TYPE' optionsList={options[2]} reset={reset} />
        <SelectOptionDropDown
          calendar='_calendar'
          defaultView='month'
          defaultText='DATE STARTED'
          optionsList={options[4]}
          reset={reset}
        />
        <Btn onClick={() => setReset(!reset)}>Reset</Btn>
      </div>
      <div className='contracts__documents'>{documents}</div>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        modalChildren={
          <DocumentPreviewMiniature
            src={defLogo}
            one={selectedDoc.one}
            two={selectedDoc.two}
            onClick={event => console.log(event)}
          />
        }
        navChildrenFirst={
          <NavLink
            className={history ? activeNav : 'nav__list-item__link active'}
            to='/document'
            onClick={e => {
              e.preventDefault()
              setHistory(false)
            }}
          >
            Document
          </NavLink>
        }
        navChildrenSecond={
          <NavLink
            className={history ? 'nav__list-item__link active' : activeNav}
            to='/history'
            onClick={e => {
              e.preventDefault()
              setHistory(true)
            }}
          >
            History
          </NavLink>
        }
        navChildrenThird={
          <>
            <Btn className='contracts__modal-btn'>Upload New</Btn>
            <Btn className='contracts__modal-btn' onClick={closeModal}>
              Close
            </Btn>
          </>
        }
        modalChildrenData={
          history ? (
            showHistory ? (
              <>
                <TableModal
                  style={{ width: '100%' }}
                  firstTableHeaderTitle='#'
                  secondTableHeaderTitle='Who'
                  thirdTableHeaderTitle='When'
                  fourthTableHeaderTitle='Document Name'
                  fifthTableHeaderTitle='View'
                >
                  <TableModalRow
                    rowNumber='1'
                    whoCell='Mark B.'
                    whenCell='19.01.2023 20:31'
                    docNameCell='quartz plant hire...'
                    viewOnClick={() => setShowHistory(!showHistory)}
                  />
                </TableModal>
                <Swiper
                  modules={[Navigation, Pagination, A11y, EffectFlip]}
                  slidesPerView={1}
                  effect={'flip'}
                  grabCursor={true}
                  pagination={{
                    type: 'fraction'
                  }}
                  navigation={true}
                >
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={contractsDoc} alt={selectedDoc.id} />
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <TableModal
                firstTableHeaderTitle='#'
                secondTableHeaderTitle='Who'
                thirdTableHeaderTitle='When'
                fourthTableHeaderTitle='Document Name'
                fifthTableHeaderTitle='View'
              >
                <TableModalRow
                  rowNumber='1'
                  whoCell='Mark B.'
                  whenCell='19.01.2023 20:31'
                  docNameCell='quartz plant hire...'
                  viewOnClick={() => setShowHistory(true)}
                />
              </TableModal>
            )
          ) : (
            <Swiper
              modules={[Navigation, Pagination, A11y, EffectFlip]}
              slidesPerView={1}
              effect={'flip'}
              grabCursor={true}
              pagination={{
                type: 'fraction'
              }}
              navigation={true}
            >
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={contractsDoc} alt={selectedDoc.id} />
              </SwiperSlide>
            </Swiper>
          )
        }
      ></Modal>
      <PaginationCustom
        onClickPrev={() => setPage(page - 1)}
        onClickNext={() => setPage(page + 1)}
        disabledPrev={page === 1}
        disabledNext={page * PAGE_LIMIT >= ElementsQuantity}
      >
        {renderPageNumbers()}
      </PaginationCustom>
    </>
  )
}

export default Contracts
