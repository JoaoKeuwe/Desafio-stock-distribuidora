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
                    <p className='message-confirm'>You should receive a confirmation email soon</p>
                    <a href="/"> <button className='button-success'>Restart</button></a>
                </div>
            </main>
        </div>
    )
}

export default Success