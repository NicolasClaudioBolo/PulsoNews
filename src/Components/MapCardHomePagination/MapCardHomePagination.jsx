import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
 

import PropTypes from 'prop-types'
 
import './MapCardHomePagintaion.css'
import { CardHomePagination } from '../CardHomePagination/CardHomePagination'


export const MapCardHomePagination = props => {
    const { arrayCardsHome } = props


    
    let page = useSelector(state => state.data.page)
    let byPage = useSelector(state => state.data.productsByPage)


    const loader = useSelector(state => state.data.loading)
    const products = useSelector(state => state.data.products)
    const dispatch = useDispatch();


    useEffect(() => {
        try {
             
        } catch (err) { console.log(err) }
    }, [dispatch])



    return (
        <div className='main-div-card-home-pagination'>
         
                {
                    products.slice(
                        (page - 1) * byPage,
                        (page - 1) * byPage + byPage).map((card) => {
                            return <CardHomePagination title={card.title} id={card.id} paragraph={card.paragraph} image={card.image} key={card.id} />

                        })
                }
           
        </div>
    )
}

MapCardHomePagination.propTypes = {
    arrayCards: PropTypes.array
}





