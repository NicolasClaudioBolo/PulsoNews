import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from '../../Assets/logo.png'

 





export const Navbar = () => {

    const Banner = () => <img  src={Logo} className='logo-publicidad'/>

    return (
      
           
             
                    <Link to="/" className='container-nav'>
                        <Banner/>
                    </Link>
          
            

      
    );
};
