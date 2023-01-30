import { NavLink } from 'react-router-dom'
import { activeNav } from 'helpers/activeNav/activeNav'

import './navbar.css'

const Navbar = () => {
  return (
    <nav className='header__nav'>
      <ul className='nav__list'>
        <li>
          <NavLink className={activeNav} to='/dashboard'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNav} to='/viewDocuments'>
            View Documents
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNav} to='/upload'>
            Upload
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNav} to='/anomalies'>
            Anomalies
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNav} to='/machines'>
            Machines
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
