import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";
import "./perfilUsuario.css";

export default class PerfilUsuarioRegistra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      perfilUsuario: {
        mail: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        estatura: '',
        peso: '',
        celular: '',
        nombreMedico: '',
        apellidoMedico: '',
        visibilidad: true,
        alerta: true,
        imc: '',
        categoriaPeso: '',
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
      perfilUsuario: {
        ...this.state.perfilUsuario,
        [index]: value,
      },
    });
  }

  guardar() {
    this.setState({ loading: true });
    request
      .post("/perfilUsuario", this.state.perfilUsuario)
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
      console.log(this.state.perfilUsuario);
  }

  calcula_imc() {
    var indice = Number(
      this.state.perfilUsuario.peso / this.state.perfilUsuario.estatura ** 2
    );
    return indice;
  }

  calcula_peso() {
    const estado = Number(this.state.perfilUsuario.imc);

    if (estado < 18.5) {
      return "Bajo peso";
    } else if (estado >= 18.5 && estado < 25) {
      return "Peso Normal";
    } else if (estado >= 25 && estado < 30) {
      return "Sobrepeso";
    } else if (estado >= 30 && estado < 40) {
      return "Obesidad";
    } else if (estado >= 40) {
      return "Obesidad mórbida";
    }
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("Consulta");
  }

  render() {
    return (
      <Container id="perfilUsuario-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={1500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h5>Registra los Datos del Perfil de Usuario</h5>
        </Row>
        <Row>
          <Col
            sm="10"
            xs="10"
            md={{ span: 6, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 6, offset: 0 }}
          >
            <Form id="datos-perfil">
              <Form.Group>
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => this.setValue("mail", e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Form>
          <Row id="datos-perfil">
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="string"
                onChange={(e) => this.setValue("nombre", e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="string"
                onChange={(e) => this.setValue("apellido", e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fecha Nacimiento</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => this.setValue("fechaNacimiento", e.target.value)}
              />
            </Form.Group>
          </Row>
        </Form>
        <br />
        <h4>
          <p>
            Los datos a continuacion son opcionales. Si desea que la aplicacion
            calcule su IMC y Categoria de peso diligencie peso y estatura. Si
            desea que podamos contactarnos con usted, favor indiquenos un numero
            de celular. Si desea que su medico pueda revisar sus registros,
            indiquenos nombre y apellido de su medico tratante.
          </p>
        </h4>
        <br />
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Estatura</Form.Label>
              <Form.Control
                type="number"
                placeholder="En metros #.##"
                min="1.0"
                max="2.5"
                step="0.01"
                onChange={(e) => this.setValue("estatura", e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Peso</Form.Label>
              <Form.Control
                type="number"
                placeholder="En kilos ###.#"
                min="30"
                max="300"
                step="0.1"
                onChange={(e) => this.setValue("peso", e.target.value)}
                onBlur={(e) => this.setValue("imc", this.calcula_imc())}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Indice Masa Corporal</Form.Label>
              <Form.Control value={this.state.perfilUsuario.imc} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Categoria de peso</Form.Label>
              <Form.Control value={this.state.perfilUsuario.categoriaPeso} />
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Numero celular</Form.Label>
              <Form.Control
                type="string"
                onChange={(e) => this.setValue("celular", e.target.value)}
                onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Nombre Medico tratante</Form.Label>
              <Form.Control
                type="string"
                onChange={(e) => this.setValue("nombreMedico", e.target.value)}
                onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido Medico tratante</Form.Label>
              <Form.Control
                type="string"
                onChange={(e) => this.setValue("apellidoMedico", e.target.value)}
                onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
              />
            </Form.Group>
          </Row>
        </Form>
        <br />
        <Row id="check-box">
          <Form.Group as={Col}>
            <Form.Check
              label="Permite que le enviemos alertas a su mail, si no registra datos de toma de presion en 15 dias"
              onChange={(e) => this.setValue("visibilidad", e.target.value)}
              onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
            />
            <br />
            <Form.Check
              label="Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero no fuera de esta pagina"
              onChange={(e) => this.setValue("alerta", e.target.value)}
              onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
            />
          </Form.Group>
        </Row>
        <br />
        <Button id="botones" onClick={() => console.log(this.guardar())}>
                GUARDAR
        </Button>
        <Button id="botones" href="/consejos">
          CONSEJOS
        </Button>
        <Button id="botones" href="/tomaPresion">
          TOMA PRESIÓN
        </Button>
        <Button id="botones"  href="./home">
          REGRESAR
        </Button>
        <br /> <br />
      </Container>
    );
  }
}
