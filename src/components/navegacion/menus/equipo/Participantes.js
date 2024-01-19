import React, { useEffect } from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";
import "../../../../css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "owl.carousel";
import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";
import { Link } from "react-router-dom";
//semilleristas
import Edgar from "../../../../img/semilleristas/edgareduardo.jpg";
import Mariaalejandra from "../../../../img/semilleristas/mariaalejandra.jpg";
import Jhon from "../../../../img/semilleristas/jhonjairo.jpg";
import Daniela from "../../../../img/semilleristas/danielajazmin.jpg";
import Luis from "../../../../img/semilleristas/luis.jpg";
import Yasson from "../../../../img/semilleristas/yasson.jpg";
import Meliza from "../../../../img/semilleristas/meliza.jpg";
import Silvia from "../../../../img/semilleristas/silvia.jpg";
import milena from "../../../../img/semilleristas/foto.jpg";
import ingrid from "../../../../img/semilleristas/web2.jpg";
import udenar from "../../../../img/general/udenar.gif";
import yuli from "../../../../img/semilleristas/yuli.jpg";
import caipe from "../../../../img/semilleristas/estefania.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";

function Participantes() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="wow fadeIn" data-wow-delay=".3s">
        <div
          style={{
            background: "gray",
            position: "relative",
            minHeight: "30%",
            height: "550px",
            overflow: "hidden",
          }}>
          <img
            src={udenar}
            style={{
              opacity: "0.5",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}></img>
          <div
            style={{
              position: "absolute",
              top: "2%",
              right: "20%",
              bottom: "0",
              left: "20%",
              padding: "auto",
            }}>
            <div class="title-area" style={{ textAlign: "center" }}>
              <h2>Semilleristas</h2>
              <div class="separator separator-success">✻</div>
            </div>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px">
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Edgar}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Edgar Eduardo Chaux Flóres</h5>
                      <p class="small-text">
                        Estudiante - Ingenieria de Sistemas
                      </p>
                      <p class="small-text">Semestre 4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Mariaalejandra}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Maria Alejandra Ipiales Narvaez</h5>
                      <p class="small-text">
                        Estudiante - Ingenieria de Sistemas
                      </p>
                      <p class="small-text">Semestre 8</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Jhon}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Jhon Jairo Zambrano Yela</h5>
                      <p class="small-text">
                        Estudiante - Ingenieria de Sistemas
                      </p>
                      <p class="small-text">Semestre 10</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Daniela}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Daniela Jasmin Toro Dominguez</h5>
                      <p class="small-text">
                        Estudiante - Ingenieria de Sistemas
                      </p>
                      <p class="small-text">Semestre 10</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Luis}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Luis Carlos Rosero Taimbud</h5>
                      <p class="small-text">
                        Estudiante - Ingenieria de Sistemas
                      </p>
                      <p class="small-text">Semestre 10</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Yasson}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Yasson Brayan Perenguez Paz</h5>
                      <p class="small-text">
                        Estudiante - Ingenieria de Sistemas
                      </p>
                      <p class="small-text">Semestre 10</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Meliza}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Shirley Meliza Gómez</h5>
                      <p class="small-text">Egresada</p>
                      <p class="small-text">Ingeniera de Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={milena}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Nancy Milena Cuastumal Quenguan</h5>
                      <p class="small-text">Egresada</p>
                      <p class="small-text">Ingeniera de Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={ingrid}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Ingrid Catheryn Cabrera</h5>
                      <p class="small-text">Egresada</p>
                      <p class="small-text">Ingeniera de Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={Silvia}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Silvia Rocío Fuertes Paspur</h5>
                      <p class="small-text">Egresada</p>
                      <p class="small-text">Ingeniera de Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={yuli}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Yuli Esmeralda Sinza Díaz</h5>
                      <p class="small-text">Egresada</p>
                      <p class="small-text">Ingeniera de Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="card card-member"
                  style={{ height: "400px", width: "250px" }}>
                  <div class="content">
                    <div>
                      <img
                        src={caipe}
                        alt="..."
                        class="img-circle"
                        style={{ height: "200px", width: "150px" }}
                      />
                    </div>
                    <div class="description">
                      <br></br>
                      <h5 class="title">Jennyfer Estefanía Oliva Caipe</h5>
                      <p class="small-text">Egresada</p>
                      <p class="small-text">Ingeniera de Sistemas</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
export default Participantes;
