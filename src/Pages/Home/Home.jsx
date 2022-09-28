import React from 'react'
import './Home.css'
import { Banner } from '../../Components/Banner/Banner.jsx'
import { ContainerCards } from '../../Components/ContainerCards/ContainerCards'
import { CardMainHome } from '../../Components/CardMainHome/CardMainHome'
import { CardMainHomeObj } from '../../Utils/Card.utils'
import { FollowUs } from '../../Components/FollowUs/FollowUs'
import { arrayCardsHome, lastNewsArray } from '../../Utils/Card.utils'
import { ContainerCardsMain } from '../../Components/ContaineCardMain/ContainerCardMain'
import { PublicityBanner } from '../../Components/PublicityBanner/PublicityBanner'
// import { Slider }  from '../../Components/Slider/Slider'
import { MapDailyNewCard } from '../../Components/MapDailyNewCard/MapDailyNewCard'


export const Home = () => {
    return (
        <div className='home'>
            <div>
                <Banner />
                <div className='home-container'>
                    <div className='publicidad-banner'>
                        <PublicityBanner />
                    </div>
                    <div className='container-home-2'>
                        <ContainerCardsMain title={'Noticias destacadas'} arrayCard={arrayCardsHome} />
                        </div>
                    {/* <div>
                        <FollowUs className='home-contact-position' />
                    </div> */}
                </div>
            </div>
            <div className='home-container-main'>
                {/* <Slider home={true} arrayImage={arraySmallCards} /> */}
                <div>
                    <MapDailyNewCard />
                </div>
                <div className='home-container-container'>
                    <CardMainHome title={CardMainHomeObj.title} paragraph={CardMainHomeObj.paragraph} id={CardMainHomeObj.id} image={CardMainHomeObj.image} />
                    <CardMainHome title={CardMainHomeObj.title} paragraph={CardMainHomeObj.paragraph} id={CardMainHomeObj.id} image={CardMainHomeObj.image} />
                </div>
            </div>
            <div className='home-container-pagination'>
                <ContainerCards title={'Ultimas noticias'} arrayCard={lastNewsArray} />
            </div>
            <div className='home-container-main'>
                <div className='home-container-container'>
                    <CardMainHome title={CardMainHomeObj.title} paragraph={CardMainHomeObj.paragraph} id={CardMainHomeObj.id} image={CardMainHomeObj.image} />
                    <CardMainHome title={CardMainHomeObj.title} paragraph={CardMainHomeObj.paragraph} id={CardMainHomeObj.id} image={CardMainHomeObj.image} />
                </div>
                {/* <Slider home={true} arrayImage={arraySmallCards} /> */}
                <div>
                    {/* Especificar tamaño de la imagen en esta sección */}
                    <MapDailyNewCard />
                </div>
            </div>
            <div>
                <ContainerCards title={'Otras noticias'} arrayCard={arrayCardsHome} />
            </div>
            
        </div>
    )
}


//TODO Crear mail de Cooperar