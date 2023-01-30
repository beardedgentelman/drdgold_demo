import { useEffect, useRef, useState } from 'react'

import Btn from 'components/btn/Btn'

import './uploadForm.css'

let file

function UploadForm(props) {
  let myRefname = useRef() // reference to input element
  const buttonRef = useRef() // reference to button element
  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
  let validSize = 10000000

  // state to keep track if the user is currently dragging a file
  const [drag, setDrag] = useState(false)

  // state to keep track if there is a file currently selected
  const [isFile, setFile] = useState(false)

  // state to store the file name
  const [fileName, setFileName] = useState('')

  // state to store the type of submit button
  const [submit, setSubmit] = useState(false)

  // state to store class name of the upload section
  const [className, setClassName] = useState('upload__sector')

  // set a class name on an upload section based on the values of the variables drag and isFile.
  useEffect(() => {
    if ((drag && isFile) || drag) {
      setClassName('upload__sector active')
    } else {
      setClassName('upload__sector')
    }
  }, [drag, isFile])

  // set a type to a submit button
  useEffect(() => {
    if (isFile) {
      setSubmit(true)
    } else {
      setSubmit(false)
    }
  }, [isFile])

  // function to simulate a click on the input element
  const handleClick = e => {
    if (buttonRef.current === e.target) return // when button have type submit simulation not gonna be triggered
    myRefname.current.click()
  }

  // function to handle when the user starts dragging a file
  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
  }

  // function to handle when the user leaves the drag area
  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }

  // function to handle when the user drops a file
  function onDropHandler(e) {
    e.preventDefault()
    if (e.dataTransfer.files.length === 1) {
      file = e.dataTransfer.files[0]
      let fileSize = file.size
      let fileType = file.type
      if (fileSize <= validSize && validExtensions.includes(fileType)) {
        setFile(true)
        setFileName(file.name)
        return file.name
      } else {
        alert('Wrong format or big size')
        setClassName('upload__sector')
      }
    } else {
      alert('Choose one file')
    }
  }

  // function to handle when the user selects a file from the input
  function handleChange(e) {
    e.preventDefault()
    if (e.target.files.length === 1) {
      file = e.target.files[0]
      let fileSize = file.size
      let fileType = file.type
      if (fileSize <= validSize && validExtensions.includes(fileType)) {
        setFile(true)
        setFileName(file.name)
        return file.name
      } else {
        alert('Wrong format or big size')
        setClassName('upload__sector')
      }
    } else {
      alert('Choose one file')
    }
  }

  // share data from form to another component
  const handleSubmit = e => {
    e.preventDefault()
    let formData = file
    props.submit(formData)
  }

  return (
    <>
      <form method='post' className='main__upload' onSubmit={handleSubmit}>
        {drag ? (
          // render this section when the user is currently dragging a file
          <section
            className={className}
            onClick={handleClick}
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
          >
            {isFile ? (
              // render the file name if there is a file selected
              <div className='uploaded__file'>{fileName}</div>
            ) : (
              <>
                <p className='sector__title'>Select a file or drag and drop here</p>
                <p className='sector__formats'>JPG, PNG or PDF, file size no more than 10MB</p>
              </>
            )}
            <input
              accept='.png, .jpg, .jpeg, .pdf'
              ref={myRefname}
              onChange={onDropHandler}
              type='file'
              name='uploadedFile'
              className='upload__input'
            />
            <Btn
              referral={submit ? buttonRef : undefined}
              type={submit ? 'submit' : 'button'}
              className={!isFile ? 'upload__button active' : 'upload__button'}
            >
              Select File {isFile ? '' : 'Type'}
            </Btn>
          </section>
        ) : (
          // render this section when the user is select a file by clicking
          <section
            className={isFile ? 'upload__sector active' : 'upload__sector'}
            onClick={handleClick}
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
          >
            {isFile ? (
              <div className='uploaded__file'>{fileName}</div>
            ) : (
              <>
                <p className='sector__title'>Select a file or drag and drop here</p>
                <p className='sector__formats'>JPG, PNG or PDF, file size no more than 10MB</p>
              </>
            )}
            <input
              accept='.png, .jpg, .jpeg, .pdf'
              ref={myRefname}
              onChange={handleChange}
              type='file'
              name='uploadedFile'
              className='upload__input'
            />
            <Btn
              referral={submit ? buttonRef : undefined}
              type={submit ? 'submit' : 'button'}
              className={isFile ? 'upload__button active' : 'upload__button'}
            >
              Select File {isFile ? '' : 'Type'}
            </Btn>
          </section>
        )}
      </form>
    </>
  )
}

export default UploadForm
