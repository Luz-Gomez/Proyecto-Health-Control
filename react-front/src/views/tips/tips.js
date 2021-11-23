import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './tips.css';

export default class Tips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container id="tips-container">
                <Row>
                <h2>Tips</h2>
                    <h4> Tips de acuerdo a tus niveles de presión arterial </h4>
                    <h4>... Pagina en construccion ...</h4>
                </Row>
            </Container>
         );
    }
}
 