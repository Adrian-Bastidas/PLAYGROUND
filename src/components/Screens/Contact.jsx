import React from 'react'

const Contact = () => {
  return (
    <div>
      <p className='titulo-contact'>Ready to connect with me?</p>
      <div>
      <div className='formulario'>
        <div className='contenido-fomulario'>
          <form>
            <p className='subtitulo-contact'>Let`s Connect</p>
            <div className='nombres'>
            <input className='nombre1'type="text" placeholder="First Name" id="nombre"/>
            <input className='nombre2'type="text" placeholder="Last name" id="apellido"/>
            </div>
            <input className='normales'type="text" placeholder="Email address" id="correo"/>
            <input className='area' placeholder="Enter Text here" id="mensaje"/>
            <button className='boton-formulario'>Get in Touch</button>
          </form>
        </div>
      </div>
      <br/>
      <br/>
      </div>
    </div>
  )
}

export default Contact