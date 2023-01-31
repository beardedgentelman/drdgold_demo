import { Link } from 'react-router-dom'

import { BurgerMenu, HeaderUser, Logo, Navbar } from 'components'

import './header.css'

const headerContent = () => {
  return (
    <section className='header__content'>
      <Link to='/dashboard'>
        <Logo />
      </Link>
      <Navbar />
      <HeaderUser />
      <BurgerMenu />
    </section>
  )
}

const Header = () => {
  return <header className='header'>{headerContent()}</header>
}

export default Header
