import React from 'react';
import { Link } from 'react-router-dom'
import './item.css'


export const Item = ({ item }) => {
    return (
        <>
            <Link className='link-navBar' to={'3#'}>{item}</Link>
        </>
    );
};
