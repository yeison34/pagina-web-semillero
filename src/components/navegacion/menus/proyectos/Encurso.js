import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";
import { useState, useEffect } from "react";
//imagenes steamaker
import steamaker1 from "../../../../img/proyectos/STEAM MAKER/foto1.jpg";
import steamaker2 from "../../../../img/proyectos/STEAM MAKER/foto2.jpeg";

//imagenes plants-gpt
import plantsgpt1 from "../../../../img/proyectos/PLANTS GPT/foto1.jpg";
import plantsgpt2 from "../../../../img/proyectos/PLANTS GPT/foto2.jpg";

//imagenes segujaz
import segujaz1 from "../../../../img/proyectos/SEGUJAZ/foto1.jpg";
import segujaz2 from "../../../../img/proyectos/SEGUJAZ/foto2.jpg";

//imagenes travelprov
import travelprov1 from "../../../../img/proyectos/TRAVELPROV/foto1.jpg";
import travelprov2 from "../../../../img/proyectos/TRAVELPROV/foto2.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import ModalDef from "../general/Generarlmodal.js";
function Encurso() {
  const [modalText, setModalText] = useState({
    titulo: "",
    body: "",
    imagen: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      width: "50%", // Ajusta el tamaño del contenido del modal según tus necesidades
      height: "70%", // Puedes ajustar también la altura si es necesario
      margin: "auto", // Centra el modal horizontalmente
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Ajusta la opacidad y el color del fondo del modal
    },
  };
  const abrirModal = (titulo, body, imagen) => {
    setModalText({ titulo, body, imagen });
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalText({ titulo: "", body: "", imagen: "" });
    setModalIsOpen(false);
  };
  return (
    <>
      {/*Primer proyecto Encurso */}

      <div className="container pt-5">
        <div class="title-area" style={{ textAlign: "center" }}>
          <h3>En Curso</h3>
          <div class="separator separator-success">✻</div>
        </div>
        <br></br>
        <br></br>
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={steamaker2}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={steamaker1}
                  style={{
                    marginBottom: "25%",
                    height: "300px",
                    width: "300px",
                  }}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              STEAM MAKER - Aula científica para el aprendizaje en tecnología,
              ciencia e innovación en estudiantes de grado decimo de la
              Institución Educativa Francisco de Paula Santander del municipio
              de Ospina.
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "STEAM MAKER",
                  "En muchos de los países desarrollados las políticas de ciencia tecnología e innovación son de vital importancia para formar ciudadanos capaces de enfrentarse con firmeza a este mundo de constante cambio y lograr de esta forma sostener en pie sus avances y desarrollo Intelectual, social, económico y tecnológico. De esta forma el impacto generado por los constantes cambios no será tan ofensivo y así los ciudadanos estarán dispuestos a enfrentarse a nuevos retos y desafíos de forma asertiva y responsable. " +
                    "En el departamento de Nariño Colombia se encuentra ubicado el municipio de Ospina. " +
                    "un municipio con grandes riquezas naturales, en la institución Educativa Francisco " +
                    "de Paula Santander de este municipio se ha identificado que los estudiantes tienen " +
                    "un escaso interés en temas relacionados con ciencia tecnología e innovación, Este " +
                    "problema ha causado el estancamiento del desarrollo tecnológico en el municipio, las " +
                    "capacidades para innovar son muy escazas, el bajo aprovechamiento de los recursos " +
                    "naturales que en este se encuentran se ven reflejados en el bajo crecimiento " +
                    "económico de la región, la concepción que se tienen acerca del ser un " +
                    "científico conlleva a una baja demanda de personas que se inclinen por esta " +
                    "profesión. Para solucionar esta situación en el municipio de Ospina se propone " +
                    "crear la propuesta STEAM MAKER- aula científica para el aprendizaje en tecnología, " +
                    "ciencia e innovación en los estudiantes de grado decimo de la institución educativa " +
                    "Francisco de Paula Santander con la intención de crear conciencia sobre la importancia " +
                    "de la ciencia en la comunidad, que los jóvenes tengan una nueva visión acerca de este " +
                    "tema a través de la metodología Ciencia tecnología ingeniería arte y matemáticas " +
                    "STEAM que trabaja problemas complejos desde las diferentes disciplinas brindándoles " +
                    "soluciones creativas e innovadoras con el aprovechamiento de las tecnologías.",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin Primer proyecto Encurso */}
      <br></br>
      <br></br>
      <br></br>
      {/*segundo proyecto Encurso */}
      <div class="separator separator-success">✻</div>
      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={plantsgpt1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={plantsgpt2}
                  style={{
                    marginBottom: "25%",
                    height: "300px",
                    width: "300px",
                  }}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              PLANTS GPT - Prototipo de aplicación con inteligencia artificial
              para la preservación de la identidad cultural de las comunidades
              Indígenas de Nariño en torno a la medicina naturista.
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "PLANTS GPT",
                  "egún los resultados del último Censo Nacional de Población y Vivienda CNPV, " +
                    "publicado por el DANE en el 2018, el total de la población indígena en el país es de 1’905.617 personas, lo " +
                    "cual representa el 4,4% del total de personas que habitan en la geografía nacional. Estos datos concluyen " +
                    "con que los grupos indígenas han aumentado 36% su población con respecto al censo anterior divulgado en " +
                    "el 2005. A pesar de esto, el informe étnico revela un preocupante desafío en cuanto a la pérdida de la identidad " +
                    "cultural indígena, por ejemplo, señala que el 35,3% de los indígenas no hablan el idioma nativo de su " +
                    "comunidad. Así mismo, el 30,7% recurrió a algún tipo de medicina alternativa para tratar sus problemas de " +
                    "salud. Los obstáculos para divulgar y preservar la identidad cultural indígena encuentran justificación en " +
                    "múltiples factores propios del panorama histórico y social de Colombia, entre los que se encuentran la " +
                    "violencia, la falta de infraestructura, la discriminación entre otros. En este contexto, las nuevas tecnologías " +
                    "ofrecen una atractiva solución, pues gracias a los sistemas de información modernos, se pueden compartir " +
                    "los conocimientos ancestrales de los pueblos indígenas de forma masiva y sencilla para el usuario. Este " +
                    "proyecto busca implementar un prototipo de aplicación apoyado en la inteligencia artificial que resguarde la " +
                    "identidad cultural indígena de Nariño en torno a la medicina naturista. ",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin segundo proyecto Encurso */}
      <br></br>
      <br></br>
      <br></br>
      {/*tercer proyecto Encurso */}
      <div class="separator separator-success">✻</div>
      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={segujaz1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute "
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={segujaz2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4 className="mb-4" style={{ textAlign: "justify" }}>
              SEGUJAZ: Propuesta TIC enfocada a los problemas de seguridad
              física presentados en la Universidad de Nariño sede Ipiales
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "SEGUJAZ",
                  "La presente investigación tiene como objetivo principal la realización de un estado del arte en el cual se examinarán y recopilarán los " +
                    "diversos factores de riesgo relacionados con la seguridad física, tal como han sido documentados en la literatura académica y profesional." +
                    "Este análisis proporcionará una comprensión integral de los desafíos y amenazas que pueden afectar la integridad de los espacios y las " +
                    "personas en el entorno universitario de la sede Ipiales de la Universidad de Nariño. Para enriquecer aún más la comprensión de la " +
                    "problemática, se llevarán a cabo encuestas dirigidas a los estudiantes de la sede. Estas encuestas permitirán identificar y analizar de " +
                    "manera más precisa los factores de riesgo específicos que los estudiantes perciben en su entorno. La retroalimentación proporcionada por " +
                    "los estudiantes ofrece una perspectiva valiosa y contextualizada, enriqueciendo así el panorama general de la seguridad física en la " +
                    "universidad. En paralelo, se llevará a cabo un análisis comparativo de las Tecnologías de la Información y Comunicación (TIC) que podrían " +
                    "desempeñar un papel positivo en la mejora de la seguridad física en el campus. Estas TIC podrían abarcar desde sistemas de vigilancia " +
                    "avanzados hasta soluciones de alerta temprana y gestión de emergencias. Al contrastar estos avances tecnológicos con los factores de " +
                    "riesgo identificados, se podrán identificar oportunidades para fortalecer la seguridad y mitigar posibles amenazas. Como resultado final de " +
                    "esta investigación, se desarrollará un prototipo de software respaldado por TIC. Este prototipo estará diseñado específicamente para " +
                    "abordar el factor de riesgo de seguridad más relevante que haya sido identificado en la Universidad de Nariño sede Ipiales. Este enfoque " +
                    "práctico y orientado a la solución permitirá traducir los hallazgos teóricos y empíricos en una herramienta concreta que contribuya de " +
                    "manera efectiva a mejorar la seguridad física en el campus.",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin tercer proyecto Encurso */}
      <br></br>
      <br></br>
      <br></br>
      {/*cuarto proyecto Encurso */}
      <div class="separator separator-success">✻</div>
      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={travelprov1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={travelprov2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              TRAVELPROV: Plataforma web para la difusión turística del
              municipio de Providencia, Nariño mediante herramientas y
              estrategias de marketing digital
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "TRAVELPROV",
                  "El marketing digital y la implantación de una plataforma web son las herramientas esenciales las cuales se utilizará para la promoción turística y el cuidado ambiental en el municipio de Providencia. Es una idea capaz de causar cambios significativos para la región tanto a nivel ambiental como económico dado que el turismo es bastante escaso debido al poco reconocimiento del municipio, lo que implica en cierto modo bajos ingresos por parte del sector urbano afectando principalmente a personas locales dueñas de negocios y establecimientos comerciales. El fin principal de llevar a cabo este proyecto es lograr contrarrestar la problemática planteada y a la vez sugerir practicas amables con el medio ambiente potenciando el turismo en la región." +
                    "Es poco común hablar de marketing digital y plataformas web que funcionen a " +
                    "favor del municipio de Providencia, esto significa que el método de trabajo y " +
                    "búsqueda de información será la investigación cuantitativa y descriptiva. Esta " +
                    "idea es de carácter innovador por tal razón habrá muchas cosas por descubrir" +
                    "utilizando y sacando el mayor provecho de lo que actualmente ofrece la tecnología," +
                    "pero siempre basándose en el marketing hacia el turismo tradicional con el fin " +
                    "principal de implantar todo lo obtenido en la plataforma web a realizar. Con el " +
                    "desarrollo de esta idea, el municipio de Providencia podría llegar a convertirse " +
                    "en un centro bien conocido de recreación y atracción para visitantes ofreciendo " +
                    "sitios adecuados para vivir una gran aventura y compartir un rato agradable con " +
                    "la familia o pareja, además de que todo esto sería de gran beneficio para la " +
                    "población local ayudando a mejorar la economía del municipio basada en el turismo. ",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin cuarto proyecto Encurso */}
      {modalIsOpen && (
        <ModalDef
          titulo={modalText.titulo}
          body={modalText.body}
          imagen={modalText.imagen}
          onClose={cerrarModal}
          onOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default Encurso;
