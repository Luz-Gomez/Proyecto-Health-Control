import React from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";
import ConfirmationPrompts from "../../components/prompts/confirmation";
import "./perfilUsuario.css";

export default class PerfilUsuarioActualiza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idPerfilUsuario: this.props.getIdPerfilUsuario(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        title: "Actualizar Perfil de Usuario",
        text: "Desea actualizar el Perfil?",
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getPerfilUsuario();
  }

  getPerfilUsuario() {
    this.setState({ loading: true });
    request
      .get(`/perfilUsuario/${this.state.idPerfilUsuario}`)
      .then((response) => {
        this.setState({
          perfilUsuario: response.data,
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
       perfilUsuario: {
        ...this.state.perfilUsuario,
        [index]: value,
      },
    });
  }

  guardar() {
    this.setState({ loading: true });
    request
      .put(`/perfilUsuario/${this.state.idPerfilUsuario}`, this.state.perfilUsuario)
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
      console.log(this.state.perfilUsuario)
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
    })
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

  calcula_imc() {
    var indice = Number(
      this.state.perfilUsuario.peso / (this.state.perfilUsuario.estatura ** 2))
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

  render() {
    return (
      <Container id="perfilUsuario-container">
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
          <h5>Actualiza Datos del Perfil de Usuario</h5>
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
                <Form.Control value={this.state.perfilUsuario.mail} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Form>
          <Row id="datos-perfil">
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control value={this.state.perfilUsuario.nombre} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control value={this.state.perfilUsuario.apellido} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Fecha Nacimiento</Form.Label>
              <Form.Control value={this.state.perfilUsuario.fechaNacimiento} />
            </Form.Group>
          </Row>
        </Form>
        <br />
        <h4>
          <p>
            Si desea que la aplicacion mantenga al dia el calculo de su IMC y Categoria de peso, actualice su peso cuando tenga alguna variacion. 
          </p>
        </h4>
        <br />
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Estatura</Form.Label>
              <Form.Control
                type="number"
                placeholder="En Metros #.##"
                min="1"
                max="2.5"
                step="0.01"
                value={this.state.perfilUsuario.estatura}
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
                value={this.state.perfilUsuario.peso}
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
                value={this.state.perfilUsuario.celular}
                onChange={(e) => this.setValue("celular", e.target.value)}
                onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Nombre Medico tratante</Form.Label>
              <Form.Control
                type="string"
                value={this.state.perfilUsuario.nombreMedico}
                onChange={(e) => this.setValue("nombreMedico", e.target.value)}
                onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido Medico tratante</Form.Label>
              <Form.Control
                type="string"
                value={this.state.perfilUsuario.apellidoMedico}
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
              type="checkbox"
              value={this.state.perfilUsuario.visibilidad}
              onChange={(e) => this.setValue("visibilidad", e.target.value)}
              onBlur={(e) => this.setValue("categoriaPeso", this.calcula_peso())}
            />
            <br />
            <Form.Check
              label="Permite que sus datos de IMC y Categoria de peso sean visibles dentro de esta APP, pero no fuera de esta pagina"
              type="checkbox"
              value={this.state.perfilUsuario.alerta}
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
