import userAvatar from 'assets/images/header-user-img.jpg'

import './userHeader.css'

function UserHeader() {
  return (
    <div className='header__user'>
      <p className='user__name'>
        <span>Anil G.</span>
      </p>
      <img src={userAvatar} alt='User avatar' className='user__img' />
    </div>
  )
}

export default UserHeader
