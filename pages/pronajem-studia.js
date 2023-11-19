import React, { useState } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import ContactForm from "../components/form";

// Předpokládám, že obrázky jsou uloženy ve složce 'public/images'
const images = [
  {
    small: "/img/pronajem/durychova-pronajem-small9.jpeg",
    large: "/img/pronajem/durychova-pronajem9.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small1.jpeg",
    large: "/img/pronajem/durychova-pronajem1.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small2.jpeg",
    large: "/img/pronajem/durychova-pronajem2.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small3.jpeg",
    large: "/img/pronajem/durychova-pronajem3.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small4.jpeg",
    large: "/img/pronajem/durychova-pronajem4.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small5.jpeg",
    large: "/img/pronajem/durychova-pronajem5.jpeg",
  },

  {
    small: "/img/pronajem/durychova-pronajem-small10.jpeg",
    large: "/img/pronajem/durychova-pronajem10.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small11.jpeg",
    large: "/img/pronajem/durychova-pronajem11.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small12.jpeg",
    large: "/img/pronajem/durychova-pronajem12.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small13.jpeg",
    large: "/img/pronajem/durychova-pronajem13.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small14.jpeg",
    large: "/img/pronajem/durychova-pronajem14.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small15.jpeg",
    large: "/img/pronajem/durychova-pronajem15.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small7.jpeg",
    large: "/img/pronajem/durychova-pronajem7.jpeg",
  },
  {
    small: "/img/pronajem/durychova-pronajem-small8.jpeg",
    large: "/img/pronajem/durychova-pronajem8.jpeg",
  },
]; // Nahraďte cestami k vašim obrázkům
const StudioPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Container>
      {/* Nadpis a Popisek */}
      <Row className="my-4">
        <Col>
          <h1>Moderní studio pro konzultace v Liberci</h1>
          <p>
            Přijďte navštívit mé nově zrekonstruované studio v srdci Liberce,
            ideální pro firemní setkání a osobní konzultace.
          </p>
        </Col>
      </Row>

      <Row>
        {images.map((img, index) => (
          <Col md={4} key={index} className="mb-4">
            <img
              src={img.small}
              className="gallery-img-box"
              alt={`Studio image ${index + 1}`}
              onClick={() => setSelectedImg(img.large)}
            />
          </Col>
        ))}
      </Row>
      <Modal
        size="lg"
        show={selectedImg !== null}
        onHide={() => setSelectedImg(null)}
        centered
        dialogClassName="large-modal"
      >
        <Modal.Body>
          <img src={selectedImg} className="large-modal-img" alt="Selected" />
        </Modal.Body>
      </Modal>

      <Row className="my-4">
        <Col md={6} xs={12}>
          <p>
            Mé studio nabízí plně vybavenou konferenční místnost s moderní
            audiovizuální technikou, ideální pro prezentace a workshopy.
          </p>
          <h3>Pro konzultace ohledně designu mě neváhejte kontaktovat</h3>
        </Col>
        <Col md={6} xs={12} className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.0729089530064!2d15.063448162769866!3d50.77490565752958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47093777deae12ef%3A0xa98ab8b8536fdb97!2sDesignov%C3%BD%20byt%20v%20srdci%20Liberce!5e0!3m2!1scs!2scz!4v1699890535839!5m2!1scs!2scz"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>

      <ContactForm gdpr={true} />
    </Container>
  );
};

export default StudioPage;
