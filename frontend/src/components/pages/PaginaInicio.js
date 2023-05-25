import React, { useEffect, useState } from "react";

const PaginaInicio = () => {
  //////// Estados////////
  const [usuarios, setUsurarios] = useState([]);
  const [estadoDeLaPeticion, setEstadoDeLaPeticion] = useState(false);

  const urlServer = "https://aplicacion-de-notas-mern.vercel.app/"; //"https://aplicacion-de-notas-mern.vercel.app/"

  useEffect(() => {
    traerUsuarios();
  }, [estadoDeLaPeticion]);

  ///////  Funciones /////////

  const traerUsuarios = async () => {
    await fetch(`${urlServer || "http://localhost:4000/"}users`, {mode: "no-cors"} )
      .then((response) => response.json())
      .then((data) => {
        setUsurarios(data);
      })
      .finally(() => setEstadoDeLaPeticion(true));
  };

  return (
    <>
      {usuarios?.map((user) => {
        return (
          <div key={user._id}>
            <p>{user.nombre}</p>
            <p>{user.notas}</p>
            <p>{user.creacion}</p>
          </div>
        );
      })}
    </>
  );
};

export default PaginaInicio;
