import { Carousel, Image, Button, Container } from "react-bootstrap";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/uvod/uvod1.webp"
              alt="First slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/uvod/uvod2.webp"
              alt="Second slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="img/uvod/uvod3.webp"
              alt="Third slide"
              style={{ maxHeight: "calc(100vh - 90px)" }}
            />
          </Carousel.Item>
        </Carousel>
        <Carousel.Caption style={{ postion: "absolute" }}>
          <h1 className="display-1">Lenka Design</h1>
          <p className="fs-3">Design na míru dle vašeho přání</p>
          <Link href="/kontakt">
            <button
              type="button"
              className="btn btn-outline-primary px-4 fs-4 text-light"
            >
              Kontakt
            </button>
          </Link>
        </Carousel.Caption>
      </div>
    </>
  );
};

export default HeroSection;
