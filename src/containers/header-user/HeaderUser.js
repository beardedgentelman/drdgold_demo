import { Link } from 'react-router-dom'

import { BurgerMenu, Logo, Navbar, UserHeader } from 'components'

import './header.css'

const HeaderUser = () => {
  return (
    <header className='header'>
      <section className='header__content'>
        <Link to='/user/dashboard'>
          <Logo />
        </Link>
        <Navbar />
        <UserHeader />
        <BurgerMenu />
      </section>
    </header>
  )
}

export default HeaderUser
