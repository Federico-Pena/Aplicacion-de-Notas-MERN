
import "./Navegacion.css"
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../Button/Button';

const link = {
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
}

const Navegacion = () => {
  const { loginWithPopup, logout, isLoading, isAuthenticated } = useAuth0();

  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='ul'>
          <img src="https://th.bing.com/th/id/R.b6cde81d1c489b0e20d85a6e06c5f8f9?rik=Hm5NlMU0Lxqi%2bw&pid=ImgRaw&r=0" alt="" />
          <li><Link  style={link} to={"/"}>Inicio</Link> </li>
          {isAuthenticated &&(
            <>
            <li><Link style={link} to={"/users"}>Usuarios</Link></li>
            <li><Button nombre={"Cerrar Sesion"} funcion={logout} /></li>
            </>
          )}
          {isLoading && ( <small>Cargando...</small>)}
          <li>{isAuthenticated ? "" : <Button  nombre={"Iniciar Sesion"} funcion={loginWithPopup} /> }</li>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}

export default Navegacion