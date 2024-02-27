import React, { useState } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import ContactForm from "../components/form";
import Head from "next/head";


// Předpokládám, že obrázky jsou uloženy ve složce 'public/images'
const images = [
  {
    large: "img/pronajem/durychova-pronajem-newl0.jpeg",
    small: "img/pronajem/durychova-pronajem-newl0.jpeg",
  },

  {
    large: "img/durychova/durychova-large5.webp",
    small: "img/durychova/durychova-large5.webp",
  },
  {
    large: "img/durychova/durychova-large6.webp",
    small: "img/durychova/durychova-large6.webp",
  },
  {
    large: "img/durychova/durychova-large7.webp",
    small: "img/durychova/durychova-large7.webp",
  },
  {
    large: "img/durychova/durychova-large8.webp",
    small: "img/durychova/durychova-large8.webp",
  },
  {
    large: "img/durychova/durychova-large9.webp",
    small: "img/durychova/durychova-large9.webp",
  },
  {
    large: "img/durychova/durychova-large10.webp",
    small: "img/durychova/durychova-large10.webp",
  },
  {
    large: "img/pronajem/durychova-pronajem-newl1.jpeg",
    small: "img/pronajem/durychova-pronajem-newl1.jpeg",
  },
  {
    large: "img/durychova/durychova-large11.webp",
    small: "img/durychova/durychova-large11.webp",
  },
  {
    large: "img/pronajem/durychova-pronajem-newl2.jpeg",
    small: "img/pronajem/durychova-pronajem-newl2.jpeg",
  },
  {
    large: "img/durychova/durychova-large1.webp",
    small: "img/durychova/durychova-large1.webp",
  },
  {
    large: "img/durychova/durychova-large0.webp",
    small: "img/durychova/durychova-large0.webp",
  },
]; // Nahraďte cestami k vašim obrázkům
const DesignovyByt = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <><Head>
    <title>Lenka Design | Pronájem designového bytu v Liberci</title>
    <meta name="description" content="Hledáte moderní prostor pro vaše firemní setkání nebo konzultace v centru Liberce? Naše studio nabízí ideální řešení s kompletním vybavením a výhodnou polohou." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Container>
      <Row className="my-4">
        <Col xs={12}>
          <h1>
            Designový apartmá v srdci Liberce, možnost krátkodobého pronájmu
          </h1>
          <p>
            Byt je výjimečný svým moderním designem a skvělou polohou v srdci
            Liberce. Po celkové rekonstrukci, kterou provedla zkušená
            designérka, je vybaven nejnovější technologií a moderním, pohodlným
            nábytkem. Díky blízkosti kulturních památek, restaurací a obchodů je
            toto ubytování ideální pro hosty, kteří hledají moderní a pohodlné
            ubytování v centru města a jedinečný zážitek v Liberci.
          </p>
        </Col>
      </Row>

      <Row>
        {images.map((img, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <img
              src={img.small}
              className="gallery-img-box"
              alt={`Byt k pronájmu v Liberci ${index + 1}`}
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
          <h2>Popis ubytování</h2>
          <p>
            Tento skvěle umístěném bytě, který se nachází v centru Liberce, jen
            pár minut chůze od Libereckého náměstí a radnice. Okolí bytu nabízí
            nekonečné možnosti pro kulturní zážitky, jako jsou divadla, galerie
            a muzea, která jsou vzdálená pouhých pět minut chůze. V blízkosti
            bytu je kavárna a několik restaurací. Jen přes ulici od bytu je
            menší obchodní centrum s samoobsluhou Albert a restaurací s rychlým
            občerstvením. Jen 2min chůze se nachází plavecký bazén, který nabízí
            ideální relaxaci po náročném dni plném zábavy či práce.
          </p>

          <p>
            Tento byt je navržen s ohledem na luxus a pohodlí hostů přímo
            interiérovou designérkou, která byt vlastní. Je ideální pro relaxaci
            nebo pracovní účely. Případně je možné i po domluvě s majitelkou,
            zapůjčit přilehlou kancelář pro setkání firemních partnerů.
          </p>

          <p>
            Obývací pokoj je vybavený italským nábytkem, který nabízí komfortní
            posezení před velkou 60" ultra HD TV s přístupem na Netflix. Z
            obývacího prostoru můžete přímo vstoupit na velkou zahradní terasu,
            kde si můžete užít klidné večery s výhledem do zeleně.
          </p>

          <p>
            Kuchyň je plně vybavená moderními spotřebiči, nechybí myčka,
            mikrovlnná trouba, el. trouba, indukční sporák, velká lednice a
            kávovar. V koupelně najdete vanu, sprchu a oddělené WC pro vaše
            pohodlí. Šatna nabízí dostatek úložného prostoru pro vaše věci. A je
            oddělena krásnými prosklenými dveřmi od obývacího prostoru.
          </p>

          <p>
            Ložnice jsou vybaveny kvalitními, novými matracemi a designovými
            postelemi z Itálie, takže si zde můžete užít skvělou a klidnou noc.
            V ložnicích nechybí úložné prostory a v jedné najdete pracovní stůl
            a výstup na terasu.
          </p>
          <p>
            Parkování před domem je zdarma a výhodou tohoto bytu je také
            podlahové vytápění v celém bytě, což vám zajistí příjemnou teplotu i
            v zimě.
          </p>

          <p>
            Tento byt je ideální pro pracovní cesty nebo pro ty, kteří hledají
            luxusní a pohodlné ubytování v srdci Liberce. Těšíme se na vaši
            návštěvu!
          </p>
          <h3>Pro více informací a pronájem mě neváhejte kontaktovat</h3>
        </Col>
        <Col md={6} xs={12} className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.046698403348!2d15.058523891539748!3d50.77470789857304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47093777deae12ef%3A0xa98ab8b8536fdb97!2sDesignov%C3%BD%20byt%20v%20srdci%20Liberce!5e0!3m2!1scs!2scz!4v1700391477900!5m2!1scs!2scz"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>

      <ContactForm gdpr={true} />
    </Container>
    </>
  );
};

export default DesignovyByt;
