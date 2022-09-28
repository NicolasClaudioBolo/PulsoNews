import React from 'react'
import PropTypes from 'prop-types'
import './SmallCard.css'
import motivation from '../../Assets/motivation.jpg'

export const SmallCard = props => {
    return (
        <div>
            <div className='small-card-container'>
                <div className='img-small-container'>
                    <img src={props.image} className='img-small' alt={props.title} />
                </div>
            </div>
            <div>
                <span>{props.paragraph}</span>
            </div>
        </div>
    )
}

SmallCard.propTypes = {}
