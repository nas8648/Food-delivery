import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const[Menu, setMenu]=useState("Menu");

  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
      <h1 className='logo'>EpicureXpress</h1>
        {/* <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link> */}
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={Menu==="home" ? "active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={Menu==="menu" ? "active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={Menu==="Mobile-app" ? "active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("Contact Us")} className={Menu==="Contact Us" ? "active":""}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()=== 0 ?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar