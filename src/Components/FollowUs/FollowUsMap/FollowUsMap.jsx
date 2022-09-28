import React from 'react'
import PropTypes from 'prop-types'
import './FollowUsMap.css'; 
import { FollowUsIcon } from '../FollowUsIcon/FollowUsIcon'


export const FollowUsMap = (props) => {
    
    return (
        <div className='social-container'>

            {
                props.arrayFollowUsHome.map(item => {
                    return <FollowUsIcon key={item.id} item={item} />
                })
            }

        </div>
    )
}

FollowUsMap.propTypes = {}
