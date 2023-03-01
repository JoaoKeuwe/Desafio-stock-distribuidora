import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/context';
import Header from '../Header/Header'
import '../PageConfirm/Confirm.css'

function Confirm() {

    const { name, email, selectedColor, checked } = useContext(Context);

    return (
        <div>
            <Header />
            <main className='container-confirm'>
                <h1>Confirmation</h1>

                <div className='container-informations'>
                    <p className='informations-confirm'>First Name: {name}</p>
                    <p className='informations-confirm'>E-mail: {email}</p>
                    <p className='informations-confirm'>Password: *****</p>
                    <p className='informations-confirm'>Favorite Color: {selectedColor}</p>
                    <p className='informations-confirm terms'>Terms and conditions: {checked ? <p>Aceito </p> : <p>Não Aceito </p>}</p>
                </div>
                <div>

                    <Link to="/more-info">
                        <button className='button-confirm'>
                            Voltar
                        </button>
                    </Link>

                    {checked ? <Link to="/success"> <button className='button-confirm'>Enviar</button> </Link> : <Link to="/error"> <button className='button-confirm'>Enviar</button> </Link>}

                </div>

            </main>
        </div>
    )
}

export default Confirm