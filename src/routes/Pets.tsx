import "../styles/Pets.scss";

import { Favorite, Pets } from "@mui/icons-material";
import { Col, Container, Row } from "react-bootstrap";

import { Avatar } from "../components/Avatar";
import { MiniBio } from "../components/MiniBio";
import meow from "../img/Meow.jpg";
import woof from "../img/Woof.jpg";

const meowIntro = <h1>Momo</h1>;
const meowBullets = [
  {
    icon: <Favorite />,
    text: "Nicknames: Meemee, Moomoo, Bad Cat",
  },
  {
    icon: <Favorite />,
    text: "Hobbies: sunbathing, screaming, angry looks",
  },
  {
    icon: <Favorite />,
    text: "Danger Level: extremely high",
  },
];

const woofIntro = <h1>Mila</h1>;
const woofBullets = [
  {
    icon: <Pets />,
    text: "Nicknames: Milly-lou, Mila-moo, Meatloaf",
  },
  {
    icon: <Pets />,
    text: "Hobbies: eating 'chewies', sleeping ",
  },
  {
    icon: <Pets />,
    text: "Danger Level: extremely low",
  },
];

export function PetBios() {
  return (
    <Container className="pets-container">
      <Row>
        <Col>
          <Avatar imgSrc={meow} />
        </Col>
        <Col>
          <MiniBio intro={meowIntro} miniBioBullets={meowBullets} />
        </Col>
      </Row>
      <Row>
        <Col xs={{ order: 2 }} sm={{ order: 2 }} md={{ order: 1 }}>
          <MiniBio intro={woofIntro} miniBioBullets={woofBullets} />
        </Col>
        <Col xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 2 }}>
          <Avatar imgSrc={woof} />
        </Col>
      </Row>
    </Container>
  );
}
