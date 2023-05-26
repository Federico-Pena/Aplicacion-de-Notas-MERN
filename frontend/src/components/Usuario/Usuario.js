import React from 'react'
import "./Usuario.css" 
import { Button } from "../Button/Button"


export const Usuario = ({id,foto, nombre, email, fecha, fetchNotas}) => {
  return (
      <div className='usuario'>
        <p className='hidden'>{id}</p>
        <img src={foto} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{email}</p>
        <p>{fecha}</p>
        <Button key={Date.now()} nombre={"Ver Notas"} funcion={(e)=>fetchNotas(e)}/>
      </div>
  )
}
