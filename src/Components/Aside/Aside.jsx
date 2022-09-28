import React from 'react'
import PropTypes from 'prop-types'
import './Aside.css'
import { mostSeen } from '../../Utils/Aside.utils'
import { Link } from 'react-router-dom'

import { Article } from './Article/Article'

export const Aside = props => {
    return (
        <div className='aside-container'>
            <span className='aside-title'>
                Las más leídas de Pulso
            </span>
            <ul>


                {
                    mostSeen.map(article => {
                        const route = `/${article.id} `
                        return  <Link to={route} key={article.id} className='link-article'><Article article={article} key={article.id}></Article></Link>
                    })
                }
              
            </ul>
        
        </div>
    )
}

Aside.propTypes = {}

