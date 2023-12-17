import { PropTypes } from 'prop-types'
import React from 'react'

const Activity = ({element}) => {
    return (
        <div className='activity' id={element.uid}>
            <div className="activityTop">
                <div className="activityInfo">
                    <img src={element.photoURL} alt="" />
                    <div className="activityTextInfo">
                        <span className='name'>{element.name}</span>
                        <span className='task'>{element.title}</span>
                    </div>
                </div>
                <div className="activityPlaceTime">
                    <span>{element.time}</span>
                    <span>{element.place}</span>
                </div>
            </div>
            <p className='activityText'>{element.descr}</p>
            <div className="activityButtons">
                <button className='activityMore'>Подробнее</button>
                <button className='activityAccept'>Записаться</button>
            </div>
        </div>
    )
}
Activity.propTypes = {
    element: PropTypes.object.isRequired,
    // photoURL: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
    // uid: PropTypes.string.isRequired,
    // time: PropTypes.string.isRequired,
    // place: PropTypes.string.isRequired,
    // descr: PropTypes.string.isRequired,
}

export default Activity