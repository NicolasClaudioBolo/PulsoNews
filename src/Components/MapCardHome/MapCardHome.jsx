import React from 'react'
import PropTypes from 'prop-types'
import { CardHome } from '../CardHome/CardHome'
import './MapCardHome.css'


export const MapCardHome = props => {
    const { arrayCardsHome } = props
    return (
        <div className='main-div-card-home'>
            {
                arrayCardsHome.map(card => {
                    return <CardHome title={card.title} id={card.id} paragraph={card.paragraph} image={card.image} key={card.id} />
                })
            }
        </div>
    )
}

MapCardHome.propTypes = {
    arrayCards: PropTypes.array
}


