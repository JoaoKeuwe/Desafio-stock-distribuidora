import React, { useState } from "react";
import './signUp.css'
import Header from '../Header/Header'
import { Link } from "react-router-dom";

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div>
      <Header />
      <form className="form" >
        <h1 className="title">Sign Up</h1>
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
            onClick={handleSubmit}
            className="button">
            Next
          </button>
        
        </Link>
      </form>

    </div>
  );
}

export default SignUpForm;