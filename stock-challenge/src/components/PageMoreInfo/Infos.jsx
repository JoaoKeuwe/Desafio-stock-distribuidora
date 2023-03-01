import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import '../PageMoreInfo/Infos.css'

function Infos() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    async function fetchColors() {
      const response = await axios.get('http://localhost:3001/api/colors');
      setColors(response.data);
    }
    fetchColors();
  }, []);

  const handleColorSelect = (event) => {
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
          <a href="/"> <button className='button-info'>Voltar</button> </a>
          <a href="/confirmation"> <button className='button-info'>Próxima</button> </a>
        </div>

      </section>
    </main>
  )
}

export default Infos
