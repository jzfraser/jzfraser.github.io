import { Col, Container, Row } from "react-bootstrap";

export function About() {
  return (
    <Container>
      <Row>
        <Col />
        {/* put an image in this col */}
        <Col>
          <div className="about-block">
            <div className="about-contents">
              <h1>
                Hey there, I'm <span className="initials">Jack</span>{" "}
                <span className="handwave">👋</span>
              </h1>
              <h3>I do Full Stack Dev and more</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
