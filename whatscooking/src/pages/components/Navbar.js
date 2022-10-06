import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = props => {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>
                <h1>Cooking Ninja</h1>
            </Link>
            <Link to='/create'>
               Create
            </Link>
        </nav>
    </div>
  )
}


export default Navbar