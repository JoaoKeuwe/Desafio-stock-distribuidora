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
                <h1 className='title-confirm'>Confirmation</h1>

                <div className='container-informations'>
                    <p className='informations-confirm'>First Name: {name}</p>
                    <p className='informations-confirm'>E-mail: {email}</p>
                    <p className='informations-confirm'>Password: *****</p>
                    <p className='informations-confirm'>Favorite Color: {selectedColor}</p>
                    <p className='informations-confirm terms'> Terms and conditions: <span className='span'> {checked ? <p className='agreed'> Aceito </p> : <p className='disagreed'> Não Aceito </p>}</span></p>
                </div>
                <div>

                    <Link to="/more-info">
                        <button className='button-confirm back'>
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