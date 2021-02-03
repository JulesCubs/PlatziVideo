import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss'

const Register = (props) => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })        
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return (
        <section className="regis">
            <section className="regis__container">
                <h2>Registrate</h2>
                <form className="regis__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name" 
                        className="input" 
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="email"
                        className="input" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Registrarse</button>
                </form>
                <Link to="/login">Iniciar Sesión</Link>  
            </section>
        </section>
    );
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);