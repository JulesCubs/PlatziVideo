import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/gender-neutral-user.png'

//Este es un componente presentacional solo muestra un elemento HTML, no tiene logica de la aplicacion
const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Logo Platzi-video" />
      </Link>
  
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser
            ? <img src={gravatar(user.email)} alt={user.email} />
            : <img src={userIcon} alt="icono-usuario" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser
            ? <li><a href="/">{user.name}</a></li>
            : null
          }
          {hasUser
            ? <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
            : <li><Link to="/login">Iniciar Sesión</Link></li>
          }
          
        </ul>
      </div>
    </header>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);