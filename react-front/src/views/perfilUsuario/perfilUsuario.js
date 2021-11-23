import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './perfilUsuario.css'

export default class perfilUsuario extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

render() {
    return(
        <Container id="perfilUsuario-container">
            <Row>
                <h2>Perfil del Usuario</h2>
                <h4>
                    Completa la informacion de tu perfil y disfruta de nuestros servicios
                </h4>
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
            <form>
                <Row id="datos-usuario">
                    <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>
                </Row>
            </form>

            <h4>Los datos a continuacion son opcionales</h4>
            <h4>Si desea que la aplicacion calcule su IMC y Categoria de peso diligencie la siguiente información</h4>
             
            <br />
            <form>
            <Row id="datos-opcionales">
                    <Form.Group as={Col}>
                        <Form.Label>Estatura</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>peso</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>IMC</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Categoria de peso</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>
                </Row>
            </form>

            <h4>Si desea que podamos contactarnos con usted, favor indiquenos un numero de celular</h4>

             <form>
                <Row id="celular-usuario">
                    <Form.Group as={Col}>
                        <Form.Label>Numero celular</Form.Label>
                        <Form.Control type="int" />
                    </Form.Group>
                </Row>
            </form>

            <h4>Si desea que su medico pueda revisar sus datos de presion y peso, indiquenos nombre y apellido</h4>
            
             <form>
            <Row id="datos-medico">
                    <Form.Group as={Col}>
                        <Form.Label>Nombre Medico tratante</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Apellido Medico tratante</Form.Label>
                        <Form.Control type="string" />
                    </Form.Group>

            </Row>
            </form>
            <br />
            
            <Row id="check-box">
                    <Form.Group as={Col}> 
                        <Form.Check label="Permite que le enviemos alertas a su mail, si no registra datos de toma de presion en 15 dias"/>
                        <br />
                        <Form.Check label="Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero no fuera de esta pagina"/>
                    </Form.Group>
                   
            </Row>
            <br />

            <Button id="botones" >GUARDAR</Button>{'       '}
            <Button id="botones" >ACTUALIZAR</Button>{'       '}
            <Button id="botones" >CONSEJOS</Button>{'       '}
            <Button id="botones" >TOMA PRESIÓN</Button>{'       '}
            <Button id="botones" >REGRESAR</Button>{'       '}
           
            <br />
            <br />
 
        </Container>
    );
}
}