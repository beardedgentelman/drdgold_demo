import { Link } from 'react-router-dom'
import verifiedIcon from 'assets/images/verify.gif'

import Btn from 'components/btn/Btn'

import './verified.css'

function Verified() {
  return (
    <div className='verified__container'>
      <img src={verifiedIcon} alt='verified' />
      <h5 className='verified__title'>Verified!</h5>
      <p className='verified__text'>
        Documents have been uploaded successfully, check your registered email for confirmation.
      </p>
      <Link to='/dashboard'>
        <Btn>Return home</Btn>
      </Link>
    </div>
  )
}

export default Verified
