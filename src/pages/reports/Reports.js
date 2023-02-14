import { useMemo, useState } from 'react'

import { Btn, DocumentPreviewMiniature, PageTitle, PaginationCustom, PaginationPageNum, SearchInput } from 'components'

import defLogo from '../../assets/icons/reports-logo.svg'

import './reports.css'

const PAGE_LIMIT = 16
const ElementsQuantity = 150

const Reports = () => {
  const [page, setPage] = useState(1)

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
      one: 'Utilization',
      two: 'factor (target)'
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
          onClick={() => console.log('click')}
        />
      )
    }
    return docMinis.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT)
  }, [someDocInfo, page])

  return (
    <>
      <PageTitle className='reports__title'>Reports</PageTitle>
      <form className='reports__selects'>
        <SearchInput placeholder='Search for report' />
        <Btn>Search</Btn>
      </form>
      <div className='contracts__documents'>{documents}</div>
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

export default Reports
