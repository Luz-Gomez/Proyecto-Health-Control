import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { request } from '../../components/helper/helper';
import Loading from '../../components/Loading/Loading';
import MessagePrompt from '../../components/prompts/message';
import './tomaPresion.css';

export default class TomaPresionRegistra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            loading: false,
            tomaPresion: {
                mail: '',
                fecha: '',
                sistole: '',
                diastole: '',
                pulso: '',
                presion: '',
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            tomaPresion: {
                ...this.state.tomaPresion,
                [index]: value,
            },
        });
    }

    guardar() {
        this.setState({ loading: true });
        request
        .post('/tomaPresion', this.state.tomaPresion)
        .then((response) => {
            if (response.data.exito) {
                this.setState({
                    rediret: response.data.exito,
                    message: {
                        text: response.data.msg,
                        show: true,
                    },
                });
            }
            this.setState({ loading: false });
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: true });
        });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('Consulta')
    }

    render() {
        return (
            <Container id="tomaPresion-container">
                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={1500}
                    onExited={this.onExitedMessage}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2>Toma Presión Arterial</h2>
                    <h4>Por favor registre sus tomas de presión</h4>
                </Row>
                <Row>
                    <Form id="mail-form">
                        <Form.Group>
                            <Form.Label id="tomaPresion-label">Mail</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={(e) => this.setValue('mail', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => this.setValue('fecha', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Sístole</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => this.setValue('sistole', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Diástole</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => this.setValue('diastole', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Pulso</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => this.setValue('pulso', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Nivel Presion</Form.Label>
                            <Form.Control
                                type="string"
                                onChange={(e) => this.setValue('presion', e.target.value)}
                            />
                        </Form.Group>
                        <br />
                        <Button
                            id="guardar"
                            onClick={() => console.log(this.guardar())}
                        >
                            Guardar
                        </Button>
                        <br />
                    </Form>
                </Row>
            </Container>
        );
    }
}
