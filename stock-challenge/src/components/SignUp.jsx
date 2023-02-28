import React from "react";
import './signUp.css'

function SignUpForm() {
  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input placeholder="Digite seu nome" type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input placeholder="Digite seu E-mail"  type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input placeholder="Digite sua senha"  type="password" id="password" name="password" />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default SignUpForm;