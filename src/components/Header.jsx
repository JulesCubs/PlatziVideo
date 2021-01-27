import React from 'react';
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/gender-neutral-user.png'

//Este es un componente presentacional solo muestra un elemento HTML, no tiene logica de la aplicacion
const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Logo Platzi-video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="icono-usuario" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;