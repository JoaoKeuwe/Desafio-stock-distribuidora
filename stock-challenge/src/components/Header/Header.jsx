import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

function Header() {
    return (
        <div className='container-header'>
            <header className='header'>
                <img className='image-logo' src={logo} alt="" />
            </header>
        </div>
    )
}

export default Header