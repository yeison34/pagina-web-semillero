import React from "react";
import Carousel from "./carousel/Carousel";
import Propuesta from "./navegacion/menus/proyectos/Propuesta";
import Encurso from "./navegacion/menus/proyectos/Encurso";
import Finalizado from "./navegacion/menus/proyectos/Finalizado";
import Publicaciones from "./navegacion/menus/participaciones/Publicaciones";
import Coordinacion from "./navegacion/menus/equipo/Coordinacion";
import Participantes from "./navegacion/menus/equipo/Participantes";
import Presentacion from "./navegacion/menus/nosotros/Presentacion";
import Lineasinvestigacion from "./navegacion/menus/nosotros/Lineasinvestigacion";
import Eventos from "./navegacion/menus/participaciones/Eventos";
function ContenidoPrincipal() {
  return (
    <>
      <Carousel></Carousel>
      <br></br>
      <br></br>

      <Presentacion></Presentacion>

      <Lineasinvestigacion></Lineasinvestigacion>
      <div class="title-area" style={{ textAlign: "center" }}>
        <h2>Proyectos</h2>
        <div class="separator separator-success">✻</div>
      </div>
      <Propuesta></Propuesta>
      <Encurso></Encurso>
      <Finalizado></Finalizado>
      <div class="title-area" style={{ textAlign: "center" }}>
        <h2>Participaciones</h2>
        <div class="separator separator-success">✻</div>
      </div>
      <br></br>
      <Eventos></Eventos>
      <Publicaciones></Publicaciones>
      <Coordinacion></Coordinacion>
      <br></br>
      <br></br>
      <Participantes></Participantes>
    </>
  );
}

export default ContenidoPrincipal;
