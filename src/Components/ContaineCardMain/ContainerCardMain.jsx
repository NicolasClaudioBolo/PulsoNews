import React from 'react'
import PropTypes from 'prop-types'
import { MapCardHome  } from '../MapCardHome/MapCardHome'
import { NewsHighlight } from '../NewsHighlight/NewsHighlight'
import './ContainerCardMain.css'


export const ContainerCardsMain = props => {
    const { title,arrayCard } = props
    return (
        <div className='container-cards-main'>
            <NewsHighlight title={title} />
            <MapCardHome  arrayCardsHome={arrayCard} />
        </div>
    )
}

ContainerCardsMain.propTypes = {
    title: PropTypes.string,
    arrayCard: PropTypes.array
}

