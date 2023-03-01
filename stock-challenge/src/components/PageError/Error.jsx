import React from 'react'
import Header from '../Header/Header'
import '../PageError/Error.css'

function Error() {
  return (
    <div>
      <Header />
      <main className='container-error'>
        <h1 className='h1'>Error 📛</h1>
        <div className='error'>
          <p className='message-error'>Ops, ocorreu um erro. Volte e tente novamente mais tarde! <br/> 😓</p>
          <a href="/"> <button className='button-error'>Restart</button> </a>
        </div>
      </main>
    </div>
  )
}

export default Error