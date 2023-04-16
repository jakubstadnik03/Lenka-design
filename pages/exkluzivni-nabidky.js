import React from "react";
import { Carousel, Image, Button, Container } from "react-bootstrap";
import Link from "next/link";
const exkluzivniNabidky = () => {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera1.jpeg"
              alt="First slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera2.jpeg"
              alt="Second slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera3.jpeg"
              alt="Third slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera5.jpeg"
              alt="Third slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera6.jpeg"
              alt="Third slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
        </Carousel>
        <Carousel.Caption style={{ postion: "absolute" }}>
          <h1 className="display-1">Italský nábytek Prianera</h1>
          <p className="fs-3">
            {" "}
            Nabízím vám exkluzivní nábytek z Itálie značky Prianera, z
            kvalitních materiálů
          </p>
          <Link href="#zjistit-vice">
            <button
              type="button"
              className="btn btn-outline-primary px-4 fs-4 text-light"
            >
              Zjistit více
            </button>
          </Link>
        </Carousel.Caption>
      </div>
      <div className="max-width d-flex mt-4" style={{ maxWidth: "1000px" }}>
        <div>
          <h2>Kvalitní italský nábytek možno vyzkoušet!</h2>
          <p>
            Řemeslný duch ve své nejčistší a nejvyšší podobě, který oživuje
            výrobu společnosti. Skutečný kód dokonalosti spojený s
            nezaměnitelným italským know-how, kterým se vyznačuje tvorba výrobků
            kolekce Prianera.
          </p>
          <p>
            Italský nábytek je možné si vyzkoušet a prohlédnout v mém vzorovém
            bytě v Liberci
          </p>
          <p>
            Podrobný katalog s veškerými podklady a fotografiemi je možno
            stáhnout a na vyzkoušení a ošahání materiálů mě můžete kontaktovat!
          </p>
          <Link href="img/prianera/katalog.pdf" target="_blank">
            <button type="button" className="btn btn-outline-primary">
              Stáhnout katalog
            </button>
          </Link>
          <Link href="/kontakt">
            <button type="button" className="btn btn-outline-primary ms-2">
              Kontaktovat
            </button>
          </Link>
        </div>
        <Link href="img/prianera/katalog.pdf">
          {" "}
          <img
            src="img/prianera/katalog.png"
            style={{ width: "250px" }}
            alt="prianera"
          />
        </Link>
      </div>
    </main>
  );
};

export default exkluzivniNabidky;
