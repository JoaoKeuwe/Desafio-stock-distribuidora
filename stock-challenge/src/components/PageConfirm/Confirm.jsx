import React from 'react'
import Header from '../Header/Header'
import '../PageConfirm/Confirm.css'

function Confirm() {
    return (
        <div>
            <Header />
            <main className='container-confirm'>
                <h1>Confirmation</h1>
                <div className='container-informations'>
                <p className='informations'>First Name:</p>
                <p className='informations'>E-mail:</p>
                <p className='informations'>Password: *****</p>
                <p className='informations'>Favorite Color:</p>
                <p className='informations'>Terms and conditions:</p>
                </div>

                <div>
                <a href="/more-info"> <button className='button-confirm'>Voltar</button> </a>

                <a href=""> <button className='button-confirm'>Enviar</button> </a>
                </div>

            </main>
        </div>
    )
}

export default Confirm