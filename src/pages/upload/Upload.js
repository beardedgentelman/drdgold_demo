import { useEffect, useState } from 'react'

import { PageTitle, PageUnderTitle, UploadForm, UploadingStep, UploadScanProcess, Verified } from 'components'

//This component handles the upload process of a file.
const Upload = props => {
  // States for active and non-active steps
  const activeStep = 'steps__wrapper active'
  const nonActiveStep = 'steps__wrapper'

  // State for sending file
  const [sending, setSending] = useState(false)

  // State for filling the progress bar
  const [filled, setFilled] = useState(0)

  // State for verifying the file
  const [verified, setVerified] = useState(false)

  // Check if the progress is filled and set verified to true
  if (filled === 100) {
    setTimeout(() => {
      setVerified(true)
    }, 50)
  }

  // useEffect to increment progress bar when sending file
  useEffect(() => {
    if (filled < 100 && sending) {
      setTimeout(() => setFilled(prev => (prev += 2)), 150)
    }
  }, [filled, sending])

  // State for form data
  let [dataSub, setDataSub] = useState({})

  // State for file size
  let [size, setSize] = useState('size')

  // State for file name
  let [name, setName] = useState('name')

  // Function to handle when the user submits the form
  async function handleFormData(data) {
    setDataSub(data)
    setName(data.name)
    setSize(Math.round(data.size * 0.000001 * 100) / 100) // rounding to hundredths
    setSending(true)
    const formData = new FormData()
    formData.append('file', data)
    console.log('sending...', data)
  }

  return (
    <>
      {!verified ? (
        <>
          <PageTitle>Upload timesheet document</PageTitle>
          <PageUnderTitle>You can upload scanned copy of the timesheet for approval</PageUnderTitle>
          {!sending ? (
            <UploadForm submit={handleFormData} />
          ) : (
            <UploadScanProcess
              fileName={name}
              fileSize={size !== 'size' ? size + ' MB' : size}
              filled={filled}
              sending={sending}
            />
          )}
        </>
      ) : (
        <Verified />
      )}

      <section className='main__steps'>
        <UploadingStep className={activeStep} number='1' title='Select Type' />
        <UploadingStep className={sending ? activeStep : nonActiveStep} number='2' title='Upload File' />
        <UploadingStep className={filled < 50 ? nonActiveStep : activeStep} number='3' title='Scan File' />
        <UploadingStep className={verified ? activeStep : nonActiveStep} number='4' title='Verify' />
      </section>
    </>
  )
}

export default Upload
