import React from 'react'
import PropTypes from 'prop-types'
import { DailyNewCard } from '../DailyNewCard/DailyNewCard'
import { arrayCards } from '../../Utils/Card.utils'
import img from '../../Assets/dailynew.jpg'


export const MapDailyNewCard = props => {
    return (
        <div className=''>
            {
                arrayCards.map(card => {
                    return <DailyNewCard title={card.title} id={card.id} paragraph={card.paragraph} key={card.id} image={img} />
                })
            }
        </div>
    )
}

MapDailyNewCard.propTypes = {}