import React from "react";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../grid/grid";
import ConfirmationPrompts from "../../components/prompts/confirmation";
import { request } from "../../components/helper/helper";
import Loading from "../../components/Loading/Loading";
import MessagePrompt from "../../components/prompts/message";

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "mail",
    text: "Mail",
  },
  {
    dataField: "fecha",
    text: "Fecha",
  },
  {
    dataField: "sistole",
    text: "Sistole",
  },
  {
    dataField: "diastole",
    text: "Disatole",
  },
  {
    dataField: "pulso",
    text: "Pulso",
  },
  {
    dataField: "presion",
    text: "Presion",
  },
];

export default class TomaPresionConsulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idTomaPresion: null,
      confirmation: {
        title: "Eliminar registro",
        text: "Desea eliminar registro de toma de presion?",
        show: false,
      },
      message: {
          text:'',
          show: false,
      },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  //componentDidMount() { }

  onClickEditButton(row) {
    this.props.setIdTomaPresion(row._id);
    this.props.changeTab("Actualiza");
  }

  onClickDeleteButton(row) {
    this.setState({
      idTomaPresion: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
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
      this.eliminarRegistro()
    );
  }

  eliminarRegistro() {
      this.setState({ loading: true });
    request
      .delete(`/tomaPresion/${this.state.idTomaPresion}`)
      .then((response) => {
          this.setState({
              loading: false,
              message: {
                  text: response.data.msg,
                  show: true,
              },
          });
          if (response.data.exito) window.location.reLoadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reLoadPage(){
      setTimeout(() => {
          window.location.reload();
      }, 2500);
  }

  render() {
    return (
      <Container id="tomaPresion-container">
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
            text={this.state.message.text}
            show={this.state.message.show}
            duration={2500}
            onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h5> Consulta tus Registros de Toma de presion </h5>
        </Row>
        <Row id="tomaPresion-consulta-container">
          <DataGrid
            url="/tomaPresion"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
