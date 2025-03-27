import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ContainerStyles, onClick}) => {
const navLinks = [
  {path: '/', title: 'Home'},
  {path: '/collection', title: 'Collection'},
  {path: '/blog', title: 'Blog'},
  {path: '/mailto:info@shopanna.com', title: 'Contact'},
]

  return (
    <nav className={ContainerStyles}>
      {navLinks.map((Link) => (
    <NavLink
      key={Link.title}
      to={Link.path}
      className={({ isActive }) => `px-3 py-2 rounded-full ${ isActive ? 'active-link' : '' }`}
      onClick={onClick} //Close menu when link is clicked
      >
      {Link.title}
    </NavLink>
      ))}    
    </nav>
  )
}

export default Navbar