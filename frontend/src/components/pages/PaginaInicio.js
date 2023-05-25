import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

const PaginaInicio = () => {
  //////// Estados////////
  const [usuarios, setUsurarios] = useState([]);
  const [estadoDeLaPeticion, setEstadoDeLaPeticion] = useState(false);

  const urlServer = "https://aplicacion-de-notas-mern.vercel.app/usuarios"; //"https://aplicacion-de-notas-mern.vercel.app/usuarios" //http://localhost:4000/usuarios

  const { isLoading, data } = useFetch(urlServer);

console.log(isLoading, data);
  
  useEffect(() => {
    setUsurarios(data);
    setEstadoDeLaPeticion(true)
  }, [isLoading]);

  ///////  Funciones /////////

 /*  const traerUsuarios = async () => {
    await fetch("https://aplicacion-de-notas-mern.vercel.app/users")
      .then((response) => response.json())
      .then((data) => {
        setUsurarios(data);
      })
      .finally(() => setEstadoDeLaPeticion(true));
  }; */

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
