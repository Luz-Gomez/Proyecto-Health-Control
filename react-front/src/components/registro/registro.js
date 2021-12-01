import React  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import usuario from '../../usuario.jpg';
import medico from '../../medico.jpg';
import './registro.css';

function Registro () {
    return (
        <div className="registro">
            <div className="registro-header">
            <h1>Bienvenid@ a Healt Control</h1>
            <h2>Regístrate para acceder a nuestros servicios</h2>
            <Container>
                <Row>
                    <Col>
                    <a href='/perfilUsuario'>
                        <img src={usuario} className="usuario" alt="usuario" fluid rounded /></a>
                        <h3>Regístrate como usuario</h3></Col>
                    <Col>
                    <a href='/medicos'>
                    <img src={medico} className="medico" alt="medico" fluid rounded /></a>
                    <h3>Regístrate como médico</h3></Col>
                </Row>
                <p>Click la imágen</p>
            </Container><br></br>
            
            <p>*Recuerda que si te vas a regsitrar como médico, debes cumplir con ciertos requisitos que nos confirmen que realmente eres un médico.</p>
            </div>
        </div>
    )
}

export default Registro