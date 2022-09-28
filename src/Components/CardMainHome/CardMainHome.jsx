import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CardMainHome.css'
import motivation from '../../Assets/motivation.jpg'

export const CardMainHome = ({ title, paragraph, id, image }) => {
    const route = `/${id} `
    return (


        <div className='card-home-section'>
            <Link to={route} className='link-card-home-main'>
                <div className='card-home-main'>
                    <img className='image-card-home-main' src={image} alt={title} />
                    <div className='main-tittle-card-home-img'>
                        {/* <span className='title-card-home-main-img'>{title}</span> */}
                    </div>

                    <div className='main-container-home-main'>
                        <div className='second-container-home'>
                            <div className='main-tittle-card-home-main'>
                                <span className='title-card-home-main'>{title}</span>
                            </div>
                            <span className='paragraph-card-home-main'>{paragraph}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

CardMainHome.propTypes = {

    id: PropTypes.number,
    title: PropTypes.string,
    secondaryTittle: PropTypes.string,
    paragraph: PropTypes.string
}

