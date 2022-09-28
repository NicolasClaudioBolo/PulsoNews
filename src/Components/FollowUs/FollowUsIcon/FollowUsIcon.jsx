import React from 'react'
import PropTypes from 'prop-types'
import './FollowUsIcon.css'
import { Link } from 'react-router-dom'

export const FollowUsIcon = ({ item }) => {
  
    const {  paragraph,link,Type,class_name } = item
  return (
    <div className={class_name}>
        <div className=''>
            <div className='icon-box'>
           <Type className='icon'/>
            </div>
          
        </div>
        <div className='paragraph-container'>
            <span className='paragraph-icon'>{paragraph}</span>
        </div>
    </div>
  )
}

// FollowUsIcon.propTypes = {
  
//     text: PropTypes.string
// }

