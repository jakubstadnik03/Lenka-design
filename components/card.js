import Card from "react-bootstrap/Card";
import Link from "next/link";

function BasicExample({ title, desc, img, link }) {
  return (
    <Card
      style={{ width: "15rem" }}
      className="m-2 shadow-sm flex-shrink-0 card border-0 rounded-0"
      border="light"
    >
      <Card.Img variant="top" src={img} className="rounded-0" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Link href={link}>
          <button
            type="button"
            className="btn btn-outline-primary "
            style={{ width: "80px" }}
          >
            Otevřít
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
