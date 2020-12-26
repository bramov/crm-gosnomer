import React from 'react';

export const AuthPage = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="center-align"><img src="../../public/gosnomer.png"/></div>
        <div className="card darken-1">
          <div className="card-content gray-text">
            <span className="card-title center-align">Авторизация</span>
            <div>

             <div className="input-field row">
               <i className="material-icons prefix">person</i>
               <input placeholder="email"
                      id="email"
                      name="email"
                      type="text"
                      className="validate"
                      onChange={changeHandler}
               />
               <label htmlFor="email">Введите email:</label>
             </div>
              <div className="input-field row">
                <i className="material-icons prefix">vpn_key</i>
                <input placeholder="пароль"
                       id="password"
                       name="password"
                       type="password"
                       className="validate"
                       onChange={changeHandler}
                />
                <label htmlFor="email">Введите пароль:</label>
              </div>

            </div>
          </div>
          <div className="card-action row s-6">
            <button className="col s-6 btn yellow darken-4">Войти</button>
            <button className="btn grey lighten-1 black-text col offset-s6">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}
