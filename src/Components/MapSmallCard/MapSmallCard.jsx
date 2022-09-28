import React from 'react'
import PropTypes from 'prop-types'
import { arraySmallCards } from '../../Utils/Card.utils'
import { SmallCard } from '../SmallCard/SmallCard'

const MapSmallCard = props => {
    return (
        <div className='map-small-card-container'>
            {
                arraySmallCards.map(card => {
                    return <SmallCard paragraph={card.paragraph} key={card.id} title={card.title} image={card.image} />
                })
            }
        </div>
    )
}

MapSmallCard.propTypes = {}

export default MapSmallCard