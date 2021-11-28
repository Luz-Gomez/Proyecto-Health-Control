import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import TomaPresionConsulta from './consulta';
import TomaPresionRegistra from './registra';
import TomaPresionActualiza from './actualiza';
import './tomaPresion.css';

export default class TomaPresion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTab: 'Consulta',
            _id: null,
        };
        this.changeTab = this.changeTab.bind(this);
        this.setIdTomaPresion = this.setIdTomaPresion.bind(this);
        this.getIdTomaPresion = this.getIdTomaPresion.bind(this);
    }

    changeTab(tab){
        this.setState({ currentTab: tab });
    }
    
    setIdTomaPresion(id){
        this.setState({ _id: id});
    }

    getIdTomaPresion(){
        return this.state._id;
    }

    render() { 
        return ( 
            <Container >
            <Row>
            <Nav id="tabla" fill variant="tabs" 
                defaultActiveKey="Consulta"
                onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
            >
                <Nav.Item>
                     <Nav.Link eventKey="Consulta">Consulta</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Registra">Registra</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>
            <Row>
                { this.state.currentTab === 'Consulta' ? (
                <TomaPresionConsulta 
                    changeTab={this.changeTab}
                    setIdTomaPresion={this.setIdTomaPresion}
                /> 
                ) : this.state.currentTab === 'Registra' ? (
                    <TomaPresionRegistra changeTab={this.changeTab} />
                ) : (
                    <TomaPresionActualiza 
                        changeTab={this.changeTab}
                        getIdTomaPresion={this.getIdTomaPresion} 
                    />
                )}
            </Row>
            </Container>
         );
    }
}
