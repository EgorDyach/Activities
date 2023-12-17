import { createContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDoc, doc, getDocs, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import PropTypes from 'prop-types';

export const ActivitiesContext = createContext();

export const ActivitiesContextProvider = ({ children }) => {
    const [activitiesArray, setActivitiesArray] = useState([])

    useEffect(() => {
        const f = async () => {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            let t = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                t.push(doc.data())
            });
            setActivitiesArray(t)
        }
        f()
    }, [])

    return (
        <ActivitiesContext.Provider value={{ activitiesArray }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

ActivitiesContextProvider.propTypes = {
    children: PropTypes.object.isRequired
}