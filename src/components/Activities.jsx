import React from 'react'
import Activity from './Activity'

const Activities = () => {
    return (
        <div className='activities'>
            <span className='activitesTitle'>Все активности</span>
            <div className="activitiesCon">
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
        </div>
    )
}

export default Activities