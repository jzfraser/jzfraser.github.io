import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

export type BioBulletProps = {
  icon: ReactNode;
  text: string;
};

export function BioBullet({ icon, text }: BioBulletProps) {
  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="bio-bullet">
          {icon}
        </Col>
        <Col>{text}</Col>
      </Row>
    </Container>
  );
}
