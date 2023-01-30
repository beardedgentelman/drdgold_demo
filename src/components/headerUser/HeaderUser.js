import userAvatar from 'assets/images/header-user-img.jpg'

import './headerUser.css'

function HeaderUser() {
  return (
    <div className='header__user'>
      <p className='user__name'>
        <span>Anil G.</span>
      </p>
      <img src={userAvatar} alt='User avatar' className='user__img' />
    </div>
  )
}

export default HeaderUser
