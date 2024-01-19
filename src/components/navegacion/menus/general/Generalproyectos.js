import React from "react";
import { Link } from "react-router-dom";
import Propuesta from "../proyectos/Propuesta";
import Encurso from "../proyectos/Encurso";
import Finalizado from "../proyectos/Finalizado";

function Generalproyectos() {
  return (
    <>
      <div class="container-fluid page-header py-5">
        <div class="container text-center py-5">
          <h6 class="display-2 text-white mb-4 animated slideInDown">
            Proyectos
          </h6>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                Proyectos
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Propuesta></Propuesta>
      <Encurso></Encurso>
      <Finalizado></Finalizado>
    </>
  );
}
export default Generalproyectos;
