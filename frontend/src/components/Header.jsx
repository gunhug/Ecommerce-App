import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaBars, FaBarsStaggered } from 'react-icons/fa6'
import {TbUserCircle} from 'react-icons/tb'
import {RiUserLine} from 'react-icons/ri'

const Header = () => {
  return (
    <header className='mx-auto max-w-[1440px] px-6 lg:px-12'>
      <div className='bg-primary'>
        {/* Logo */}
        <Link to={'/'} className="bold-28 bg-red-500">Shopanna</Link>
        {/* NAVBAR */}
        <div className='bg-yellow-500'>
          <Navbar />
        </div>
        {/* BUTTONS */}
        <div>
          {/* MENU TOGGLE */}
          <>
          <FaBars />
          </>
          {/* CART */}
          <Link>
            <div className=''>Cart</div>
          </Link>
          {/* USER PROFILE */}
          <button>Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header