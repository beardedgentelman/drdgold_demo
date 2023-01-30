import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import classNames from 'classnames'
import options from 'helpers/selectOptions/SelectOptions'

import { Audit, Btn, Document, DocumentPreviewMiniature, SelectOptionDropDown, TelData } from 'components'

import { activeNav } from '../../helpers/activeNav/activeNav'

import './viewDocuments.css'

const somId = ['autorise', 'invoice', 'po', 'quote', 'timesheet']

const PAGE_LIMIT = 20

function ViewDocuments() {
  const [reset, setReset] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedDoc, setSelectedDoc] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [doc, setDoc] = useState(true)
  const [audits, setAudits] = useState(false)
  const [telData, setTelData] = useState(false)
  const closeModal = () => setOpenModal(false)

  const randomVal = () => somId[Math.floor(Math.random() * somId.length)]

  const someDocInfo = useMemo(
    () => ({
      id: randomVal(),
      one: 'BELL DUMPER ( B8 )',
      two: 'SMART EARTHMOVING',
      three: 'WILLIE ENGELBRECTH',
      four: 'DW 3708',
      five: '10591'
    }),
    []
  )

  const documents = useMemo(() => {
    const docMinis = []
    for (let i = 0; i < 200; i++) {
      const currentDoc = {
        id: randomVal(),
        one: someDocInfo.one,
        two: someDocInfo.two,
        three: someDocInfo.three,
        four: someDocInfo.four,
        five: someDocInfo.five
      }
      docMinis.push(
        <DocumentPreviewMiniature
          key={i}
          id={currentDoc.id}
          one={currentDoc.one}
          two={currentDoc.two}
          three={currentDoc.three}
          four={currentDoc.four}
          five={currentDoc.five}
          onClick={() => {
            setSelectedDoc(currentDoc)
            setOpenModal(o => !o)
          }}
        />
      )
    }
    return docMinis.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT)
  }, [someDocInfo, page])

  const totalPages = Math.ceil(200 / PAGE_LIMIT)

  const renderPageNumbers = () => {
    const elements = []
    for (let i = 1; i <= totalPages; i++) {
      elements.push(
        <div
          key={i}
          className={classNames('view-documentation__page-number', page === i ? 'active' : '')}
          onClick={() => setPage(i)}
        >
          {i}
        </div>
      )
    }
    return elements
  }

  return (
    <>
      <div className='view-documentation__selects'>
        <SelectOptionDropDown defaultText='Filetype' optionsList={options[0]} reset={reset} />
        <SelectOptionDropDown defaultText='Company' optionsList={options[1]} reset={reset} />
        <SelectOptionDropDown defaultText='Machine' optionsList={options[2]} reset={reset} />
        <SelectOptionDropDown defaultText='Foreman' optionsList={options[3]} reset={reset} />
        <SelectOptionDropDown defaultText='Upload Date' optionsList={options[4]} reset={reset} />
        <Btn onClick={() => setReset(!reset)}>Reset</Btn>
      </div>
      <div className='view-documentation__documents'>{documents}</div>
      <Popup open={openModal} lockScroll closeOnDocumentClick onClose={closeModal}>
        {() => {
          if (!openModal) {
            setDoc(false)
            setAudits(false)
            setTelData(false)
          }
        }}
        <div className='modal'>
          <DocumentPreviewMiniature
            id={selectedDoc.id}
            one={selectedDoc.one}
            two={selectedDoc.two}
            three={selectedDoc.three}
            four={selectedDoc.four}
            five={selectedDoc.five}
            onClick={event => console.log(event)}
          />
          <div className='view-documentation__docinfo'>
            <nav>
              <ul>
                <li className='modal_nav'>
                  <NavLink
                    className={doc ? 'nav__list-item__link active' : activeNav}
                    to='/document'
                    onClick={e => {
                      e.preventDefault()
                      setDoc(true)
                      setAudits(false)
                      setTelData(false)
                    }}
                  >
                    Document
                  </NavLink>
                </li>
                <li className='modal_nav'>
                  <NavLink
                    className={audits ? 'nav__list-item__link active' : activeNav}
                    to='/document'
                    onClick={e => {
                      e.preventDefault()
                      setDoc(false)
                      setAudits(true)
                      setTelData(false)
                    }}
                  >
                    Audits
                  </NavLink>
                </li>
                <li className='modal_nav'>
                  <NavLink
                    className={telData ? 'nav__list-item__link active' : activeNav}
                    to='/document'
                    onClick={e => {
                      e.preventDefault()
                      setDoc(false)
                      setAudits(false)
                      setTelData(true)
                    }}
                  >
                    Telematics data
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className='modal_data'>{doc ? <Document /> : audits ? <Audit /> : telData ? <TelData /> : null}</div>
          </div>
        </div>
        <Btn className='close_modal' onClick={closeModal}>
          Close
        </Btn>
      </Popup>
      <div className='view-documentation__pagination'>
        <button
          className={classNames('view-documents__btn', 'prev')}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &#171; prev
        </button>
        {renderPageNumbers()}
        <button
          className={classNames('view-documents__btn', 'next')}
          onClick={() => setPage(page + 1)}
          disabled={page * PAGE_LIMIT >= 200}
        >
          Next &#187;
        </button>
      </div>
    </>
  )
}

export default ViewDocuments
