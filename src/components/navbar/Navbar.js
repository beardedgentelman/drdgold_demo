import NavbarLink from '../navbarLink/NavbarLink'

import './navbar.css'

const Navbar = props => {
  return (
    <nav className='header__nav'>
      <ul className='nav__list'>
        <NavbarLink to='/dashboard'>Dashboard</NavbarLink>
        <NavbarLink to='/viewDocuments'>View Documents</NavbarLink>
        <NavbarLink to='/upload'>Upload</NavbarLink>
        <NavbarLink to='/anomalies'>Anomalies</NavbarLink>
        <NavbarLink to='/machines'>Machines</NavbarLink>
      </ul>
    </nav>
  )
}

export default Navbar
