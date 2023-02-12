import { Link } from 'react-router-dom'

import { BurgerMenu, Logo, NavbarCFO, UserHeader } from 'components'

import './../header-user/header.css'

const HeaderUser = () => {
  return (
    <header className='header'>
      <section className='header__content'>
        <Link to='/cfo/dashboard'>
          <Logo />
        </Link>
        <NavbarCFO />
        <UserHeader />
        <BurgerMenu />
      </section>
    </header>
  )
}

export default HeaderUser
