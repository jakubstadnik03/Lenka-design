import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const FlatRentalComponent = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-center align-items-center my-5 max-width"
      style={{ maxWidth: "1200px" }}
    >
      <div className="w-100 w-lg-50">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/durychova/durychova-large6.webp"
              alt="Design bytového interiéru Liberec"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/durychova/durychova-large7.webp"
              alt="Design bytového interiéru Liberec"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/durychova/durychova-large5.webp"
              alt="Design bytového interiéru Liberec"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/durychova/durychova-large10.webp"
              alt="Design bytového interiéru Liberec"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="w-100 w-lg-50 ms-lg-4">
        <h2>Designový byt v srdci Liberce, možnost krátkodobého pronájmu</h2>
        <p>
          Byt je výjimečný svým moderním designem a skvělou polohou v srdci
          Liberce. Po celkové rekonstrukci, kterou provedla zkušená designérka,
          je vybaven nejnovější technologií a moderním, pohodlným nábytkem. Díky
          blízkosti kulturních památek, restaurací a obchodů je toto ubytování
          ideální pro hosty, kteří hledají moderní a pohodlné ubytování v centru
          města a jedinečný zážitek v Liberci.
        </p>
        <Link href="/designovy-byt-v-liberci" passHref>
          <Button variant="primary">Více Informací</Button>
        </Link>
      </div>
    </div>
  );
};

export default FlatRentalComponent;
