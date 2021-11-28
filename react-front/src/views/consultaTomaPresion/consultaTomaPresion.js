import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Grilla from './grilla';

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

export default class ConsultaTomaPresion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        };
    }

    componentDidMount(){ }
 
    render() { 
        return ( 
            <Container id="tomaPresion-container">
                <Row>
                    <h2> Consultar Registro Tomas de presion </h2>
                </Row>
                <Row id="tomaPresion-consulta-container">
                    <Grilla url="/tomaPresion" columns={columns} />
                </Row>
            </Container>
        );
    }
}   
