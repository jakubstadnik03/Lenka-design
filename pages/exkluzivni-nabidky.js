import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Carousel, Image, Button, Container } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";


const exkluzivniNabidky = () => {
  const images = [
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera2.jpeg",
      thumbnail: "img/prianera/prianera2-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera3.jpeg",
      thumbnail: "img/prianera/prianera3-small.jpeg",
    },

    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera4.jpeg",
      thumbnail: "img/prianera/prianera4-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera5.jpeg",
      thumbnail: "img/prianera/prianera5-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera6.jpeg",
      thumbnail: "img/prianera/prianera6-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera7.jpeg",
      thumbnail: "img/prianera/prianera7-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera8.jpeg",
      thumbnail: "img/prianera/prianera8-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera9.jpeg",
      thumbnail: "img/prianera/prianera9-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera10.jpeg",
      thumbnail: "img/prianera/prianera10-small.jpeg",
    },

    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera12.jpeg",
      thumbnail: "img/prianera/prianera12-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera13.jpeg",
      thumbnail: "img/prianera/prianera13-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera14.jpeg",
      thumbnail: "img/prianera/prianera14-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera15.jpeg",
      thumbnail: "img/prianera/prianera15-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera16.jpeg",
      thumbnail: "img/prianera/prianera16-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera17.jpeg",
      thumbnail: "img/prianera/prianera17-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera18.jpeg",
      thumbnail: "img/prianera/prianera18-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera19.jpeg",
      thumbnail: "img/prianera/prianera19-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera20.jpeg",
      thumbnail: "img/prianera/prianera20-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera21.jpeg",
      thumbnail: "img/prianera/prianera21-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera22.jpeg",
      thumbnail: "img/prianera/prianera22-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera23.jpeg",
      thumbnail: "img/prianera/prianera23-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera24.jpeg",
      thumbnail: "img/prianera/prianera24-small.jpeg",
    },
    {
      alt: "Nábytek Prianera",
      image: "img/prianera/prianera25.jpeg",
      thumbnail: "img/prianera/prianera25-small.jpeg",
    },
  ];
  return (
    <main>
      <Head>
    <title>Exkluzivní nábytek Prianera | Lenka design</title>
    <meta name="description" content="Dopřejte si luxus s naším exkluzivním nábytkem Prianera. Navštivte náš showroom v Liberci a objevte, jak může správný nábytek proměnit celý váš domov." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <div style={{ position: "relative" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera2.jpeg"
              alt="First slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/prianera/prianera3.jpeg"
              alt="Second slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-contain"
              src="img/prianera/prianera4.jpeg"
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
      <div
        className="max-width d-flex mt-4 flex-column flex-md-row"
        style={{ maxWidth: "1000px" }}
      >
        <div>
          <h2 id="zjistit-vice">Kvalitní italský nábytek možno vyzkoušet!</h2>
          <p>
            Výrobky firmy Prianera jsou ručně vyrobené v dokonalé kvalitě, dle
            návrhů italských designérů. Mají nezaměnitelné italské know-how.
            Jsou velmi pohodlné a přinesou Vám do Vašeho domova luxus a pohodlí.
          </p>
          <p>
            Italský nábytek je možné si vyzkoušet a prohlédnout v mém vzorovém
            bytě v Liberci
          </p>
          <p>
            Podrobný katalog s veškerými podklady a fotografiemi naleznete zde.
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
            src="img/prianera/prianera1.jpeg"
            style={{ width: "250px" }}
            alt="prianera"
          />
        </Link>
      </div>
      <section className=" max-width-small">
        <h2>Fotogalerie produktů od firmy Prianera</h2>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {images.map((item, index) => (
            <a href={item.image} key={index}>
              <img
                src={item.thumbnail}
                className="gallery-img"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>
      </section>
    </main>
  );
};

export default exkluzivniNabidky;
