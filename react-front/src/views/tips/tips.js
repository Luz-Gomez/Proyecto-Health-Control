import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "./tips.css";

export default class Tips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="tips-container">
        <h1>¿Cómo mejorar tu presión arterial?</h1>
        <br></br>
        <h4>
          {" "}
          En Health Control te ayudamos a registrar y llevar el control de tus
          tomas de presión arterial, para que tanto tu médico como tú puedan
          monitorear este aspecto importante de tu salud. Con estos registros,
          se pueden observar los patrones de tensión según tu estilo de vida y
          analizar qué factores pueden estar desencadenando esos picos o bajones
          de presión. ¿Tienes un problema con tu presión arterial? Estos
          consejos te ayudarán de inmediato:
        </h4>
        <br></br>

        <ListGroup>
          <ListGroup.Item variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Mantén un peso saludable.</div>
              El aumento en la presión arterial, está directamente relacionado
              con el aumento de peso. Bajar de peso es uno de los cambios en tu
              estilo de vida que ayudarán a reducir la tensión alta. Puedes
              reducir la presión arterial cerca de 1 milímetro de mercurio (mm
              Hg) por cada kilogramo de peso que bajes.
            </div>
          </ListGroup.Item>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Vigila el tamaño de tu cintura.</div>
              Tener mucha grasa en la cintura también es un factor de riesgo.
              Tanto hombres como mujeres deben monitorear el tamaño de su
              cintura. Para los hombres, la cintura no debe superar los 102
              centímetros (40 pulgadas) y para las mujeres no debe pasarse de 89
              centímetros (35 pulgadas).
            </div>
          </ListGroupItem>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                Monitorea tus registros de toma de presión.
              </div>
              Asegúrate de tomar el control de tu salud, registra tu presión arterial a diario y consulta a tu médico cada vez que notes un
              cambio abrupto en tus niveles de tensión. Nota qué factores
              pudieron ocasionarlo o que hábitos te están ayudando a mantenerte
              estable. En Health control, puedes llevar un registro detallado
              con la fecha y hora exacta, para que no se te pase nada. Y lo
              mejor! puedes compartirlo con tu médico para tomar cartas en el asunto.
            </div>
          </ListGroupItem>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Haz ejercicio regularmente.</div>
              Hacer ejercicio regular al menos 30 minutos por día, puede
              ayudarte a reducir entre 5 y 8 mm Hg de presión arterial. Los
              ejercicios aeróbicos como caminar o correr, son los más adecuados,
              pero también puedes ejercitar tus músculos, al menos dos veces por
              semana. La constancia es la clave.
            </div>
          </ListGroupItem>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Lleva una dieta saludable.</div>
              Llevar una dieta que incluya gran cantidad de cereales integrales,
              frutas y verduras, productos lácteos con bajo contenido de grasa y
              en general reducir el colesterol, te permitirá reducir hasta 11 mm
              Hg de presión arterial. Esta dieta se le conoce como enfoque
              dietético para detener la hipertensión.
            </div>
          </ListGroupItem>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Reduce el consumo de sodio y sal.</div>
              Con sólo reducir un poco el consumo de socio puedes disminuir entre
              5 y 6 mm Hg de presión arterial. La cantidad ideal para la mayoría
              de los adultos es 1500 mg por día. Lee las etiquetas de los
              productos, consume menos alimentos procesados y reduce la sal. Ve
              reduciendo el sodio gradualmente.
            </div>
          </ListGroupItem>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                Reduce el consumo de alcohol, tabaco y cafeína.
              </div>
              Beber alcohol aumenta la presión arterial y también reduce los
              efectos de los medicamentos que la controlan. Por el contraio, fumar puede
              reducir la tensión y producir riesgo de enfermedades cardíacas. Por otra
              parte, la cafeína solo afecta a algunas personas. Si quieres saber si
              eres de esas personas, tómate la presión arterial 30 minutos
              después de tomar cafeína y si ha subido entre 5 a 10 mm Hg, debes
              evitarla y consultar a tu médico.
            </div>
          </ListGroupItem>
          <br></br>
          <ListGroupItem variant="warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Controla el estrés.</div>
              Aunque no hay pruebas de que el estrés produzca una aumento en la
              presión arterial, es bien sabido que el cuerpo produce una oleada
              de hormonas cuando estás en una situación estresante. Estas
              hormonas aumentan temporalmente tu presión arterial, hacen que tu
              corazón lata más rápido y que los vasos sanguíneos se estrechen.
              Así que el estrés es muy peligroso para las personas con tensión
              alta. Trata de controlarte en situaciones estresantes. Recuerda!
              Se puede acabar el mundo, tu siempre estarás tranquilo y
              sonriente. Sonreir puede anular el estrés de inmediato.
            </div>
          </ListGroupItem>
          <br></br>
        </ListGroup>
      </Container>
    );
  }
}
