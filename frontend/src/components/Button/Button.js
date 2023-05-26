import React from 'react'

export const Button = ({nombre, funcion, clase}) => {
  return (
    <button className={clase}  onClick={funcion}>{nombre}</button>
  )
}
