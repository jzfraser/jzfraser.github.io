import "../styles/Home.scss";

import {
  GitHub,
  Keyboard,
  Language,
  LinkedIn,
  Psychology,
  Wifi,
} from "@mui/icons-material";
import { Col, Container, Row } from "react-bootstrap";

import { Avatar } from "../components/Avatar";
import { MiniBio } from "../components/MiniBio";
import me from "../img/Me.png";

const intro = (
  <>
    <h1>
      Hi, I'm <span className="gradient-text">Jack</span>{" "}
      <span className="handwave">👋</span>
    </h1>
    <h2>I do Full Stack Dev and more.</h2>
  </>
);

const miniBioBullets = [
  {
    icon: <Keyboard />,
    text: "Lover of Vi, Vim, and especially Neovim",
  },
  {
    icon: <Psychology />,
    text: "Powerful drive for learning",
  },
  {
    icon: <Wifi />,
    text: "Remote worker extraordinaire",
  },
  {
    icon: <Language />,
    text: "Fluent in German",
  },
];

const socialLinks = [
  {
    icon: <GitHub fontSize="large" />,
    to: "https://github.com/jzfraser",
    label: "github",
  },
  {
    icon: <LinkedIn fontSize="large" />,
    to: "https://www.linkedin.com/in/jack-f-031a87210/",
    label: "linkedin",
  },
];

export function Home() {
  return (
    <Container className="home">
      <Row>
        <Col lg>
          <Avatar imgSrc={me} />
        </Col>
        <Col lg>
          <MiniBio
            intro={intro}
            miniBioBullets={miniBioBullets}
            socialLinks={socialLinks}
          />
        </Col>
      </Row>
    </Container>
  );
}
