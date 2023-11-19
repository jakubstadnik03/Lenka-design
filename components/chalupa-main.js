import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const CottageRentalComponent = () => {
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
              src="/img/pronajem/rozstani-pronajem-small1.jpeg"
              alt="Chalupa Podještědka"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/pronajem/rozstani-pronajem-small7.jpeg"
              alt="Chalupa Podještědka"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/pronajem/rozstani-pronajem-small5.jpeg"
              alt="Chalupa Podještědka"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/pronajem/rozstani-pronajem-small9.jpeg"
              alt="Chalupa Podještědka"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="w-100 w-lg-50 ms-lg-4">
        <h2>
          Chalupa Podještědka – Rozstání v Podještědí, možnost krátkodobého
          pronájmu
        </h2>
        <p>
          Prožijte nezapomenutelný pobyt v Chalupě Podještědka, nedaleko
          golfového hřiště Ještěd a lanového parku Horka. Nově zrekonstruovaná a
          stylově zařízená chalupa v Podještědí nabízí ideální útočiště pro
          rodinnou rekreaci, firemní srazy nebo skupinové výlety. S kapacitou 2
          až 15 osob, pěti ložnicemi, saunou a mysliveckou stodolou s grilem a
          pípou, chalupa slibuje pohodlí a zábavu uprostřed malebné přírody.
        </p>
        <Link href="/chalupa-podjestedka" passHref>
          <Button variant="primary">Více Informací</Button>
        </Link>
      </div>
    </div>
  );
};

export default CottageRentalComponent;
