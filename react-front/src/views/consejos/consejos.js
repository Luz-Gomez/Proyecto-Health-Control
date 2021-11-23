import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './consejos.css';

export default class Consejos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container id="consejos-container">
                <Row>
                <h2>Consejos</h2>
                    <h4> 
                    Consejos de acuerdo a tu cálculo de índice de masa corporal y Categoria de peso
                    </h4>
                    <h4>... Pagina en construccion ...</h4>                    
                </Row>
            </Container>
         );
    }
}
