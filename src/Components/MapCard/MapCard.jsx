import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../Card/Card'
import { arrayCards } from '../../Utils/Card.utils'
import './MapCard.css'


export const MapCard = props => {
    return (
        <div className='main-div-card'>
            {
                arrayCards.map(card => {
                    return <Card title={card.title} id={card.id} paragraph={card.paragraph} key={card.id} image={card.image} />
                })
            }
        </div>
    )
}

MapCard.propTypes = {}

