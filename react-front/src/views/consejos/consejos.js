import React from "react";
import { Container, Tab, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import "./consejos.css";

export default class Consejos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: "clicla aqui para ver los consejos",
    };
  }

  render() {
    return (
      <Container className="consejos">
        <header className="consejos-header">
          <h1>¿Cómo mantener o mejorar el peso?</h1>
          <h2>
            Elije tu categoría para obtener tus recomendaciones.
          </h2>

          <Tab.Container className="tapList">
            <Row>
              <ListGroup as="ul">
                <ListGroupItem as="li" action variant="info" href="#link1">
                  Si tu índice de masa corporal está por debajo de 18.5 ¡Ponte
                  pilas! tu peso es inferior al promedio
                </ListGroupItem>
                <ListGroupItem as="li" action variant="success" href="#link2">
                  Si el valor de tu índice de masa corporal está entre 18.5 y
                  24.9 ¡Felicidades! Tienes un peso ideal
                </ListGroupItem>
                <ListGroupItem as="li" action variant="warning" href="#link3">
                  Si tu índice de masa corporal está por encima de 25 hasta 29.9
                  ¡Cuidado! tu peso es superior al normal
                </ListGroupItem>
                <ListGroupItem as="li" action variant="danger" href="#link4">
                  Si tu índice de masa corporal es superior a 30, ¡Debes actuar
                  ya! lamentablemente tienes obesidad
                </ListGroupItem>
              </ListGroup>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <br></br>
                  <ul className="title">
                    Para subir de peso, sigue los siguentes consejos:
                  </ul>
                  <il>
                    Come con más frecuencia, porciones más pequeñas, que te
                    aporten todos los nutrientes que necesitas.
                  </il>
                  <br></br>
                  <il>
                    Aléjate de la comida chatarra y elige alimentos saludables,
                    que te aporten fuerza y vitalidad.
                  </il>
                  <br></br>
                  <il>
                    Bebe licuados y batidos de fruta, que te aportan nutrientes
                    y aumentan tu masa corporal.
                  </il>
                  <br></br>
                  <il>
                    Come frutos secos, mantequilla de mani, queso y aguacate.
                    Agrega aderezos a tus comidas.
                  </il>
                  <br></br>
                  <il>
                    Haz ejercicio de fortalecimiento muscular, como
                    levantamiento de pesas. Evita el cardio, te adelgazará más.
                  </il>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <br></br>
                  <ul className="title">
                    Tienes un peso ideal, pero no te descuides:
                  </ul>
                  <il>
                    Monitorear tu peso constantemente, puede ayudarte a
                    mantenerlo en el tiempo.
                  </il>
                  <br></br>
                  <il>
                    Dependiendo de tu actividad física, elige alimentos que te
                    aporten la cantidad de calorías que necesitas.
                  </il>
                  <br></br>
                  <il>
                    Bebe mucha agua para matener tu peso, evitar comer en exceso
                    e hidratar tu piel.
                  </il>
                  <br></br>
                  <il>
                    Adquiere hábitos para mantener tu peso saludable, centrate
                    en la salud y no en la belleza física.
                  </il>
                  <br></br>
                  <il>
                    No te olvides de hacer ejercicio regularmente y de dormir lo
                    suficiente para mantener tu salud.
                  </il>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <br></br>
                  <ul className="title">
                    Tienes sobrepeso, pero estás a tiempo. Sigue estos consejos para bajar de peso:
                  </ul>
                  <il>
                    Evita combinar harinas en el día y menos en el mismo plato. Asegúrate de que tus platos sean balanceados.
                  </il>
                  <br></br>
                  <il>
                    Come más ensaladas y frutas, reduce las harinas y olvídate de la azúcar, al menos por un tiempo.
                  </il>
                  <br></br>
                  <il>
                  Evita los refrescos industriales y el alcohol al máximo, ya que estos contienen mucha azúcar.
                  </il>
                  <br></br>
                  <il>
                    Reduce la cena y come dos horas antes de dormir. Yogurt griego, galletas integrales o fruta es suficiente.
                  </il>
                  <br></br>
                  <il>
                  Realiza ejercicio cardiovascular que te haga sudar mucho para eliminar grasa acumulada en el cuerpo.
                  </il>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <br></br>
                  <ul className="title">
                    No lo tomes a mal, pero tienes obesidad. Vamos a solucionarlo:
                  </ul>
                  <il>
                    Pídele a tu nutricionista una dieta relámpago. Está demostrado que ayudan a bajar peso rápidamente.
                  </il>
                  <br></br>
                  <il>
                    Elimina por completo el azucar de tu vida. Si lo necesitas, utiliza miel o Stevia, pero en pocas cantidades.
                  </il>
                  <br></br>
                  <il>
                    Bebe al menos un litro de agua al día. Un vaso de agua caliente en las mañanas, te ayudará a quemar grasa.
                  </il>
                  <br></br>
                  <il>
                    Controla tus antojos, bebe agua en vez de gaseosa y come frutas antes que dulces. Entrena tu mente.
                  </il>
                  <br></br>
                  <il>
                    Suda mucho haciendo ejercicio cardivascular, llega al límite. Complementa con ejercicios de tonificación.
                  </il>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container><br></br>
        </header>
      </Container>
    );
  }
}
