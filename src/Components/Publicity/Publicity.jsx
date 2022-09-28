import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Publicity.css'


import BannerImg from '../../Assets/ads.png';

export const Banner = () => <img src={BannerImg} className='logo-publicidad' />


export const Publicity = props => {
    return (


        <Link to="/">
            <Banner />
        </Link>


    )
}

Publicity.propTypes = {}

