import { PropTypes } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { translit } from '../translit'
const Activity = ({element}) => {
    const { currentUser } = useContext(AuthContext)
    const [isMyActivity, setisMyActivity] = useState(false)
    const handleSign = async () => {
        if (element.authorId != currentUser.uid) {
            console.log(123)
            const task = doc(db, "tasks", (translit(element.title) + element.authorId));
            console.log([...element['usersIn']])
            let k = [...element["usersIn"], currentUser.uid]
            await updateDoc(task, {
                'usersIn': k,
            });
            alert('Вы записаны! Страница будет перезагружена')
            location.reload()
        }
    }
    useEffect(() => {
        const f = async () => {
            console.log(element.authorId, currentUser.uid)
            console.log(element['usersIn'], currentUser.uid)
             await setisMyActivity(!(element.authorId == currentUser.uid || element["usersIn"].includes(currentUser.uid)))
             
            }
            f()
    }, [currentUser.uid, element])
    // useEffect(() => {
    // }, [element["usersIn"]])
    return (
        <div className='activity' key={element.uid}>
            <div className="activityTop">
                <div className="activityInfo">
                    <img src={element.photoURL} alt="" />
                    <div className="activityTextInfo">
                        <span className='name'>{element.authorName}</span>
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
                {isMyActivity && <button onClick={handleSign} className='activityAccept'>Записаться</button>}
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