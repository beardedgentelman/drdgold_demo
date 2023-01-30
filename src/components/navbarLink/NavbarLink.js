import { NavLink } from 'react-router-dom'
import { activeNav } from 'helpers/activeNav/activeNav'

import './navbar-link.css'

const NavbarLink = props => {
  return (
    <li>
      <NavLink className={activeNav} to={props.to}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavbarLink
