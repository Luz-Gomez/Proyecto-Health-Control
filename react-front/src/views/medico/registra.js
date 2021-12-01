import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";
import "./medico.css";

export default class MedicosRegistra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      medico: {
        mail: "",
        nombre: "",
        apellido: "",
        celular: "",
        institucion: "",
        regInstitucion: "",
        tarjetaProf: "",
        acepta: true,
        alerta: true,
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
      medico: {
        ...this.state.medico,
        [index]: value,
      },
    });
  }

  guardar() {
    this.setState({ loading: true });
    request
      .post("/medicos", this.state.medico)
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
    if (this.state.rediret) this.props.changeTab("Consulta");
  }

  render() {
    return (
      <Container id="medico-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={1500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h5> Registra Datos del Perfil de Medico </h5>
        </Row>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Mail</Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("mail", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Nombre</Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("nombre", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Apellido</Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("apellido", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Celular</Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("celular", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Institucion</Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("institucion", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">
              Registro Institucion
            </Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("regInstitucion", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Tarjeta Profesional</Form.Label>
            <Form.Control
              onChange={(e) => this.setValue("tarjetaProf", e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Check
              label="Confirmas que toda la información proporcionada es verdadera y podemos verificarla"
              onChange={(e) => this.setValue("acepta", e.target.value)}
            />
            <br />
            <Form.Check
              label="Quieres recibir notificaciones en tu correo sobre la actividad de tus pacientes"
              onChange={(e) => this.setValue("alerta", e.target.value)}
            />
          </Form.Group>
          <br />
          <Button id="grid-button" onClick={() => console.log(this.guardar())}>
            GUARDAR
          </Button>
          <Button id="grid-button" href="/consultaTomaPresion">
            CONSULTA TOMAS PRESION
          </Button>
          <Button id="grid-button" href="./home">
            REGRESAR
          </Button>
          <br />
        </Form>
        <br />
      </Container>
    );
  }
}
