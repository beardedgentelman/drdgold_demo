import NavbarLink from '../navbarLink/NavbarLink'

import './navbar.css'

const Navbar = () => {
  return (
    <nav className='header__nav'>
      <ul className='nav__list'>
        <NavbarLink to='/user/dashboard'>Dashboard</NavbarLink>
        <NavbarLink to='/user/viewDocuments'>View Documents</NavbarLink>
        <NavbarLink to='/user/upload'>Upload</NavbarLink>
        <NavbarLink to='/user/anomalies'>Anomalies</NavbarLink>
        <NavbarLink to='/user/machines'>Machines</NavbarLink>
      </ul>
    </nav>
  )
}

export default Navbar
