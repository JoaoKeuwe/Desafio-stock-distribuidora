import axios from 'axios';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../../context/context';
import Header from '../Header/Header'
import '../PageConfirm/Confirm.css'

function Confirm() {

    const { name, email, selectedColor, checked, password } = useContext(Context);

    async function fetchColors() {
        const response = await axios.post('http://localhost:3001/api/submit', {
          name: name,
          email: email,
          password: password,
          color: selectedColor,
          terms: checked
        });
        if (response.data === "OK"){
    
          console.log(response, 'chegou aqui');
        }
      }

    return (
        <div>
            <Header />
            <main className='container-confirm'>
                <h1 className='title-confirm'>Confirmação</h1>

                <div className='container-informations'>
                    <p className='informations-confirm'>Nome: {name}</p>
                    <p className='informations-confirm'>E-mail: {email}</p>
                    <p className='informations-confirm'>Senha: *****</p>
                    <p className='informations-confirm'>Cor Favorita: {selectedColor}</p>
                    <p className='informations-confirm terms'> Termos e condições: <span className='span'> {checked ? <p className='agreed'> Aceito </p> : <p className='disagreed'> Não Aceito </p>}</span></p>
                </div>
                <div>

                    <Link to="/more-info">
                        <button className='button-confirm back'>
                            Voltar
                        </button>
                    </Link>

                    {checked && name.length !== 0
                        ? <Link to="/success">
                            <button className='button-confirm' onClick={fetchColors}>Enviar</button>
                        </Link> : <Link to="/error">
                            <button className='button-confirm' onClick={fetchColors}>Enviar</button>
                        </Link>}

                </div>

            </main>
        </div>
    )
}

export default Confirm