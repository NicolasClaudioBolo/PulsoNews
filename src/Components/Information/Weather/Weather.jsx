// import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import './Weather.css'
// import { GetCurrentWeahter } from '../../../Services/wheater'

// export const Weather = props => {

//     const [wheatherValue, setWheatherValue] = useState({
//         temperature: '',
//         icon: ''
//     })
//     const [defaultCity, setDefaultCity] = useState()

//     const handleValue = async (value) => {
//         const newValue = await GetCurrentWeahter(value)
//         setWheatherValue({
//             temperature: newValue.temp_c,
//             icon: newValue.condition.icon
//         })
//         localStorage.setItem('city', value );
//     }

//     useEffect(() => {
//         let city = localStorage.getItem('city');
//         console.log("🚀 ~ file: Weather.jsx ~ line 23 ~ useEffect ~ city", city)
//         setDefaultCity(city)
//     }, [wheatherValue])
    
// const Select = () => {
//     return (
//         <div className='weather-container'>
//         <label htmlFor="Citie" >Ciudades:</label>

//         <select onChange={(e) => handleValue(e.target.value)} name="Citie" id="Cities">
//             <option value="Caba">Caba</option>
//             <option value="Mar del Plata">Mar del Plata</option>
//             <option value="Cordoba">Cordoba</option>
//             <option value="Ushuaia">Ushuaia</option>
//         </select>
//         <div className='info-weather-container'>
//             <span >C° {wheatherValue.temperature}</span>
//             <img src={wheatherValue.icon} alt="" />
//         </div>
//     </div>

//     )
// }

// const DefaultCity = () => {
//     return (
//         <div className='weather-container'>
//         <label for="Citie" >Ciudades:</label>

//         <select onChange={(e) => handleValue(e.target.value)} name="Citie" id="Cities">
//             <option value="Caba">Caba</option>
//             <option value="Mar del Plata">Mar del Plata</option>
//             <option value="Cordoba">Cordoba</option>
//             <option value="Ushuaia">Ushuaia</option>
//         </select>
//         <div className='info-weather-container'>
//             <span >C° {wheatherValue.temperature}</span>
//             <img src={wheatherValue.icon} alt="" />
//         </div>
//     </div>
//     )
// }

//     return (
//         <Select/>  
//     )
// }

// Weather.propTypes = {}


// TODO: Preservar valor del usuario en localStore