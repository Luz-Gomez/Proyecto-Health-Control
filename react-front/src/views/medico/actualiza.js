import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";
import ConfirmationPrompts from "../../components/prompts/confirmation";
import "./medico.css";

export default class MedicosActualiza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idMedico: this.props.getIdMedico(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        title: "",
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
        acepta: "",
        alerta: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getMedico();
  }

  getMedico() {
    this.setState({ loading: true });
    request
      .get(`/medicos/${this.state.idMedico}`)
      .then((response) => {
        this.setState({
          medico: response.data,
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
      medico: {
        ...this.state.medico,
        [index]: value,
      },
    });
  }

  guardar() {
    this.setState({ loading: true });
    request
      .put(
        `/medicos/${this.state.idMedico}`, this.state.medico)
      .then((response) => {
        if (response.data.exito) {
          this.props.changeTab("Consulta");
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

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
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
      <Container id="medico-container">
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
          <h5>Actualiza Perfil de Medico</h5>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Mail</Form.Label>
            <Form.Control
              value={this.state.medico.mail}
              onChange={(e) => this.setValue("mail", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Nombreo</Form.Label>
            <Form.Control
              value={this.state.medico.nombre}
              onChange={(e) => this.setValue("nombre", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Apellido</Form.Label>
            <Form.Control
              value={this.state.medico.apellido}
              onChange={(e) => this.setValue("apellido", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Celular</Form.Label>
            <Form.Control
              value={this.state.medico.celular}
              onChange={(e) => this.setValue("celular", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">Institucion</Form.Label>
            <Form.Control
              value={this.state.medico.institucion}
              onChange={(e) => this.setValue("institucion", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">
              Registro Institucion
            </Form.Label>
            <Form.Control
              value={this.state.medico.regInstitucion}
              onChange={(e) => this.setValue("regInstitucion", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="medico-label">
              Tarjeta Profesionaln
            </Form.Label>
            <Form.Control
              value={this.state.medico.tarjetaProf}
              onChange={(e) => this.setValue("tarjetaProf", e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Check
              label="Confirmas que toda la información proporcionada es verdadera y podemos verificarla"
              value={this.state.medico.acepta}
              onChange={(e) => this.setValue("acepta", e.target.value)}
            />
            <br />        
            <Form.Check
              label="Quieres recibir notificaciones en tu correo sobre la actividad de tus pacientes"
              value={this.state.medico.alerta}
              onChange={(e) => this.setValue("alerta", e.target.value)}
            />
          </Form.Group>
          <br />
          <Button id="grid-button" onClick={() =>
              this.setState({
                confirmation: { ...this.state.confirmation, show: true },
              })
            }
          >
            GUARDAR
          </Button>
          <Button id="grid-button" href="/consultaTomaPresion">
            CONSULTA TOMAS PRESION
          </Button>
          <Button id="grid-button" href="./home">
            REGRESAR
          </Button>
        </Form>
      </Container>
    );
  }
}
