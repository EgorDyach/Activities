import Add from "../img/AddAvatar.png"

const Register = () => {
  return (
    <div className="formCon">
    <div className="container registerContainer">
        <p className="logo">Сириус-активности</p>
        <p className="title">Регистрация</p>
        <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Ваш email" />
            <input type="password" placeholder="Ваш пароль" />
            <input type="file" id="file" className="file" />
            <label htmlFor="file">
                <img src={Add} alt="" />
                Добавить аватар
            </label>
            <button>Зарегестрироваться</button>
        </form>
        <p className="notLoginRegister">Уже есть аккаунт? Войти</p>
    </div>
</div>
  )
}

export default Register