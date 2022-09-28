import React from 'react'
import PropTypes from 'prop-types'
import './NewsHighlight.css'


export const NewsHighlight = props => {
  return (
    <div className='NewsHighlight'>
       {props.title}
    </div>
  )
}

NewsHighlight.propTypes = {
  title: PropTypes.string
}

 