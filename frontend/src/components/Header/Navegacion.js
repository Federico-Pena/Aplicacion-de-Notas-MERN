import React from 'react'
import "./Navegacion.css"
import { Outlet, Link } from "react-router-dom";

const link = {
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
}

const Navegacion = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='ul'>
          <img src="https://cdn-icons-png.flaticon.com/128/6711/6711178.png" alt="" />
          <li><button>Login</button></li>
          <li><button>Logout</button></li>
          <li><Link style={link} to={"/"}>Inicio</Link> </li>
          <li><Link style={link} to={"/usuarios"}>Usuarios</Link></li>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}

export default Navegacion