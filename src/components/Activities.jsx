import React from 'react'
import Activity from './Activity'
import { useContext } from 'react'
import { ActivitiesContext } from '../context/ActivitiesContext'
const Activities = () => {
    const { activitiesArray } = useContext(ActivitiesContext)

    return (
        <div className='activities'>
            <span className='activitesTitle'>Все активности</span>
            <div className="activitiesCon">
                {activitiesArray.map((e) => {
                    return <Activity element={e} key={activitiesArray.indexOf(e)} />
                })}
                {/* <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity /> */}
            </div>
        </div>
    )
}

export default Activities