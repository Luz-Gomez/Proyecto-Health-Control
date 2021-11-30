import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mision from "../../logoMisionTIC.jpg";
import utp from "../../logoUTP.png";
import "./about.css";

function About() {
  return (
    <Container className="about">
      <header className="about-header">
        <h1>¿Qué es Health Control?</h1>
        <br></br>
        <div className="info">
          <p>
            Health control es una aplicación desarrollada por estudiantes de la
            universidad tecnológica de Pereira, durante ciclo 4 del programa
            Misión TIC 2021, utilizando el stack tecnológico MERN y la
            metodología agile Scrum en trabajo colaborativo.
          </p>
          <p>
            La aplicación pretende dar solución al problema de la
            sistematización de los registros de toma de presión de los
            pacientes, a fin de llevar un control sobre dichos registros, tanto
            para uso personal como para uso médico. Nuestra misión es servir de
            apoyo a los usuarios con problemas de tensión, a los médicos y las
            instituciones de salud, principalmente desde el control y la
            prevención.
          </p>
          <h2>Nuestra visión:</h2>
          <p>
            El proyecto pretende expandirse a médicos de renombre y entidades
            prestadoras de servicios de salud. Lograr la vinculación con
            diversas bases de datos públicas, que permitan verificar la
            legitimidad de los médicos y las instuticiones que hagan parte de
            nuestra aplicación. De esta manera queremos brindarle seguridad y
            confianza a nuestros usuarios. También queremos ser un portal donde
            los usuarios puedan consultar directamente a los mejores médicos,
            que quieran compartir su conocimiento con los usuarios en nuestro
            blog de consejos y que los usuarios puedan contratar sus servicios
            profesionales. En nuestro blog, compartiremos con nuestra comunidad,
            artículos relacionados con el ciudado de la salud, el control del
            peso y la presión arterial.
          </p><br></br>
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
    </Container>
  );
}

export default About;
