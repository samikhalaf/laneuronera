import React from "react";
import { Link } from "react-router-dom";

export default function ArticleSelector() {

  return (
    <div className="articleSelector-container">
      <Link to="/mlm" >Mimando la Memoria</Link>
      <Link to="/scc">Sesiones de conocimiento compartido</Link>
      <Link to="/ssslqh">Seguimos sin saber lo que hacemos</Link>
      <Link to="/cra">Centro de Residencias Artísticas</Link>
      <Link to="/editorial">Editorial</Link>
    </div>
  );
}
