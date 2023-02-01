import { useMemo, useState } from 'react'
import options from 'helpers/selectOptions/SelectOptions'

import {
  Btn,
  DocumentPreviewMiniature,
  Modal,
  Pagination,
  PaginationPageNum,
  SearchInput,
  SelectOptionDropDown
} from 'components'

import defImg from './../../assets/icons/machines-img.svg'
import img1 from './../../assets/icons/machines-img1.svg'
import img2 from './../../assets/icons/machines-img2.svg'
import img3 from './../../assets/icons/machines-img3.svg'

import './machines.css'

const PAGE_LIMIT = 9

function Machines() {
  const [reset, setReset] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedDoc, setSelectedDoc] = useState({})
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => setOpenModal(false)

  const someDocInfo = useMemo(
    () => ({
      one: 'BELL DUMPER ( B8 )',
      two: 'QUARTZ PLANT HIRE CC',
      three:
        'Description of the machine... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }),
    []
  )

  const documents = useMemo(() => {
    const docMinis = []
    for (let i = 0; i < 20; i++) {
      const currentDoc = {
        one: someDocInfo.one,
        two: someDocInfo.two,
        three:
          'Description of the machine... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      }
      docMinis.push(
        <DocumentPreviewMiniature
          key={i + '-' + currentDoc.one + '-' + currentDoc.two}
          src={defImg}
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

  const totalPages = Math.ceil(20 / PAGE_LIMIT)

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
      <div className='machines__selects'>
        <SearchInput placeholder='SEARCH FOR...' reset={reset} />
        <SelectOptionDropDown defaultText='Type' optionsList={options[2]} reset={reset} />
        <SelectOptionDropDown defaultText='Sub - Type' optionsList={options[4]} reset={reset} />
        <Btn onClick={() => setReset(!reset)}>Reset</Btn>
      </div>
      <div className='machines__documents'>{documents}</div>
      <Modal openModal={openModal} closeModal={closeModal}>
        <p>{selectedDoc.one}</p>
        <p>{selectedDoc.two}</p>
        <div className='machine-modal__img-wrapper'>
          <img className='machine-modal__img' src={img1} alt='some' />
          <img className='machine-modal__img' src={img2} alt='some' />
          <img className='machine-modal__img' src={img3} alt='some' />
        </div>
        <p className='machine-modal__desc'>{selectedDoc.three}</p>
      </Modal>
      <Pagination
        onClickPrev={() => setPage(page - 1)}
        onClickNext={() => setPage(page + 1)}
        disabledPrev={page === 1}
        disabledNext={page * PAGE_LIMIT >= 20}
      >
        {renderPageNumbers()}
      </Pagination>
    </>
  )
}

export default Machines
