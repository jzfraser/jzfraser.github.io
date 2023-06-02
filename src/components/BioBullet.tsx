import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

export type MiniBioBulletProps = {
  icon: ReactNode;
  text: string;
};

export function MiniBioBullet({ icon, text }: MiniBioBulletProps) {
  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="bio-bullet">
          {icon}
        </Col>
        <Col className="bio-text">{text}</Col>
      </Row>
    </Container>
  );
}
