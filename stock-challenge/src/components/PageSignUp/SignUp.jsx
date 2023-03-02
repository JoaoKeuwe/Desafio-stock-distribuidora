import React, { useContext, useState } from "react";
import './signUp.css'
import Header from '../Header/Header'
import { Link } from "react-router-dom";
import Context from "../../context/context";

function SignUpForm() {

  const { name, setName, email, setEmail, password, setPassword } = useContext(Context);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   // event.preventDefault();
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // }

  return (
    <div>
      <Header />
      <span className="form" >
        <h1 className="title">Login</h1>
        <div className="form-group">

          <label
            className="label-signup"
            htmlFor="name">Nome</label>

          <input
            value={name}
            onChange={handleNameChange}
            autoComplete="none"
            className="input-signup"
            placeholder="Digite seu nome"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="form-group">

          <label
            className="label-signup"
            htmlFor="email">
            Email
          </label>

          <input
            value={email}
            onChange={handleEmailChange}
            autoComplete="none"
            className="input-signup"
            placeholder="Digite seu E-mail"
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="form-group">
          <label
            className="label-signup"
            htmlFor="password">Senha</label>

          <input
            value={password}
            onChange={handlePasswordChange}
            className="input-signup"
            placeholder="Digite sua senha"
            type="password"
            id="password"
            name="password" />
        </div>

        <Link to="/more-info">

          <button type="button"
            className="button">
            Entrar
          </button>

        </Link>
      </span>

    </div>
  );
}

export default SignUpForm;