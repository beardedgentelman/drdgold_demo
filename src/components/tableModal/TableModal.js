import './table-modal.css'

const tableModal = props => {
  return (
    <div className='divTable'>
      <div className='divTableHeading'>
        <div className='divTableHeadingRow'>
          <div className='divTableHead'>{props.firstTableHeaderTitle}</div>
          <div className='divTableHead'>{props.secondTableHeaderTitle}</div>
          <div className='divTableHead'>{props.thirdTableHeaderTitle}</div>
          <div className='divTableHead'>{props.fourthTableHeaderTitle}</div>
          <div className='divTableHead'>{props.fifthTableHeaderTitle}</div>
        </div>
      </div>
      <div className='divTableBody'>{props.children}</div>
    </div>
  )
}

export default tableModal
