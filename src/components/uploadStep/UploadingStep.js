import './uploadingStep.css'

function UploadingStep(props) {
  return (
    <div className={props.className}>
      <div className='steps__ball'>{props.number}</div>
      <p className='steps__title'>{props.title}</p>
    </div>
  )
}

export default UploadingStep
