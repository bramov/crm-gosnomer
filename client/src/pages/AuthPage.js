import React from 'react';

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1 className="center-align">Gosnomer63</h1>
        <div className="card darken-1">
          <div className="card-content gray-text">
            <span className="card-title">Авторизация</span>
            <div>

             <div className="input-field row">
               <i className="material-icons prefix">person</i>
               <input placeholder="email"
                      id="email"
                      type="text"
                      className="validate"
               />
               <label htmlFor="email">Введите email:</label>
             </div>
              <div className="input-field row">
                <i className="material-icons prefix">vpn_key</i>
                <input placeholder="пароль"
                       id="password"
                       type="password"
                       className="validate"
                />
                <label htmlFor="email">Введите пароль:</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4">Войти</button>
            <button className="btn grey lighten-1 black-text">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}
