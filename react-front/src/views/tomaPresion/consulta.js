import React from 'react';
import { Container, Row  } from 'react-bootstrap';
import DataGrid from '../grid/grid';

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, {
    dataField: 'mail',
    text: 'Mail'
}, {
    dataField: 'fecha',
    text: 'Fecha'
}, {
    dataField: 'sistole',
    text: 'Sistole'
}, {
    dataField: 'diastole',
    text: 'Disatole'
}, {
    dataField: 'pulso',
    text: 'Pulso'
}, {
    dataField: 'presion',
    text: 'Presion'
}];

export default class TomaPresionConsulta extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }

    componentDidMount() { }

    onClickEditButton(row){
        this.props.setIdTomaPresion(row._id);
        this.props.changeTab('Actualiza');
    }

    render() { 
        return (
            <Container id="tomaPresion-container">
                <Row>
                    <h2> Buscar Registro Tomas de presion </h2>
                </Row>
                <Row id="tomaPresion-consulta-container">
                    <DataGrid url="/tomaPresion" 
                        columns={columns}
                        showEditButton={true}
                        onClickEditButton={this.onClickEditButton} 
                    />
                </Row>
            </Container>
          );
    }
}
