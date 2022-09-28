import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './PublicityBanner.css'


import BannerImg from '../../Assets/ads.png';

export const Banner = () => <img src={BannerImg} className='logo-publicidad-banner' />


export const PublicityBanner = props => {
    return (


        <Link to="/">
            <Banner />
        </Link>


    )
}

PublicityBanner.propTypes = {}

