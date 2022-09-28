import React from 'react'
import PropTypes from 'prop-types'
import { FollowUsTittle } from './FollowUsTittle/FollowUsTittle'
import { FollowUsIcon } from './FollowUsIcon/FollowUsIcon'
import './FollowUs.css'
import { arrayFollowUsHome } from '../../Utils/Card.utils'
import { FollowUsMap } from './FollowUsMap/FollowUsMap'

export const FollowUs = props => {
    return (
        <div className='FollowUs-main'>
            <FollowUsTittle />
            <FollowUsMap arrayFollowUsHome={arrayFollowUsHome} />
        </div>
    )
}

FollowUs.propTypes = {}



