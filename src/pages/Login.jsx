import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState } from "react";

const Login = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(123)
      const email = e.target[0].value
      const password = e.target[1].value
      try {
          await signInWithEmailAndPassword(auth, email, password)
          // console.log('logined')
          navigate('/')
      } catch (err) {
          setErr(true)
          console.log(err)
      }


  }

  return (
    <div className="formCon">
        <div className="container">
            <p className="logo">Сириус-активности</p>
            <p className="title">Вход</p>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Ваш email" />
                <input type="password" placeholder="Ваш пароль" />
                <button>Войти</button>
            </form>
            <p className="notLoginRegister">Ещё не зарегистрировались? <Link to={'/register'}>Регистрация</Link></p>
        </div>
    </div>
  )
}

export default Login