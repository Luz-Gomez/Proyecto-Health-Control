import React from "react";
import { Container, Row } from "react-bootstrap";
import GridMedico from "./gridMedico";
import "./medico.css";

const columns = [
  {
    dataField: '_id',
    text: 'ID',
    hidden: true,
  },
  {
    dataField: 'mail',
    text: 'Mail',
  },
  {
    dataField: 'nombre',
    text: 'Nombre',
  },
  {
    dataField: 'apellido',
    text: 'Apellido',
  },
  {
    dataField: 'celular',
    text: 'Celular',
  },
  {
    dataField: 'institucion',
    text: 'Institucion',
  },
  {
    dataField: 'regInstitucion',
    text: 'RegInstitucion',
    hidden: true,
  },
  {
    dataField: 'tarjetaProf',
    text: 'tarjetaProf',
    hidden: true,
  },
  {
    dataField: 'acepta',
    text: 'acepta',
    hidden: true,
  },
  {
    dataField: 'alerta',
    text: 'alerta',
    hidden: true,
  }, 
];

export default class MedicosConsulta extends React.Component {
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
      <Container id="medico-container">
        <Row>
          <h5> Consulta Perfil de Medico </h5>
        </Row>
        <Row id="medico-consulta-container">
          <GridMedico
            url="/medicos"
            columns={columns}
            showEditButton={true}
            onClickEditButton={this.onClickEditButton}
          />
        </Row>
      </Container>
    );
  }
}
