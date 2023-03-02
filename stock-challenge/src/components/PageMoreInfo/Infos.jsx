import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Context from '../../context/context';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import '../PageMoreInfo/Infos.css'
import { SemipolarLoading } from 'react-loadingg';

function Infos() {
  const { selectedColor, setSelectedColor, checked, setChecked, name, email, password } = useContext(Context);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchColors() {
      const response = await axios.get('http://localhost:3001/api/colors');
      setColors(response.data);
    }
    fetchColors();
  }, []);

  const handleChecked = (setChecked) => {
    setChecked((prevState) => !prevState)
  }

  const handleColorSelect = (event) => {
    console.log((event.target.value));
    setSelectedColor(event.target.value);
  };
  return (
    <main>
      <Header />

      <section className='info'>
        <h1 className='informations'>Informações adicionais</h1>

        <div className="dropdown" style={{ width: '-webkit-fill-available' }}>

          {colors.length === 0 ? <span className='loading'> <SemipolarLoading style={{ position: 'relative' }} /> </span> :

            <select value={selectedColor}
              onChange={handleColorSelect}
              style={{
                backgroundColor: selectedColor,
                color: `${selectedColor !== "" ?
                  selectedColor === 'white' ?
                    'black' : 'white' : 'black'}`
              }} >

              <option value="">Selecione sua cor favorita</option>

              {colors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}


              {selectedColor && (
                <div className="selected-color" style={{ backgroundColor: selectedColor }}></div>
              )}

            </select>
          }

        </div>

        <section className='terms'>

          <input className='checkbox'
            type="checkbox"
            id="scales"
            name="Terms"
            checked={checked}
            onClick={() => handleChecked(setChecked)} />

          <label className='label-info'
            htmlFor="Terms">
            I Agree to <a href="##">Terms and Conditions <span className='star'>*</span>
            </a>
          </label>
        </section>

        <div className='buttons'>

          <Link to="/">
            <button className='button-info back'>
              Voltar
            </button>
          </Link>

          <Link to="/confirmation">
            <button
             
              className='button-info'>
              Próxima
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}

export default Infos
