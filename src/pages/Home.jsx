
import Activities from "../components/Activities"
import Modal from "../components/Modal"
import MyActivities from "../components/MyActivities"
import { signOut } from "firebase/auth"
import { auth, db } from "../../firebase"
import { useContext, useEffect, useState } from "react"
import { collection, query, where, getDoc, doc, getDocs, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext"
import { ActivitiesContext } from "../context/ActivitiesContext"
const Home = () => {
    const { currentUser } = useContext(AuthContext)
    const { activitiesArray } = useContext(ActivitiesContext)
    const [isModalActive, setModalActive] = useState(false)
    return (
        <div className="formCon">
            <div className="container homeContainer">
                <span className="title">Сириус-активности</span>
                <button onClick={setModalActive} className="addActivity">Создать активность</button>
                <MyActivities />
                <Activities />
                {isModalActive && <Modal closeFunc={() => setModalActive(false)} />}
                <div className="navbar">
                    <img src={currentUser.photoURL} alt="" />
                    <span>{currentUser.displayName}</span>
                    <button onClick={() => signOut(auth)}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Home