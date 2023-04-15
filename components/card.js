import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

function BasicExample({ title, desc, img, link }) {
  return (
    <Card
      style={{ width: "18rem" }}
      className="m-3 shadow flex-shrink-0 card border-light"
      border="light"
    >
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Link href={link} style={{ color: "white" }}>
          <Button variant="primary" style={{ width: "80px" }}>
            Otevřít
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
