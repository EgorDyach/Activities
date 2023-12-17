import React, { useContext } from 'react'
import Img from '../img/img.png'
import { PropTypes } from "prop-types"
import { AuthContext } from '../context/AuthContext'
import { setDoc, doc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { translit } from '../translit'

const Modal = ({ closeFunc }) => {
    const { currentUser } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const time = e.target[1].value
        const place = e.target[2].value
        const descr = e.target[3].value
        const tasksRef = collection(db, "tasks");

        await setDoc(doc(tasksRef,( translit(title) + currentUser.uid)), {
            title,
            time,
            place,
            descr,
            photoURL: currentUser.photoURL,
            authorName: currentUser.displayName,
            authorId: currentUser.uid,
            usersIn: []
        });
        closeFunc()
        alert('Вы создали активность! Страница будет перезагружена')
        location.reload()
    }
    return (
        <div className='modal'>
            <div className="modalCon">
                <span className="title">Добавить активность</span>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Название' />
                    <input type="text" placeholder='Время начала' />
                    <input type="text" placeholder='Место проведения' />
                    <input type="text" placeholder='Описание' />
                    {/* <input type="file" id='file' className='file' />
                    <label htmlFor="file">
                        <img src={Img} alt="" />
                        Фото активности
                    </label> */}
                    <button className='addBtn'>Добавить</button>
                </form>
                <button onClick={() => closeFunc()} className='close'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <line x1="0.496422" y1="18.2966" x2="17.467" y2="1.32603" stroke="black" />
                    <line x1="1.20353" y1="1.32613" x2="18.1741" y2="18.2967" stroke="black" />
                </svg></button>
            </div>
        </div>
    )
}


export default Modal