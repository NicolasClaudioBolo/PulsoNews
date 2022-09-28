import React from 'react'
import PropTypes from 'prop-types'
import  {Slider}  from '../Slider/Slider'
import '../Slider/Slider.css'

import './Banner.css'
import { MapCard } from '../MapCard/MapCard'
import { LastsNewsButton } from '../LastsNewsButton/LastsNewsButton'
import { Publicity } from '../Publicity/Publicity'
import { PublicityBanner } from '../PublicityBanner/PublicityBanner'
import { arrayCardsHome } from '../../Utils/Card.utils'

export const Banner = (props) => {
    return (
        <div>
            {/* <div className='banner-container'>
                <div className='first-box-banner'>
                    <Slider home={false} arrayImage={arrayCardsHome} />
                    
                </div>

                <div className='second-box-banner'>
                    <MapCard />
                </div>
            </div>
            <div className='third-box-banner'>
                <LastsNewsButton />
            </div>
            <Slider2 /> */}
            
            <MapCard />
        </div>

    )
}

Banner.propTypes = {}


