import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { lastNewsArray } from '../../Utils/Card.utils'
import './NoticeTemplate.css'
import { Aside } from '../../Components/Aside/Aside'
import { animateScroll as scroll, Link } from 'react-scroll'


export const NoticeTemplate = props => {
    let { id } = useParams()
    id = parseInt(id)

    useEffect(() => {
        scroll.scrollToTop() 
    
    }, [NoticeTemplate])
    

    const notice = lastNewsArray.find(notice => notice.id === id)

    const { title, paragraph, subTitle, description, date, body, image, source } = notice

    return (
        <div className='notice-container'>


            <div className='notice-box'>

                <div className='notice-title-container'>
                    <p className='title-notice'>{title}</p>
                    <h1 className='h1-notice'>{paragraph}</h1>
                    <h2 className='subtitle-notice'>{subTitle}</h2>
                </div>
                <div>
                   
                </div>
                <div>
                    <img className='img-notice' src={image} alt="joven" />
                    <p className='description-notice'>{description}</p>
                </div>
                <div className='notice-container-2'>
                    <div>

                        <div>
                            {source ? (`Noticia proporcionada por ${source}.`)
                            :
                            'Noticia proporcionada por Pulso.'
                            }
                        </div>
                        <div className='date-notice-container'>
                            <span className='date-notice'>{date}</span>
                        </div>
                    </div>

                     <div className='notice-aside-container'>
                        <Aside />
                    </div> 

                </div>

                <div className='paragraph-notice-container'>

                    <div>
                        <p className='paragraph-notice'> {body[1]}</p>
                    </div>

                    <div>
                        <p className='paragraph-notice'> {body[2]}</p>
                    </div>

                    <div>
                        <p className='paragraph-notice'> {body[3]}</p>
                    </div>

                    <div>
                        <p className='paragraph-notice'> {body[4]}</p>
                    </div>


                </div>

                <div>
                    <img src={image} alt="joven" />

                </div>

                <span className='pulso-credits'>Noticia proporcionada por Pulso, el ritmo de la politica.</span>
            </div>
          
        </div>
    )
}

NoticeTemplate.propTypes = {}




//TODO: https://www.clarin.com/policiales/caso-lola-chomnalez-triple-crimen-clave-increible-secuencia-dar-sospechoso-matar-joven-argentina_0_dU9MMbRTdH.html


