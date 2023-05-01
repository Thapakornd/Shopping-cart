import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss'

const Navbar = ({setShow ,size}) => {
  return (
    <nav>
        <div className="navbar">
            <span className='my_shop' onClick={() => setShow(true)}>My Shopping</span>
            <div className="cart" onClick={() => setShow(false)}>
                <span>
                    <ShoppingCartIcon className='icon'/>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar 