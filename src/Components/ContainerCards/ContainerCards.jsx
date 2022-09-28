import React from 'react'
import PropTypes from 'prop-types'
import { MapCardHomePagination } from '../MapCardHomePagination/MapCardHomePagination'
import { NewsHighlight } from '../NewsHighlight/NewsHighlight'
import './ContainerCards.css'


export const ContainerCards = props => {
    const { title, arrayCard } = props





    return (

     
            <div className='containerCards'>
                <NewsHighlight title={title} />
                <MapCardHomePagination arrayCardsHome={arrayCard} />
            </div>



     
    )



}

ContainerCards.propTypes = {
    title: PropTypes.string,
    arrayCard: PropTypes.array
}

