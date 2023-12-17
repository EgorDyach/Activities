import React from 'react'
import MyActivity from './MyActivity'

const MyActivities = () => {
    return (
        <div className='myActivities'>
            <span className='myActivitiesTitle'>Мои активности</span>
            <div className="myActivitiesCon">
                <MyActivity />
                <MyActivity />
                <MyActivity />
            </div>
        </div>
    )
}

export default MyActivities