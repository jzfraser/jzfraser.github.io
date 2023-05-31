import "../styles/Home.scss";

import { Col, Container, Row } from "react-bootstrap";

export function Home() {
  return (
    <Container>
      <Row>
        <Col />
        {/* put an image in this col */}
        <Col>
          <div className="home-contents">
            <h1>
              Hey there, I'm <span className="gradient-text">Jack</span>{" "}
              <span className="handwave">👋</span>
            </h1>
            <h3>I do Full Stack Dev and more</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
