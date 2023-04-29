import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
  const [customer, setCustomer] = useState(sessionStorage.getItem('customer'));
  
  const handleLogout = () => {
    sessionStorage.clear();
    setCustomer(null);
  };
  useEffect(() => {
    setCustomer(sessionStorage.getItem('customer'));
  }, []);

  return (
    <div className="navbar">
      <div>
        <img
          className="logo"
          src="https://user-images.githubusercontent.com/293677/225102826-4df36db5-2a90-4348-8016-f6d040de9ce9.svg"
          alt="logo"
        />
      </div>
      <div className="links_countainer">
        <Link to="/">
          <p className="items">Home</p>
        </Link>
        <Link to="/lessons">
          <p className="items">Courses</p>
        </Link>
        {
          customer=="admin@gmail.com"? (
            <Link to="/AddLessonForm">
          <p className="items">Admin Panel</p>
        </Link>
          )
          :
          (
            <p></p>
          )
        }
        
        {
          customer!=null && customer!="" ? (
            
        <Link to="/" onClick={handleLogout}>
          <p className="items_login">Logout</p>
        </Link>
          ) : (
            <Link to="/login">
          <p className="items_login">Login</p>
        </Link>
          )
        }
        {
          customer!=null && customer!="" ?(
            <p>Hello, {customer}</p>

          ):(
            <p></p>
          )
        }
        <Link to="/cart">
          <button className="CartButton">
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Your Cart &nbsp; <FaShoppingCart />
            </p>{' '}
          </button>
        </Link>
        <FaShoppingCart
          className="cart-icon"
          style={{ color: '#8A52F5', fontSize: '20px' }}
        />
      </div>
    </div>
  )
}

export default NavBar
