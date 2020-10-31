import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">la neuronera. (*)</Link>
      <Link to="/about">Nosotrxs</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
}
