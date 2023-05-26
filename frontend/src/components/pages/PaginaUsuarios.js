import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { Usuario } from "../Usuario/Usuario";
import { Nota } from "../Nota/Nota";

const PaginaUsuarios = () => {
  const [usuarios, setUsurarios] = useState([]);
  const [userID, setUserID] = useState("");
  const [cargando, setCargando] = useState(false);
  const [userNotas, setUserNotas] = useState([]);
  const [usuarioClick, setUsuarioClick] = useState("");

  const { isLoading, data } = useFetch("http://localhost:4000/usuarios");

  useEffect(() => {
    setUsurarios(data);
  }, [isLoading]);

  async function VerNotas(e) {
    let id = e.target.parentNode.children[0].textContent;
    setUserID(id);
    setCargando(true);
    await fetch(`http://localhost:4000/usuarios/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        setUserNotas(data.notas);
        setUsuarioClick(data);
      })
      .finally(() => setCargando(false));
  }

  return (
    <>
      <div>PaginaUsuarios</div>
      {cargando ? <h3>Cargando...</h3> : ""}
      {usuarios?.map((usuario, index) => {
        return (
          <Usuario
            key={index}
            id={usuario._id}
            nombre={usuario.nombre}
            foto={
              usuario.foto ||
              "https://th.bing.com/th/id/R.b6cde81d1c489b0e20d85a6e06c5f8f9?rik=Hm5NlMU0Lxqi%2bw&pid=ImgRaw&r=0"
            }
            email={usuario.email}
            fecha={usuario.creacion.split("T", 1)}
            fetchNotas={VerNotas}
          />
        );
      })}

      {userNotas?.map((nota, index) => {
        return (
          <Nota
            key={index}
            idUser={usuarioClick._id}
            nombreAlt={usuarioClick.nombre}
            fecha={"Creado: " + nota.fecha.split("T").pop().split(".").shift()}
            autor={nota.autor}
            titulo={nota.titulo}
            contenido={nota.contenido}
            foto={
              usuarioClick.foto ||
              "https://th.bing.com/th/id/R.b6cde81d1c489b0e20d85a6e06c5f8f9?rik=Hm5NlMU0Lxqi%2bw&pid=ImgRaw&r=0"
            }
            meGusta={nota.meGusta}
            idNota={nota._id}
          />
        );
      })}
    </>
  );
};

export default PaginaUsuarios;
