import React from 'react'
import MyActivityUser from './MyActivityUser'
import { PropTypes } from 'prop-types'
import { db } from '../../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { translit } from '../translit';
const MyActivity = ({ e }) => {
  console.log(e)
  const handleDelete = async () => {
    await deleteDoc(doc(db, "tasks", (translit(e.title) + e.authorId)));
    alert('Удаление прошло успешно! Страница перезагрузится')
    location.reload()
  }
  return (
    <div className='myActivity'>

      <div className="myActivityTop">
        <div className="myActivityInfo">
          <img src={e.photoURL} alt="" />
          <div className="myActivityTextInfo">
            <span className='name'>{e.authorName}</span>
            <span className='task'>{e.title}</span>
          </div>
        </div>
        <div className="myActivityPlaceTime">
          <span>{e.time}</span>
          <span>{e.place}</span>
        </div>
      </div>
      <p className='myActivityText'>
        {e.descr}
      </p>
      <div className="myActivityButtons">
        <button onClick={handleDelete} className='myActivityDelete'>Удалить</button>
      </div>
      <div className="myActivityUsers">
        {e['usersIn'].map((q) => {
          return <MyActivityUser p={q} />
        })}
      </div>
    </div>
  )
}

MyActivity.propTypes = {
  e: PropTypes.object.isRequired
}

export default MyActivity