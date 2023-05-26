import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import "./Nota.css";

export const Nota = ({
  titulo,
  contenido,
  foto,
  autor,
  nombreAlt,
  fecha,
  meGusta,
  idNota,
  idUser,
}) => {


const [meGustaCount, setMeGustaCount] = useState(0)

  const likeUp = async (e) => {
    let numMeGusta =
    parseInt( e.target.parentNode.children[5].textContent
      .split(" ")
      .pop());
      setMeGustaCount(numMeGusta+1)
      let meGusta = {
        meGusta: meGustaCount
      } 
    await fetch(`http://localhost:4000/usuarios/notas/${idUser}/${idNota}`, {
      method: "PUT", // or 'PUT'
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(meGusta), // data can be `string` or {object}!  
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log(meGusta);
       /*  setMeGustaCount(response[0].meGusta + meGustaCount); */
      });
  };





  return (
    <div className="nota">
      <img src={foto} alt={nombreAlt} />
      <strong>{autor}</strong>
      <p>{titulo}</p>
      <small>{contenido}</small>
      <small>{fecha}</small>
      <p>Like {meGustaCount}</p>
      <Button funcion={(e) => likeUp(e)} nombre={"Like"} />
    </div>
  );
};
