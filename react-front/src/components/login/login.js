import React from "react";
import axios from 'axios';
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { APIHOST as host } from '../../app.json'
import './login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaExtraccionSesion } from '../helper/helper';
import Loading from "../Loading/Loading";
import logo from '../../logo.jpg'

const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass: '',
        };
    }

    iniciarSesion() {
        this.setState({ loading: true });
        axios.post(`${host}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) => {
            if (isNull(response.data.token)) {
                alert('Usuario y/o contraseña invalidos');
            } else {
                cookies.set('_s', response.data.token, {
                    path: '/',
                    expires: calculaExtraccionSesion(),
                })
                this.props.history.push('/registro');
            }
            this.setState({ loading: false });
        })
        .catch((err) => {
            console.log(err);
            this.setState({ loading: false });
        });
    }
    
    render() {
        return (
            <div className="login">
            <header className="login-header"><br></br>
                <img src={logo} className="inicio-sesion" alt="sesion" />
                <p>Si eres parte de la comunidad de Health Control, ingresa con tus credenciales</p>

                <Container id="login-container">
                    <Loading show={this.state.loading} />
                    <Row>
                        <Col>
                            <Row>
                                <h2> Iniciar Sesión </h2>
                            </Row>
                            <Row>
                                <Col
                                    sm="12"
                                    xs="12"
                                    md={{ span: 4, offset: 4 }}
                                    lg={{ span: 4, offset: 4 }}
                                    xl={{ span: 4, offset: 4 }}
                                >
                                <Form>
                                <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    type="email"
                                    onChange={(e) =>
                                        this.setState({ usuario: e.target.value })
                                    }
                                />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    onChange={(e) =>
                                        this.setState({ pass: e.target.value })
                                    }
                                />
                                <br />
                                </Form.Group>

                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        this.iniciarSesion();
                                    }}
                                >
                                    Iniciar Sesión
                                </Button>
                                </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {/*
                <p>¿No tienes cuenta? <a href="/registro">Crea tu usuario</a></p>
                */}
            </header>
            </div>
        );
    }
}
