import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-logo.png';
import twitterIcon from '../assets/static/twitter-circled.png';

const Login = props => {
    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
        console.log(form);
    }

    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="password"
                        className="input"  
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember">
                        <label>
                            <p><input type="checkbox" name="" id="cbox1" value="checkbox" /> Recuerdame</p>
                            <a href="/">Olvide mi contraseña</a>
                        </label>
                    </div>
                </form>
                <section className="login__container--socialmedia">
                    <div><img tabindex="0" src={googleIcon} alt="Google logo"/>Inicia sesión con Google</div>
                    <div><img tabindex="0" src={twitterIcon} alt="Twitter logo"/>Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta  
                    <Link to="/register">Registrate</Link>
                </p>
            </section>
        </section>
    )
} 

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps) (Login);