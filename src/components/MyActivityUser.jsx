import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
const MyActivityUser = ({ p }) => {
  const [photoURL, setPhotoURL] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    const f = async () => {
      const q = query(collection(db, "users"), where("uid", "==", p));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setEmail(doc.data().email)
        setName(doc.data().name)
        setPhotoURL(doc.data().photoURL)
        console.log(doc.data())
      });
    }
    f()
  }, [])
  return (
    <div className='myActivityUser'>
      <div className="myActivityUserInfo">
        <img src={photoURL} alt="" />
        <span>{name}</span>
      </div>
      <span>{email}</span>
    </div>
  )
}

export default MyActivityUser