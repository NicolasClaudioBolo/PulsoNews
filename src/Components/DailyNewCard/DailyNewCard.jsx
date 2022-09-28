import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './DailyNewCard.css'

export const DailyNewCard = ({ id, title, paragraph, image }) => {
    const route = `/${id} `
    return (
        <Link to={route} className='link'>
        <div className='daily-new-container'>
            <h1 className='article-text-position'>{title}</h1>
            <img className='article-img-size' src={image} alt={title} />
        </div>
        </Link>
    )
}

DailyNewCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    paragraph: PropTypes.string
}
