import React from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";
import ConfirmationPrompts from "../../components/prompts/confirmation";
import "./tomaPresion.css";

export default class TomaPresionActualiza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idTomaPresion: this.props.getIdTomaPresion(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        title: "Actualizar Registro Toma de presion",
        text: "Desea actualizar el Registro?",
        show: false,
      },
      loading: false,
      tomaPresion: {
        mail: "",
        fecha: "",
        sistole: "",
        diastole: "",
        pulso: "",
        presion: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
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
    this.setState({
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.guardar()
    );
  }

  calcula_presion() {
    var pas =  Number(this.state.tomaPresion.sistole);
    var pad = Number(this.state.tomaPresion.diastole);
    
    if (pas < pad || (pas - pad) < 15) {
      return "Valores incorrectos";
    }
    if (pas <= 90 || pad <= 60) {
      return "Hipotensión";
    } else if (pas > 90 && pas <= 120 && pad > 60 && pad <= 80) {
      return "Normal";
    } else if (pas > 120 && pas < 130 && pad <= 80) {
      return "Elevada";
    } else if ((pas >= 130 && pas < 140) || (pad > 80 && pad < 90)) {
      return "Etapa 1 de Hipertensión";
    } else if ((pas >= 140 && pas <= 180) || (pad >= 90 && pas <= 120)) {
      return "Etapa 2 de Hipertensión";
    } else if (pas > 180 || pad > 120) {
      return "Crisis Hipertensiva";
    }
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
          <h5>Actualiza tus Registros de Toma de Presión</h5>
        </Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id="tomaPresion-label">Mail</Form.Label>
            <Form.Control value={this.state.tomaPresion.mail} />
          </Form.Group>
        </Form>
        <Row>
          <Col
            sm="12"
            xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="tomaPresion-label">Fecha</Form.Label>
                <Form.Control value={this.state.tomaPresion.fecha} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="tomaPresion-label">Sistole</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Valores entre 60 y 250"
                  min="60"
                  max="250"
                  step="1"
                  value={this.state.tomaPresion.sistole}
                  onChange={(e) => this.setValue("sistole", e.target.value)}
                  onBlur={(e) =>
                    this.setValue("presion", this.calcula_presion())
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="tomaPresion-label">Diastole</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Valores entre 30 y 120"
                  min="30"
                  max="120"
                  step="1"
                  value={this.state.tomaPresion.diastole}
                  onChange={(e) => this.setValue("diastole", e.target.value)}
                  onBlur={(e) =>
                    this.setValue("presion", this.calcula_presion())
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="tomaPresion-label">Pulso</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Valores entre 60 y 90"
                  min="60"
                  max="90"
                  step="1"
                  value={this.state.tomaPresion.pulso}
                  onChange={(e) => this.setValue("pulso", e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="tomaPresion-label">Presion</Form.Label>
                <Form.Control value={this.state.tomaPresion.presion} />
              </Form.Group>

              <br />
              <Button id="grid-button"
                onClick={() =>
                  this.setState({
                    confirmation: { ...this.state.confirmation, show: true },
                  })}>
                GUARDAR
              </Button>
              <Button id="grid-button" href="/tips">
                TIPS
              </Button>
               <Button id="grid-button" href="./home">
                REGRESAR
              </Button>
            </Form>
            <br /><br />
          </Col>
        </Row>
      </Container>
    );
  }
}
