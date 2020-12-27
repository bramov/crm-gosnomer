import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import logo from '../images/gosnomer.png';
export const AuthPage = () => {
  const { loading, request } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      console.log(data);
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="center-align"><img src={logo} width="150"/></div>
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
            <div className="card-action row s-6">
              <button className="col s-6 btn yellow darken-4"
                      disabled={loading}
              >Войти</button>
              <button className="btn grey lighten-1 black-text col offset-s6"
                      onClick={registerHandler}
                      disabled={loading}
              >Регистрация</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
