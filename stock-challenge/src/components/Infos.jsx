import React from 'react'
import '../components/Infos.css'

function Infos() {
  return (
    <div className='info'>
      <h1>Additional Info</h1>
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
      <div>
        <label htmlFor="Terms">
          <input type="checkbox" id="scales" name="Terms" />
          I Agree to <a href="##">Terms and Conditions</a></label>
      </div>
      <button>Back</button>
      <button>Next</button>
    </div>
  )
}

export default Infos