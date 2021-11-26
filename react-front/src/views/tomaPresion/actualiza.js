import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import { request } from '../../components/helper/helper';
import Loading from '../../components/Loading/Loading';
import MessagePrompt from '../../components/prompts/message';
import ConfirmationPrompts from '../../components/prompts/confirmation'
import './tomaPresion.css';

export default class TomaPresionActualiza extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idTomaPresion: this.props.getIdTomaPresion(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation:{
                title: '',
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
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount(){
        this.getTomaPresion();
    }

    getTomaPresion() {
        this.setState({ loading: true });
        request
        .get(`/tomaPresion/${this.state.idTomaPresion}`)
        .then((response) => {
            this.setState({ 
                tomaPresion: response.data,
                loading: false,
            });
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: false });
        });
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
            .put(`/tomaPresion/${this.state.idTomaPresion}`, this.state.tomaPresion)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab('Consulta');
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

    onCancel(){
        alert('cancelar');
    }

    onConfirm(){
        this.setState(
        {
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        },
        this.guardar()
        );
    }
    
    render() {
        return (
            <Container id="tomaPresion-container">
                <MessagePrompt 
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2000}
                    onExited={this.onExitedMessage}
                />
                <ConfirmationPrompts 
                    text={this.state.confirmation.text}
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2>Toma Presión Arterial</h2>
                    <h4>Actualiza Registros de Tomas de Presión</h4>
                </Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="tomaPresion-label">Mail</Form.Label>
                        <Form.Control

                            value={this.state.tomaPresion.mail}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="tomaPresion-label">Fecha</Form.Label>
                        <Form.Control

                            value={this.state.tomaPresion.fecha}

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="tomaPresion-label">Sistole</Form.Label>
                        <Form.Control
                            type="number"
                            value={this.state.tomaPresion.sistole}
                            onChange={(e) => this.setValue('sistole', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="tomaPresion-label">Diastole</Form.Label>
                        <Form.Control
                            type="number"
                            value={this.state.tomaPresion.diastole}
                            onChange={(e) => this.setValue('diastole', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="tomaPresion-label">Pulso</Form.Label>
                        <Form.Control
                            type="number"
                            value={this.state.tomaPresion.pulso}
                            onChange={(e) => this.setValue('pulso', e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="tomaPresion-label">Presion</Form.Label>
                        <Form.Control
                            value={this.state.tomaPresion.presion}
                            onChange={(e) => this.setValue('presion', e.target.value)}
                        />
                    </Form.Group>

                    <br />
                    <Button
                    id="guardar"
                    onClick={() => 
                        this.setState({
                            confirmation:{ ...this.state.confirmation, show: true },
                        })
                    }
                    > Guardar Cambios
                    </Button>
                    <br />
                </Form>
            </Container>
        );
    }
}
