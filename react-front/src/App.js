import logo from './logoHealthControl.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          La aplicación que te permitirá llevar un registro permanente de tus mediciones de <strong>presión arterial</strong>, para obtener un 
          documento detallado de tus niveles de tensión en diferentes momentos. De esta manera podrás analizar el comportamiento de tu presión 
          arterial y estar alerta sobre posibles factores de riesgo.
        </p><br></br>
        <p>
          Podrás ingresar tus datos de usuario, así como los de tu médico tratante, para que también pueda acceder a la información de tus mediciones, 
          si lo considera necesario. Adicionalmente y si lo deseas, puedes ingresar tus datos de peso y talla en cualquier momento, para calcular desde 
          tu perfil, tu índice de masa corporal. Pero no te preocupes, esta información no quedará registrada en el sistema, pero si te permitirá acceder 
          a nuestra página de consejos de salud, donde podremos indicarte que debes hacer en caso de que tu peso, no se encuentre en los valores ideales.
        </p>
        
        
      </header>
    </div>
  );
}

export default App;
