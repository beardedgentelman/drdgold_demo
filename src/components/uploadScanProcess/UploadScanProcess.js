import { useState } from 'react'
import iconScan from 'assets/icons/scan-icon.svg'
import iconUpload from 'assets/icons/uploading-icon.svg'

import UploadFileProcess from 'components/uploadFileProcess/UploadFileProcess'

import './uploadScanProcess.css'

function UploadProcess(props) {
  const [isScan, setIsScan] = useState(false)
  if (props.sending) {
    setTimeout(() => {
      setIsScan(true)
    }, 4000)
  }
  return (
    <section className='upload-process'>
      <img className='upload-process_scan__img' src={isScan ? iconScan : iconUpload} alt='upload icon' />
      <p className='upload-process__title'>Uploading File</p>
      <UploadFileProcess fileName={props.fileName} fileSize={props.fileSize} filled={props.filled} />
    </section>
  )
}

export default UploadProcess
