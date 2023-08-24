import React from "react";
import '../styles/Boton.css'

const BotonIgual = (props) => {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

    return (
        <div 
          className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
          onClick={()=>props.calcularResultado}>
          {props.children}
        </div>
    );
}

export default BotonIgual