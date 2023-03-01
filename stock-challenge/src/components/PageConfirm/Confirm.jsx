import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/context';
import Header from '../Header/Header'
import '../PageConfirm/Confirm.css'

function Confirm() {

    const { name, email, selectedColor } = useContext(Context);

    return (
        <div>
            <Header />
            <main className='container-confirm'>
                <h1>Confirmation</h1>
                <div className='container-informations'>
                    <p className='informations'>First Name: {name}</p>
                    <p className='informations'>E-mail: {email}</p>
                    <p className='informations'>Password: *****</p>
                    <p className='informations'>Favorite Color:{selectedColor}</p>
                    <p className='informations'>Terms and conditions:</p>
                </div>

                <div>

                    <Link to="/more-info">
                        <button className='button-confirm'>
                            Voltar
                        </button>
                    </Link>

                    <Link to="##">
                        <button className='button-confirm'>
                            Enviar
                        </button>
                    </Link>
                </div>

            </main>
        </div>
    )
}

export default Confirm