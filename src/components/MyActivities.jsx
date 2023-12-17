import React from 'react'
import MyActivity from './MyActivity'
import { useContext } from 'react'
import { ActivitiesContext } from '../context/ActivitiesContext'
import { AuthContext } from '../context/AuthContext'
const MyActivities = () => {
    const { activitiesArray } = useContext(ActivitiesContext)
    const { currentUser } = useContext(AuthContext)

    return (
        <div className='myActivities'>
            <span className='myActivitiesTitle'>Мои активности</span>
            <div className="myActivitiesCon">
            {activitiesArray.map((e) => {
                console.log(currentUser.uid)
                return currentUser.uid == e.authorId &&  <MyActivity e={e} key={activitiesArray.indexOf(e)} />
                })}
            </div>
        </div>
    )
}

export default MyActivities