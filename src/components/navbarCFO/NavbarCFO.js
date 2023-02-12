import NavbarLink from '../navbarLink/NavbarLink'

import './../navbar/navbar.css'

const NavbarCFO = () => {
  return (
    <nav className='header__nav'>
      <ul className='nav__list cfo__nav'>
        <NavbarLink to='/cfo/dashboard'>Dashboard</NavbarLink>
        <NavbarLink to='/cfo/contracts'>Contracts</NavbarLink>
        <NavbarLink to='/cfo/telematics'>Telematics</NavbarLink>
        <NavbarLink to='/cfo/anomalies'>Anomalies</NavbarLink>
        <NavbarLink to='/cfo/projections_simulations'>Projections / Simulations</NavbarLink>
        <NavbarLink to='/cfo/reports'>Reports</NavbarLink>
      </ul>
    </nav>
  )
}

export default NavbarCFO
