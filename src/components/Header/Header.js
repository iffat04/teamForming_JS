import React from 'react';
import './Header.css'
import logo from '../resources/team.svg'
//<a href="https://storyset.com/people">People illustrations by Storyset</a>
const Header = () => {
    return (
        <div className='header'>
              <img className='logo' src={logo} alt=""/>
           <div>
           <h1>WORK UNIT FORMATION</h1>
            <h3>Total Budget : 10000</h3>
           </div>
           
          
        </div>
         
    );
};

export default Header;