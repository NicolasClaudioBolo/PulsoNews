import React from 'react';
import { Link } from 'react-router-dom'
import './Icon.css';

interface Props {
    image: string,
    route: string
} 

export const Icon = ( { image,route }: Props ) => {


    return (
        <>
            <a href={route} type="button" className="link-svg">
               <img src={image} alt="" className="link-img"/>
            </a>
        </>
    )
}

export default Icon;