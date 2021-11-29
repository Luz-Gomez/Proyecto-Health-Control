import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";
import "./tomaPresion.css";

export default class TomaPresionRegistra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
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
      .post("/tomaPresion", this.state.tomaPresion)
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

  calcula_presion() {
    const pas = this.state.tomaPresion.sistole;
    const pad = this.state.tomaPresion.diastole;

    if (pas < pad || pas - pad < 15) {
      return "Valores incorrectos";
    }
    if (pas <= 90 || pad <= 60) {
      return "Hipotensión";
    } else if (pas > 90 && pas < 121 && pad > 60 && pad < 81) {
      return "Normal";
    } else if (pas > 120 && pas < 130 && pad < 81) {
      return "Elevada";
    } else if ((pas > 129 && pas < 140) || (pad > 79 && pad < 90)) {
      return "Etapa 1 de Hipertensión";
    } else if ((pas > 139 && pas < 181) || (pad > 99 && pas < 121)) {
      return "Etapa 2 de Hipertensión";
    } else if (pas > 180 || pad > 120) {
      return "Crisis Hipertensiva";
    }
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("Consulta");
  }

  render() {
    return (
      <Container id="tomaPresion-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={1500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h3>Registra tus Tomas de Presión Arterial</h3>
        </Row>
        <Row>
          <Form id="mail-form">
            <Form.Group>
              <Form.Label id="tomaPresion-label">Mail</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => this.setValue("mail", e.target.value)}
              />
            </Form.Group>
            <br />
          </Form>
        </Row>
        <Row>
          <Col
            sm="12"
            xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Form id="tomaPresion-label">
              <Form.Group as={Col}>
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => this.setValue("fecha", e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Sístole</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => this.setValue("sistole", e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Diástole</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => this.setValue("diastole", e.target.value)}
                  onBlur={(e) =>
                    this.setValue("presion", this.calcula_presion())
                  }
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Pulso</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => this.setValue("pulso", e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Nivel Presion</Form.Label>
                <Form.Control value={this.state.tomaPresion.presion} />
              </Form.Group>
              <br />
              <Button id="guardar" onClick={() => console.log(this.guardar())}>
                Guardar
              </Button>
              <Button id="grid-button" href="./home">
                Regresar
              </Button>
            </Form>
            <br /><br />
          </Col>
        </Row>
      </Container>
    );
  }
}
