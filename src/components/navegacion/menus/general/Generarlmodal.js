import React from "react";
import Modal from "react-modal";
import ingenieria from "../../../../img/general/ingeneriasoftware.jpg";
import ciencias from "../../../../img/general/ciencias.jpg";
import sistemas from "../../../../img/general/informacion.jpg";
import tecnologia from "../../../../img/general/tecnologia.jpg";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
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
const ModalDef = ({ titulo, body, imagen, onClose, onOpen }) => {
  console.log(imagen);
  var verImg = {
    display: "block",
  };
  var img = null;
  switch (imagen) {
    case "1":
      img = ingenieria;
      break;
    case "2":
      img = ciencias;
      break;
    case "3":
      img = sistemas;
      break;
    case "4":
      img = tecnologia;
      break;
    default:
      verImg = {
        display: "none",
      };
  }
  return (
    <Modal
      style={customStyles}
      isOpen={onOpen}
      onRequestClose={onClose}
      contentLabel="">
      <CardHeader>
        <div style={{ position: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontFamily: "Questrial, sans-serif",
            }}>
            {titulo}
          </div>
          <div
            style={{ position: "absolute", top: 0, right: 0, margin: "5px" }}>
            <p onClick={onClose} style={{ height: "10px", width: "10px" }}>
              X
            </p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={img}
              style={{ height: "200px", width: "200px", ...verImg }}
              alt="Imagen Modal"
            />
          </div>
          <br></br>
          <p
            style={{
              textAlign: "justify",
              fontFamily: "Questrial, sans-serif",
            }}>
            {body}
          </p>
        </div>
      </CardBody>
    </Modal>
  );
};

export default ModalDef;
