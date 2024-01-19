import React from "react";
import Modal from "react-modal";
import ingenieria from "../../../../img/general/ingeneriasoftware.jpg";
import ciencias from "../../../../img/general/ciencias.jpg";
import sistemas from "../../../../img/general/informacion.jpg";
import tecnologia from "../../../../img/general/tecnologia.jpg";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import ImageGallery from "react-image-gallery";
//institucionales
import inst1 from "../../../../img/eventos/nacionales/1.jpg";
import inst2 from "../../../../img/eventos/nacionales/2.jpg";
import inst3 from "../../../../img/eventos/nacionales/3.jpg";
import inst4 from "../../../../img/eventos/nacionales/4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const customStyles = {
  content: {
    width: "50%", // Ajusta el tamaño del contenido del modal según tus necesidades
    height: "85%", // Puedes ajustar también la altura si es necesario
    margin: "auto", // Centra el modal horizontalmente
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Ajusta la opacidad y el color del fondo del modal
  },
};
const EventosModel3 = ({ titulo, onClose, onOpen, imagen }) => {
  const images = [
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  ];
  var institucionales = [inst1, inst2, inst3, inst4];
  let departamentales = [];
  let nacionales = [];
  let regionales = [];

  //console.log(imagenes);
  return (
    <Modal
      style={customStyles}
      isOpen={onOpen}
      onRequestClose={onClose}
      contentLabel="">
      <Card>
        <CardHeader>
          <div style={{ position: "flex", justifyContent: "space-between" }}>
            <div>{titulo}</div>
            <div
              style={{ position: "absolute", top: 0, right: 0, margin: "5px" }}>
              <p onClick={onClose} style={{ height: "10px", width: "10px" }}>
                X
              </p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="box">
            <Carousel useKeyboardArrows={true}>
              {institucionales.map((URL, index) => (
                <div className="slide">
                  <img alt="sample_file" src={URL} key={index} />
                </div>
              ))}
            </Carousel>
          </div>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default EventosModel3;
