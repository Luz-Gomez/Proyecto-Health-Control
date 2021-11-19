import React from 'react';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import logo from '../../logoHealthControl.png';
import servicios from '../../servicios.jpg';
import './home.css';

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <br></br>
                <img src={logo} className="home-logo" alt="logo" />

                <p>
                    La aplicación que te permitirá llevar un registro permanente de tus mediciones de <strong>presión arterial</strong>, para obtener un
                    documento detallado de tus niveles de tensión en diferentes momentos. De esta manera podrás analizar el comportamiento de tu presión
                    arterial y estar alerta sobre posibles factores de riesgo.
                </p><br></br>
                <div className="d-grip gap-2">
                <Button href="./login" variant="warning" size="lg">Crea tu usuario</Button>
                </div><br></br>
                
                <p>
                    En Health control nos preoucpamos por tu salud y queremos ayudarte a llevar un control de tus registros de toma de presión arterial.
                    también puedes compartir esta información con tu médico de confianza para que este al tanto de tu salud y actualice tu tratamiento.
                </p>
                <h2><strong>Nuestros servicios:</strong></h2>
                <img src={servicios} className="servicios" alt="servicios" /><br></br>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                    <p>Registra tus tomas de presión</p>
                    <p>Obtén tu documento en pdf</p>
                    <p>Recibe tus registros en tu email</p>
                        </Col>
                        <Col xs={6} md={4}>
                    <p>Calcula tu Índice de masa corporal</p>
                    <p>Actualiza tus datos</p>
                    <p>Accede a consejos de salud</p>
                        </Col>
                        <Col xs={6} md={4}>
                    <p>Registra tu médico de confianza para que acceda a tus datos</p>
                    <p>Recibe notificaciones en tu email</p>
                        </Col>
                    </Row>
                    <br></br>
                </Container>

            </header>
        </div>
    );
}

export default Home
