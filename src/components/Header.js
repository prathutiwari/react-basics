import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";


const Header = () => {
  const [btnName, setBtnName] = useState('LogIn');

  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <ul className="nav-items">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About Us</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li>Cart</li>
        <button 
        onClick={() => 
          btnName === 'LogIn' ? setBtnName('LogOut'): setBtnName('LogIn')

        }>
        {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
