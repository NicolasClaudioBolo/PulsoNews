import React, {useEffect } from 'react'
import PropTypes from 'prop-types'
// import { Weather } from './Weather/Weather'
import './Information.css'
import { currentInformation } from '../../Utils/Information.utils'

export const Information = () => {
  const { dolar,dolarParalelo,riesgoPais } = currentInformation
  
  return (
    <section className='information-section'>
      <div className='information-dolar-container'>
        <span className='information-span-oficial'>Dolar oficial: ${dolar}</span>
        <span className='information-span-parallel'>Dolar paralelo: ${dolarParalelo}</span>
        <span className='information-risk-country-container'>Riesgo país: {riesgoPais}</span>
        {/* <Weather/> */}
      </div>

    </section>
  )
}

Information.propTypes = {}

