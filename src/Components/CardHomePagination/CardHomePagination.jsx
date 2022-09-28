import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CardHomePagination.css'
import motivation from '../../Assets/motivation.jpg'

export const CardHomePagination = ({ id, title, paragraph, image }) => {

    const route = `/${id} `
    return (

        <Link to={route}>
            <div className='card-home-pagination'>
   
                    <img className='image-card-home-pagination' src={image} alt={title} />
                    <div className='main-tittle-card-home-pagination'>
                        <span className='title-card-home-pagination'>{title}</span>
                    </div>
                
                {/* <span className='paragraph-card-home-pagination'>{paragraph}</span> */}
            </div>
        </Link>
    )
}

CardHomePagination.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    paragraph: PropTypes.string
}

