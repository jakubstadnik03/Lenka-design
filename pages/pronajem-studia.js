import React, { useState } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import ContactForm from "../components/form";

// Předpokládám, že obrázky jsou uloženy ve složce 'public/images'
const images = [
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
    small: "/img/pronajem/durychova-pronajem-small6.jpeg",
    large: "/img/pronajem/durychova-pronajem6.jpeg",
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
          <h1>Moderní Studio pro Konzultace v Liberci</h1>
          <p>
            Přijďte navštívit naše nově zrekonstruované studio v srdci Liberce,
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
        <Col>
          <h2>Detailní Popis Místností</h2>
          <p>
            Naše studio nabízí plně vybavenou konferenční místnost s moderní
            audiovizuální technikou, ideální pro prezentace a workshopy. Máme
            také útulný odpočinkový prostor pro neformální schůzky a relaxaci.
          </p>
        </Col>
      </Row>

      <ContactForm gdpr={true} />
    </Container>
  );
};

export default StudioPage;
