import { Col, Container, Row } from "react-bootstrap";

type IconBundleProps = {
  icons: string[];
};

const iconAttr = "https://iconscout.com/contributors/icon-mafia/";

export function IconBundle({ icons }: IconBundleProps) {
  return (
    <Container className="icon-bundle">
      <Row className="icons">
        {icons.map((i, index) => (
          <Col key={index} xs={4} sm={4} md className="icon">
            <img src={i} />
          </Col>
        ))}
      </Row>
      <Row>
        <p className="icon-attr">
          All icons by{" "}
          <a
            target="_blank"
            aria-label="icon attribution"
            rel="noopener noreferrer"
            href={iconAttr}
          >
            Icon Mafia
          </a>
        </p>
      </Row>
    </Container>
  );
}
