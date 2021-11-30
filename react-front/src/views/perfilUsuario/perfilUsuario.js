import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import PerfilUsuarioConsulta from './consulta';
import PerfilUsuarioRegistra from './registra';
import PerfilUsuarioActualiza from './actualiza';
import './perfilUsuario.css';

export default class PerfilUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTab: 'Consulta',
            _id: null,
        };
        this.changeTab = this.changeTab.bind(this);
        this.setIdPerfilUsuario = this.setIdPerfilUsuario.bind(this);
        this.getIdPerfilUsuario = this.getIdPerfilUsuario.bind(this);
    }

    changeTab(tab){
        this.setState({ currentTab: tab });
    }
    
    setIdPerfilUsuario(id){
        this.setState({ _id: id});
    }

    getIdPerfilUsuario(){
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
                     <Nav.Link eventKey="Consulta">Consultar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Registra">Registrar</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>
            <Row>
                { this.state.currentTab === 'Consulta' ? (
                <PerfilUsuarioConsulta
                    changeTab={this.changeTab}
                    setIdPerfilUsuario={this.setIdPerfilUsuario}
                /> 
                ) : this.state.currentTab === 'Registra' ? (
                    <PerfilUsuarioRegistra changeTab={this.changeTab} />
                ) : (
                    <PerfilUsuarioActualiza
                        changeTab={this.changeTab}
                        getIdPerfilUsuario={this.getIdPerfilUsuario} 
                    />
                )}
            </Row>
            </Container>
        );
    }
}
