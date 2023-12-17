import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {setDoc, doc} from 'firebase/firestore'
const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    try {
      let res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, name);
      console.log(storageRef)
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef)
          .then(async (downloadURL) => {
            try {
              await updateProfile(res.user, {
                displayName: name,
                photoURL: downloadURL
              })
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                name,
                email,
                photoURL: downloadURL,
              });
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
            }
          })
      });
    }catch(err){
    console.log(err)
    setErr(true)
  }
}
return (
  <div className="formCon">
    <div className="container registerContainer">
      <p className="logo">Сириус-активности</p>
      <p className="title">Регистрация</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Ваш email" />
        <input type="password" placeholder="Ваш пароль" />
        <input type="file" id="file" className="file" />
        <label htmlFor="file">
          <img src={Add} alt="" />
          Добавить аватар
        </label>
        {err && <span>Что-то пошло не так...</span>}
        <button>Зарегестрироваться</button>
      </form>
      <p className="notLoginRegister">Уже есть аккаунт? <Link to={'/login'}>Войти</Link></p>
    </div>
  </div>
)
}

export default Register
