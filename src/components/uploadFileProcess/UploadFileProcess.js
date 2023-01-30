import icon from 'assets/icons/img-file-icon.svg'

import './uploadFileProcess.css'

function UploadFileProcess(props) {
  return (
    <div className='upload-process__file'>
      <img className='upload-process__img' src={icon} alt='icon' />
      <div className='upload-process__progress'>
        <div className='progress__file-prop'>
          <p className='progress__title'>{props.fileName}</p>
          <p className='progress__size'>{props.fileSize}</p>
        </div>
        <div className='progress-bar'>
          <div
            className='progress-bar__inner'
            style={{
              height: '100%',
              width: `${props.filled}%`,
              backgroundColor: '#FCAF17',
              transition: 'width .3s'
            }}
          ></div>
          <span>{props.filled}%</span>
        </div>
      </div>
    </div>
  )
}

export default UploadFileProcess
