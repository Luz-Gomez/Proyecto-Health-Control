import React from 'react';
import {  Container, Form, Button, } from 'react-bootstrap';
import login from '../../login.jpg';
import './login.css';

function Login() {
    return (
        <div className="login">
            <header className="login-header">
                
            <img src={login} className="inicio-sesion" alt="sesion" />
            <p>Si eres parte de la comunidad de Health Control, ingresa con tus credenciales</p>
                
                <Container className="accordion-collapse">
                    <Form>
                    <Form.Group>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group><br></br>
                            <Button variant="warning" size="lg">Ingresar</Button>
                    </Form>
                </Container><br></br>
                <p>¿No tienes cuenta? Crea tu usuario</p>

            </header>
        </div>
    );
}

export default Login