import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './perfilMedico.css'

export default class PerfilMedico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container id="perfilMedico-container">
                <Row>
                    <h2>Perfil del Medico</h2>
                    <h4>
                        Completa la informacion de tu perfil y disfruta de nuestros servicios
                    </h4>
                    <h4>... Pagina en construccion ...</h4>
                </Row>
            </Container>
        );
    }
}
