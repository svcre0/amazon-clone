import React, { useContext } from 'react';  
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from 'react-router-dom';
import './Header.css';
import ShoppingContext from '../../Context/shopping/shoppingContext';
import {auth} from '../../firebase';


const Header = () => {

  const shoppingContext = useContext(ShoppingContext);
  const {basket = [], user, setUser} = shoppingContext;

  const handleAuthentication = () => {
  if (user) {
  auth.signOut().then(() => {
  setUser(null);
  });
  }
  };
  
  


  return (
    
    <header className='header'>
      <Link className='logo-container' to='/home'>
        <img src='/Assets/img/amazon logo.png' alt='logo' className='logo'/>
        <span className='logo-tag'>.co.za</span>
      </Link>


      <span className='location-icon'>
        <FmdGoodOutlinedIcon style={{ fontSize: '20px' }} />
      </span>
      <div className='header-option'>
        <div className='delivery-info'>
          <span className='delivery-header-optionOne'>Deliver to</span>
          <span className='header-optionTwo'>South Africa</span>
        </div>
      </div>

      {/* Header search section */}
      <div className='header-search'> 
        <Link to="/products" className="product-link">
        <button className='all-search'>
          All <ArrowDropDownOutlinedIcon style={{ fontSize: '13px' }} />
        </button>
        </Link>
        <input
          className='header-search-input'
          type='text'
          placeholder='Search Amazon.co.za'
        />
        <button className='search-icon'>
          <SearchIcon />
        </button>
        <span className='lang'>
          <img src='/Assets/img/lang.png' alt='language' />
          <ArrowDropDownOutlinedIcon style={{ fontSize: '14px' }} />
        </span>
      </div>

  
      <div className='header-links'>
        {/* Authentication link */}
        <Link to={!user && '/login'}  className="header-optionLink" onClick={handleAuthentication}>
          <div className="header-option">
            <span className="header-optionOne">Hello {!user ? 'Guest' :
            user.email}</span>
            <span className="header-optionTwo">{user? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

       
       
         <Link to='/orders' className="header-option" >
          <div className="header-option">

          
            <span className="header-optionOne">Returns</span>
            <span className="header-optionTwo"> & Orders</span>
          
          </div>
         </Link>
        

        {/* Basket link */}
     
          <div className="header_optionBasket">
            <span className='header-basket'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" height='22px' className="size-6">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
              </svg>

            <Link to='/checkout'  className='basket-link'>
            <span className='basket-count'>{basket.length} </span>
            </Link>  

            </span>
          </div>
   
      </div>
    </header>
  );
};

export default Header
