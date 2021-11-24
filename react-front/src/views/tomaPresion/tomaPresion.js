import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './tomaPresion.css';
import MaterialTable from 'material-table'

export default class tomaPresion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            tomaPresion: {
            mail: '',
            fecha: '',
            sistole: '',
            diastole: '',
            pulso: '',
            presion: '',
            },
        };
    }

    render() {
        return (
            <Container id="tomaPresion-container">
                <Row>
                    <h2>Toma Presión Arterial</h2>
                    <h4>Por favor registre sus tomas de presión</h4>
                </Row>
                <Row>
                    <Col
                        sm="10"
                        xs="10"
                        md={{ span: 6, offset: 0 }}
                        lg={{ span: 6, offset: 0 }}
                        xl={{ span: 6, offset: 0 }}
                    >
                        <Form id="mail-form">
                            <Form.Group>
                                <Form.Label>Mail</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <br />
                <Form>
                    <Row id="datos-presion">
                        <Form.Group as={Col}>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Sístole</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Diástole</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Pulso</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Nivel Presion</Form.Label>
                            <Form.Control type="string" />
                        </Form.Group>
                    </Row>
                    <br />
                    <Button id="guardar" >Guardar</Button>
                    <br />
                    <br />
                    <MaterialTable
                        id="tabla"
                        title="Tomas de Presión Registradas"
                        columns={[
                            { title: 'Fecha', field: 'fecha', type: 'datetime' },
                            { title: 'Sístole', field: 'pas', type: 'numeric'},
                            { title: 'Diástole', field: 'pad', type: 'numeric' },
                            { title: 'Pulso', field: 'pulso', type: 'numeric' },
                            { title: 'Presión', field: 'presion' },
                         ]}
                        data={[
                            { fecha: '2010/10/24 12:20', pas: 120, pad: 80, pulso: 63 , presion: 'Normal'},
                            { fecha: '2010/11/04 10:15', pas: 135, pad: 85, pulso: 65 , presion: 'Elevada'},
                            { fecha: '2010/11/14 9:40', pas: 145, pad: 90, pulso: 70 , presion: 'Hipertensión'},
                        ]}
                        options={{ 
                            search: true
                        }}
                    ></MaterialTable>
                </Form>
            </Container>
        );
    }
}
