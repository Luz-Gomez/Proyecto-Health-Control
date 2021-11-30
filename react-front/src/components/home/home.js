import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "../../logoHealthControl.png";
import servicios from "../../servicios.jpg";
import "./home.css";

function Home() {
  return (
    <Container className="home">
      <header className="home-header">
        <br></br>
        <img src={logo} className="home-logo" alt="logo" />

        <p>
          La aplicación que te permitirá llevar un registro permanente de tus
          mediciones de <strong>presión arterial</strong>, para obtener un
          documento detallado de tus niveles de tensión en diferentes momentos.
          De esta manera podrás monitorear y analizar el comportamiento de tu
          presión arterial y estar alerta sobre posibles factores de riesgo. Con
          Health control, puedes tomar el control de tu salud.
        </p>
        <br></br>
        <div className="d-grip gap-2">
          <Button href="./login" variant="warning" size="lg">
            Ingresa con tu usuario
          </Button>
        </div>
        <br></br>

        <p>
          En Health control nos preocupamos por tu salud y queremos ayudarte a
          llevar un control de tus registros de toma de presión arterial. En
          esta aplicación, también puedes compartir la información de tus
          registros con tu médico de confianza, para que te ayude a monitorear
          tus niveles de tensión y de ser necesario, actualice tu tratamiento.
          Crea tu usuario y conoce nuestros servicios.
        </p>
        <h2>
          <strong>Nuestros servicios:</strong>
        </h2>
        <img src={servicios} className="servicios" alt="servicios" />
        <br></br>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <p>Registra tus tomas de presión</p>
              <p>Obtén tu documento en pdf</p>
              <p>Recibe tus registros en tu email</p>
            </Col>
            <Col xs={6} md={4}>
              <p>Calcula tu índice de masa corporal</p>
              <p>Actualiza tus datos</p>
              <p>Accede a consejos de salud</p>
            </Col>
            <Col xs={6} md={4}>
              <p>Registra tu médico de confianza para que acceda a tus datos de presión arterial</p>
              <p>Recibe notificaciones en tu email</p>
            </Col>
          </Row>
          <br></br>
        </Container>
      </header>
    </Container>
  );
}

export default Home;
