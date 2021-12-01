import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GridUsuario from './gridUsuario';

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, {
    dataField: 'mail',
    text: 'Mail',
}, {
    dataField: 'nombre',
    text: 'Nombre',
}, {
    dataField: 'apellido',
    text: 'Apellido',
}, {
    dataField: 'fechaNacimiento',
    text: 'Fecha Nacimiento',
    hidden: true,
}, {
    dataField: 'estatura',
    text: 'Estatura',
}, {
    dataField: 'peso',
    text: 'Peso',
}, {
    dataField: 'celular',
    text: 'Celular',
    hidden: true,
}, {
    dataField: 'nombreMedico',
    text: 'Nombre Medico',
    hidden: true,
}, {
    dataField: 'apellidoMedico',
    text: 'Apellido Medico',
    hidden: true,
}, {
    dataField: 'visibilidad',
    text: 'Visibilidad',
    hidden: true,
}, {
    dataField: 'alerta',
    text: 'Alerta',
    hidden: true,
}, {    
    dataField: 'imc',
    text: 'I.M.C.'
}, {
    dataField: 'categoriaPeso',
    text: 'Categoria Peso'
}];

export default class PerfilUsuarioConsulta extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }

    componentDidMount() { }

    onClickEditButton(row){
        this.props.setIdPerfilUsuario(row._id);
        this.props.changeTab('Actualiza');
    }

    render() { 
        return (
            <Container id="perfilUsuario-container">
                <Row>
                    <h5> Consulta Datos del Perfil de Usuario </h5>
                </Row>
                <Row id="perfilUsuario-consulta-container">
                    <GridUsuario url="/perfilUsuario" 
                        columns={columns}
                        showEditButton={true}
                        onClickEditButton={this.onClickEditButton} 
                    />
                </Row>
            </Container>
        );
    }
}
