import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import MedicoConsulta from "./consulta";
import MedicoRegistra from "./registra";
import MedicoActualiza from "./actualiza";
import "./medico.css";

export default class Medico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "Buscar",
      _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdMedico = this.setIdMedico.bind(this);
    this.getIdMedico = this.getIdMedico.bind(this);
  }

  changeTab(tab) {
    this.setState({ currentTab: tab });
  }

  setIdMedico(id) {
    this.setState({ _id: id });
  }

  getIdMedico() {
    return this.state._id;
  }

  render() {
    return (
      <Container id="medico-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="Consulta"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="Consulta">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Registra">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "Consulta" ? (
            <MedicoConsulta
              changeTab={this.changeTab}
              setIdMedico={this.setIdMedico}
            />
          ) : this.state.currentTab === "Registra" ? (
            <MedicoRegistra changeTab={this.changeTab} />
          ) : (
            <MedicoActualiza
              changeTab={this.changeTab}
              getIdMedico={this.getIdMedico}
            />
          )}
        </Row>
      </Container>
    );
  }
}
