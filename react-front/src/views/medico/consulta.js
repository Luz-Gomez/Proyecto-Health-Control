import React from "react";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../grid/grid";
import "./medico.css";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "mail",
    text: "Mail",
  },
  {
    dataField: "nombre",
    text: "Nombre",
  },
  {
    dataField: "apellido",
    text: "Apellido",
  },
  {
    dataField: "celular",
    text: "Celular",
  },
  {
    dataField: "institucion",
    text: "Institucion",
  },
  {
    dataField: "regInstitucion",
    text: "RegInstitucion",
  },
  {
    dataField: "tarjetaProf",
    text: "tarjetaProf",
  },
  {
    dataField: "acepta",
    text: "acepta",
  },
  {
    dataField: "alerta",
    text: "alerta",
  },
];

export default class MedicoConsulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickEditButton = this.onClickEditButton.bind(this);
  }

  componentDidMount() {}

  onClickEditButton(row) {
    this.props.setIdMedico(row._id);
    this.props.changeTab("Actualiza");
  }

  render() {
    return (
      <Container id="medico-consulta-container">
        <Row>
          <h2> Buscar perfil medico </h2>
        </Row>
        <Row>
          <DataGrid
            url="/medico"
            columns={columns}
            showEditButton={true}
            onClickEditButton={this.onClickEditButton}
          />
        </Row>
      </Container>
    );
  }
}
