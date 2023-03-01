import React from 'react'
import Header from '../Header/Header'
import '../PageMoreInfo/Infos.css'

function Infos() {
  return (
    <main>
      <Header />
      <section className='info'>
        <h1>Informações adicionais</h1>

        <div class="dropdown-container">
          <input type="checkbox" id="dropdown-toggle" />
          <label className='label-toggle' for="dropdown-toggle">Select your favorite color</label>
          <ul class='dropdown-content'>
            <li className='options-language'><a href="##"><img className='flag' alt="" /> PT-BR</a></li>
            <li className='options-language'><a href="##"><img className='flag' alt="" />PT</a></li>
            <li className='options-language'><a href="##"><img className='flag' alt="" />ES</a></li>
            <li className='options-language'><a href="##"><img className='flag' alt="" />USA</a></li>
          </ul>
        </div>

        <section className='terms'>
          <input className='checkbox' type="checkbox" id="scales" name="Terms" />
          <label className='label-info' htmlFor="Terms">I Agree to <a href="##">Terms and Conditions</a></label>
        </section>

        <div>
          <a href="/"> <button className='button-info'>Voltar</button> </a>
          <a href="/confirmation"> <button className='button-info'>Próxima</button> </a>
        </div>

      </section>
    </main>
  )
}

export default Infos
{/* <Header />
<div className='container-info'>

<h1>Additional Info</h1>

<section className='info'>
  <div class="dropdown-container">
    <input type="checkbox" id="dropdown-toggle" />
    <label for="dropdown-toggle">Select your favorite color</label>
    <ul class='dropdown-content'>
      <li className='options-language'><a href="##"><img className='flag' alt="" /> PT-BR</a></li>
      <li className='options-language'><a href="##"><img className='flag' alt="" />PT</a></li>
      <li className='options-language'><a href="##"><img className='flag' alt="" />ES</a></li>
      <li className='options-language'><a href="##"><img className='flag' alt="" />USA</a></li>
    </ul>
  </div>

</section>

<div>
  <label htmlFor="Terms">
    <input type="checkbox" id="scales" name="Terms" />
    I Agree to <a href="##">Terms and Conditions</a></label>
</div>

<a href="/"> <button>Back</button> </a>

<a href="/confirmation"> <button>Next</button> </a>

</div> */}