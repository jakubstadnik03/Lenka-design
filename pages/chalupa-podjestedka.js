import React, { useState } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import ContactForm from "../components/form";

// Předpokládám, že obrázky jsou uloženy ve složce 'public/images'
const images = [
  {
    small: "/img/pronajem/rozstani-pronajem-small1.jpeg",
    large: "/img/pronajem/rozstani-pronajem1.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small2.jpeg",
    large: "/img/pronajem/rozstani-pronajem2.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small3.jpeg",
    large: "/img/pronajem/rozstani-pronajem3.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small9.jpeg",
    large: "/img/pronajem/rozstani-pronajem9.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small7.jpeg",
    large: "/img/pronajem/rozstani-pronajem7.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small6.jpeg",
    large: "/img/pronajem/rozstani-pronajem6.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small5.jpeg",
    large: "/img/pronajem/rozstani-pronajem5.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small4.jpeg",
    large: "/img/pronajem/rozstani-pronajem4.jpg",
  },
  {
    small: "/img/pronajem/rozstani-pronajem-small8.jpeg",
    large: "/img/pronajem/rozstani-pronajem8.jpg",
  },
]; // Nahraďte cestami k vašim obrázkům
const ChalupaPodjestedka = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Chalupa Podještědka – Rozstání v Podještědí</h1>
          <p>
            Prožijte nezapomenutelný pobyt v Chalupě Podještědka, nedaleko
            golfového hřiště Ještěd a lanového parku Horka. Nově zrekonstruovaná
            a stylově zařízená chalupa v Podještědí nabízí ideální útočiště pro
            rodinnou rekreaci, firemní srazy nebo skupinové výlety. S kapacitou
            2 až 15 osob, pěti ložnicemi, saunou a mysliveckou stodolou s grilem
            a pípou, chalupa slibuje pohodlí a zábavu uprostřed malebné přírody.
          </p>
        </Col>
      </Row>

      <Row>
        {images.map((img, index) => (
          <Col md={4} key={index} className="mb-4">
            <img
              src={img.small}
              className="gallery-img-box"
              alt={`Chalupa podještědka ${index + 1}`}
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
          <h2>Popis ubytování</h2>
          <p>
            Naše chalupa je nově zrekonstruovaná, stylově a romanticky sladěná
            ve venkovském stylu s kachlovými kamny a saunou. Nejvíce lidé
            obdivují mysliveckou stodolu s vnitřním grilem, pecí a pípou se
            společenským posezením. Nabízíme ubytování pro 2 až 15 osob v 5
            ložnicích, ideální pro skupinovou, firemní či rodinnou rekreaci.
            Obklopena zahradou s ovocnými stromy a potokem, chalupa nabízí nejen
            soukromí a klid, ale i zábavu a sportovní vyžití.
          </p>
          <p>
            Nachází se nedaleko golfového hřiště a je oblíbená mezi golfisty a
            rodinami, kteří mohou trávit čas i v přilehlém lanovém parku Horka.
            Tato oblast je také vyhledávaná turisty, cyklisty i lyžaři.
          </p>
        </Col>
      </Row>

      <ContactForm gdpr={true} />
    </Container>
  );
};

export default ChalupaPodjestedka;