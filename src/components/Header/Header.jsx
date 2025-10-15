import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
           <h2>Order your food here</h2> 
           <p>Craving your favorite meal? With just a few clicks, you can browse a wide variety of cuisines, customize your order, and get fresh, hot food delivered right to your doorstep. Fast, reliable, and easy – enjoy delicious food anytime, anywhere!</p>
           <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header