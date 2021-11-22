import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';
import logo from '../../logoHealthControl.png';
import mision from '../../logoMisionTIC.jpg';
import utp from '../../logoUTP.png'

function About() {
    return (
        <div className="about">
            <header className="about-header">
                
                    <h1>¿Qué es Health Control?</h1><br></br>
                    <div className="info">
                    <p>Health control es una aplicación desarrollada por estudiantes de la universidad tecnológica de Pereira, durante ciclo 4 del programa 
                        Misión TIC 2021, utilizando el stack tecnológico MERN y la metodología agile Scrum en trabajo colaborativo. La aplicación pretende 
                        dar solución al problema de la sistematización de los registros de toma de presión de los pacientes, a fin de llevar un control sobre 
                        dichos registros. 
                    </p>
                    <img src={logo} className="about-logo" alt="logo" />
                    <h2>Nuestra visión:</h2>
                    <p>El proyecto pretende expandirse a médicos y entidades prestadoras de servicios de salud, para lograr la vinculación con diversas bases de 
                        datos públicas, que permitan verificar la legitimidad de los médicos de los médicos y las instuticiones que hagan parte de nuestra aplicación.
                        Tamibén queremos ser un portal donde los usuarios puedan consultar directamente a los mejores médicos, que compartirán su conocimiento en 
                        nuestro blog y sesión de consejos, con temas relacionados con el ciudado de la salud, el control del peso y la presión arterial.
                    </p>
                    </div>
                    <Container>
                    <Row>
                        <Col xs={6} md={4}>
                        <img src={mision} className="mision-logo" alt="logomision" />
                        </Col>
                        <Col xs={4} md={2}>
                        </Col>
                        <Col xs={6} md={4}>
                        <img src={utp} className="utp-logo" alt="logoupt" />
                        </Col>
                    </Row>
                    <br></br>
                </Container>                  
            </header>
        </div>
    );
};

export default About