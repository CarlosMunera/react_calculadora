import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { evaluate } from 'mathjs'
import BotonIgual from './components/Boton';
 
function App() {

  const [input,setInput] = useState('')

  const agregarInput = (val) => {
    setInput(input+val)
  }

  const cacularResultado = () => {
    if (input){
      setInput(evaluate(input))
    }else{
      alert('Por ingrese una operacion para calcular resultado')
    }
    
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
          className='freecodecamp-logo'
        />
      </div>
      <div className='contenedor-calculadora'>
        <div className="fila">
          <Pantalla input={input}/>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <BotonIgual manejarClic={cacularResultado}>=</BotonIgual>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
