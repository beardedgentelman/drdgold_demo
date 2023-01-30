import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { EditProfileIcon, HelpIcon, LogoutIcon, MyProfileIcon, SettingsIcon } from 'assets/icons'

import './userMenu.css'

const UserMenu = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='header__user-menu scale-up-center'>
      <ul className='user-menu__list'>
        <li className='user-menu__list-item'>
          <Link to={'#'}>
            <MyProfileIcon />
            My Profile
          </Link>
        </li>
        <li className='user-menu__list-item'>
          <Link to={'#'}>
            <EditProfileIcon />
            Edit Profile
          </Link>
        </li>
        <li className='user-menu__list-item'>
          <Link to={'#'}>
            <SettingsIcon />
            Settings
          </Link>
        </li>
        <li className='user-menu__list-item'>
          <Link to={'#'}>
            <HelpIcon />
            Help
          </Link>
        </li>
        <li className='user-menu__list-item'>
          <Link to={'#'}>
            <LogoutIcon />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
})

export default UserMenu
