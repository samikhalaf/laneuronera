import React from "react";
import { Link } from "react-router-dom";
import "../../../index.scss";
import Logo from "../../../assets/img/logo-malo.jpg";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <div>
        <Link exact="true" to="/">
          <img className="nav-logo" src={Logo} alt="la neuronera" />
        </Link>
      </div>

      <div className="">
        <Link className="nav-link" to="/about">
          Nosotrxs
        </Link>

        <Link className="nav-link" to="/contact">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
