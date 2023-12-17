const Login = () => {
  return (
    <div className="formCon">
        <div className="container">
            <p className="logo">Сириус-активности</p>
            <p className="title">Вход</p>
            <form>
                <input type="email" placeholder="Ваш email" />
                <input type="password" placeholder="Ваш пароль" />
                <button>Войти</button>
            </form>
            <p className="notLoginRegister">Ещё не зарегистрировались? Регистрация</p>
        </div>
    </div>
  )
}

export default Login