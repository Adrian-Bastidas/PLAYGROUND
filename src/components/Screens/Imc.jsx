import React, { useState } from 'react';


const Imc = (props) => {
   // Declaramos dos estados para almacenar el peso y la talla ingresados por el usuario
   const [weight, setWeight] = useState(70);
   const [height, setHeight] = useState(170);
 
   // Creamos una función para calcular el IMC a partir del peso y la talla
   const calculateImc = () => {
     return weight / (height / 100) ** 2;
   }

   const clasificacion=()=>{
    if(calculateImc()<props.datos.bajoPeso[0]){
        return <p className='resultado-texto'style={{color:'#0094de'}}>{props.datos.bajoPeso[1]}</p> 
    }
    if(calculateImc()>=props.datos.adecuado[0] && calculateImc()<=props.datos.adecuado[1]){
        return <p className='resultado-texto'style={{color:'#6acdff'}}>{props.datos.adecuado[2]}</p>
    }
    if(calculateImc()>=props.datos.sobrepeso[0] && calculateImc()<=props.datos.sobrepeso[1]){
        return <p className='resultado-texto'style={{color:'#00a234'}}>{props.datos.sobrepeso[2]}</p>
    }
    if(calculateImc()>=props.datos.obesidadG1[0] && calculateImc()<=props.datos.obesidadG1[1]){
        return <p className='resultado-texto'style={{color:'#f3ff00'}}>{props.datos.obesidadG1[2]}</p>
    }
    if(calculateImc()>=props.datos.obesidadG2[0] && calculateImc()<=props.datos.obesidadG2[1]){
        return <p className='resultado-texto'style={{color:'#ffd500'}}>{props.datos.obesidadG2[2]}</p>
    }
    if(calculateImc()>props.datos.obesidadG3[0]){
        return  <p className='resultado-texto'style={{color:'#ff0000'}}>{props.datos.obesidadG3[1]}</p>
    }
   }
   return (
    <div className='container-IMC'>
     <div className="tarjeta-IMC">
       <h1>Calculadora de IMC</h1>
       <input className='rango1'
         type="range"
         value={weight}
         onChange={e => setWeight(e.target.value)}
         min={props.datos.minimokg}
         max={props.datos.maximokg}
       />
      <label className='indicadores'>Peso: {weight} kg</label>
      <br/>
       <input className='rango2'
         type="range"
         value={height}
         onChange={e => setHeight(e.target.value)}
         min={props.datos.minimocm}
         max={props.datos.maximocm}
       />
       <label className='indicadores'>Talla: {height} cm</label>
       <br/>
       <p className='resultado-numero'>{calculateImc().toFixed(2)}</p>
       {clasificacion()}
     </div>
     <br/>
     </div>
   );
}

export default Imc