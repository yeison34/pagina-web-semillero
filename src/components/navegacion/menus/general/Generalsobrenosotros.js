import React from "react";
import { Link } from "react-router-dom";

import Presentacion from "../nosotros/Presentacion";
import Resenahistorica from "../nosotros/Resenahistorica";

function Generalsobrenosotros() {
  return (
    <>
      <div class="container-fluid page-header py-5">
        <div class="container text-center py-5">
          <h6 class="display-2 text-white mb-4 animated slideInDown">
            Sobre Nosotros
          </h6>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                Sobrenosotros
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Presentacion></Presentacion>
      <Resenahistorica></Resenahistorica>
    </>
  );
}
export default Generalsobrenosotros;
