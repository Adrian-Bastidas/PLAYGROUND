import React from 'react'
import { useState, useEffect } from "react"

const Clock = () => {
  const [time, setTime] = useState(new Date()); //Configura el estado inicial

  useEffect(() => { //Ayuda a configurar y limpiar el temporizador para usarlo en tiempo real
      const timerID = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timerID);
  },[]);

  const tiempos={ //Saca los tiempos de horas, minutos y segundos
      hora:time.getHours(),
      minuto:time.getMinutes(),
      segundo:time.getSeconds()
  }
  const manecillas={ //Saca los grados que debe moverse la manecilla dependiendo de el tiempo
      horero:(tiempos.hora / 12) * 360,
      minutero:(tiempos.minuto / 60) * 360,
      segundero:(tiempos.segundo / 60) * 360
  }
  return (
    <div className='reloj'>
      <div className="clock">
          <div className="hand hour" data-hour-hand style={{ transform: `rotate(${manecillas.horero}deg)` }}></div>
          <div className="hand minute" data-minute-hand style={{ transform: `rotate(${manecillas.minutero}deg)` }}></div>
          <div className="hand second" data-second-hand style={{ transform: `rotate(${manecillas.segundero}deg)` }}></div>
          <div className="number number1">1</div>
          <div className="number number2">2</div>
          <div className="number number3">3</div>
          <div className="number number4">4</div>
          <div className="number number5">5</div>
          <div className="number number6">6</div>
          <div className="number number7">7</div>
          <div className="number number8">8</div>
          <div className="number number9">9</div>
          <div className="number number10">10</div>
          <div className="number number11">11</div>
          <div className="number number12">12</div>
      </div>
      </div>
  )
}

export default Clock