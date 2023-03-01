import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Context from '../../context/context';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import '../PageMoreInfo/Infos.css'

function Infos() {
  const { selectedColor, setSelectedColor } = useContext(Context);
  const [colors, setColors] = useState([]);
  

  useEffect(() => {
    async function fetchColors() {
      const response = await axios.get('http://localhost:3001/api/colors');
      setColors(response.data);
    }
    fetchColors();
  }, []);

  const handleColorSelect = (event) => {
    console.log((event.target.value));
    setSelectedColor(event.target.value);
  };
  return (
    <main>
      <Header />

      <section className='info'>
        <h1>Informações adicionais</h1>
        <div className="dropdown">
          <select value={selectedColor} onChange={handleColorSelect}>
            <option value="">Selecione sua cor</option>
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>

        </div>

        <section className='terms'>
          <input className='checkbox' type="checkbox" id="scales" name="Terms" />
          <label className='label-info' htmlFor="Terms">I Agree to <a href="##">Terms and Conditions</a></label>
        </section>

        <div>
          
          <Link to="/">
            <button className='button-info'>
              Voltar
            </button>
          </Link>

          <Link to="/confirmation">
            <button className='button-info'>
              Próxima
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}

export default Infos
