import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, paragraph, image }) => {
    const route = `/${id} `
    return (
        <Link to={route}>
        {/* <div className="card"> */}
            <h1 className='main-tittle-card'>{title}</h1>
            <img className='image-card' src={image} alt={title} />
            {/* <div className='main-tittle-card'>
                <span className='title-card'>{title}</span>
            </div>
            <span className='paragraph-card'>{paragraph}</span> */}
        {/* </div> */}
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    paragraph: PropTypes.string
}

