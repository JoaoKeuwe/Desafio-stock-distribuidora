import React from 'react'
import Header from '../Header/Header'
import '../PageSucces/Success.css'
function Success() {
    return (
        <div>
            <Header />
            <main className='container-success'>
                <h1 className='h1'>Success ✅</h1>
                <div className='confirm'>
                    <p className='message-confirm'>Tudo certo! <br />Você irá receber um E-mail em breve. 🤩</p>
                    <a href="/"> <button className='button-success'>Restart</button></a>
                </div>
            </main>
        </div>
    )
}

export default Success
