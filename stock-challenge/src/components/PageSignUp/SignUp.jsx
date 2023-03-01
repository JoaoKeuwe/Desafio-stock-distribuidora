import React from "react";
import './signUp.css'
import Header from '../Header/Header'

function SignUpForm() {
  return (
    <div>
      <Header />

      <form className="form">
      
        <h1 className="title">Sign Up</h1>
        <div className="form-group">
          <label className="label-signup" htmlFor="name">Nome</label>
          <input autoComplete="none" className="input-signup" placeholder="Digite seu nome" type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label className="label-signup" htmlFor="email">Email</label>
          <input  autoComplete="none" className="input-signup" placeholder="Digite seu E-mail" type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label className="label-signup" htmlFor="password">Senha</label>
          <input className="input-signup" placeholder="Digite sua senha" type="password" id="password" name="password" />
        </div>

        <a href="/more-info"> <button type="button" className="button">Next</button> </a>
     
      </form>
      
    </div>
  );
}

export default SignUpForm;