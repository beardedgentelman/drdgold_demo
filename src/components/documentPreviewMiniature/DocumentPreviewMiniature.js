import autoriseIcon from './../../assets/icons/autorise_icon.svg'
import invoiceIcon from './../../assets/icons/invoice_icon.svg'
import poIcon from './../../assets/icons/po_icon.svg'
import quoteIcon from './../../assets/icons/quote_icon.svg'
import timesheetIcon from './../../assets/icons/timesheet_icon.svg'

import './documentPreviewMiniature.css'

const DocumentPreviewMiniature = props => {
  const typeDoc = id => {
    if (id === 'autorise') {
      return autoriseIcon
    } else if (id === 'invoice') {
      return invoiceIcon
    } else if (id === 'po') {
      return poIcon
    } else if (id === 'quote') {
      return quoteIcon
    } else if (id === 'timesheet') {
      return timesheetIcon
    }
  }

  return (
    <div className='document_wrapper' id={props.id} onClick={props.onClick}>
      <img className='document-img' src={typeDoc(props.id)} alt={props.id + ' icon'} />
      <div className='document-info'>
        <p className='document-text'>{props.one}</p>
        <p className='document-text'>{props.two}</p>
        <p className='document-text'>{props.three}</p>
        <p className='document-text'>{props.four}</p>
        <p className='document-text'>{props.five}</p>
      </div>
    </div>
  )
}

export default DocumentPreviewMiniature
