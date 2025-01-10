import React from 'react';
import './lowerHeaderOne.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const LowerHeaderOne = () => {
    return (
        <div className='lower-nav'>
            <span className='menu-icon'>
                <MenuOutlinedIcon style={{ fontSize: '24px' }} />
            </span>
            <span className='first-active'>All</span>
            <span>Welcome to Amazon</span>
            <span>Today's Deal</span>
            <span>Customer Service</span>
            <span>Sell on Amazon</span>
            <span className='right-pic'>
                <img src='/Assets/img/AMAZON_EVERYDAY-ESSENTIALS_BANNER_400x39px._CB565523058_.png' alt='lower' />
            </span>
        </div>
    );
};

export default LowerHeaderOne;
