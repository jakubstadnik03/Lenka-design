import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const ConsultationStudioComponent = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-center align-items-center my-5 max-width"
      style={{ maxWidth: "1200px" }}
    >
      <div className="w-100 w-lg-50">
        <Carousel>
          {/* Přidat obrázky studia do Carousel */}
          <Carousel.Item className="m-auto">
            <img
              className="d-block w-100"
              src="/img/pronajem/durychova-pronajem-small9.jpeg"
              alt="Pronájem studia Liberec"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/pronajem/durychova-pronajem-small16.jpeg"
              alt="Pronájem studia Liberec"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/pronajem/durychova-pronajem-small2.jpeg"
              alt="Pronájem studia Liberec"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/pronajem/durychova-pronajem-small4.jpeg"
              alt="Pronájem studia Liberec"
            />
          </Carousel.Item>

          {/* Další obrázky */}
        </Carousel>
      </div>
      <div className="w-100 w-lg-50 ms-lg-4">
        <h2>Moderní studio pro konzultace v Liberce</h2>
        <p>
          Vítejte v mém nově zrekonstruovaném studiu, které je ideální pro
          firemní setkání a konzultace. Nabízím moderní prostředí, které je
          umístěno přímo v centru Liberce.
        </p>
        <Link href="/pronajem-studia" passHref>
          <Button variant="primary">Více Informací</Button>
        </Link>
      </div>
    </div>
  );
};

export default ConsultationStudioComponent;
