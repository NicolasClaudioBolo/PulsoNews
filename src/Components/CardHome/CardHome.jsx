import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CardHome.css'


export const CardHome = ({ id, title, paragraph, image }) => {
    const route = `/${id} `
    return (


        <div className='card-home-position'>
            <Link to={route} className='link-card-home'>
                {/* <div className='card-home'></div> */}
                    <img className='image-card-home' src={image} alt={title} />
                
                {/* <span className='paragraph-card-home'>{paragraph}</span> */}
            </Link>
            <div className='main-title-card-home'>
                <span className='title-card-home'>{title}</span>
            </div>
        </div>
        

    )
}

CardHome.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    paragraph: PropTypes.string
}

