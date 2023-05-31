import "../styles/Home.scss";

import {
  GitHub,
  Keyboard,
  Language,
  LinkedIn,
  SportsEsports,
  Wifi,
} from "@mui/icons-material";
import { Col, Container, Row } from "react-bootstrap";

import { BioBullet, BioBulletProps } from "../components/BioBullet";
import { SocialLink, SocialLinkProps } from "../components/SocialLink";
import me from "../img/Me.png";

const bioBullets: BioBulletProps[] = [
  {
    icon: <Keyboard />,
    text: "Lover of Vi, Vim, and especially Neovim",
  },
  {
    icon: <Wifi />,
    text: "Remote worker extraordinaire",
  },
  {
    icon: <Language />,
    text: "Fluent in German",
  },
  {
    icon: <SportsEsports />,
    text: "Play a wide variety of video games",
  },
];

const socialLinks: SocialLinkProps[] = [
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
          <div className="home-contents">
            <img src={me} alt="image of me smiling" />
          </div>
        </Col>
        <Col lg>
          <div className="home-container">
            <div className="home-contents">
              <h1>
                Hi, I'm <span className="gradient-text">Jack</span>{" "}
                <span className="handwave">👋</span>
              </h1>
              <h2>I do Full Stack Dev and more.</h2>
              <div className="bio">
                {bioBullets.map((bullet, index) => (
                  <BioBullet
                    key={index}
                    icon={bullet.icon}
                    text={bullet.text}
                  />
                ))}
              </div>
              <Row>
                {socialLinks.map((link, index) => (
                  <SocialLink
                    key={index}
                    icon={link.icon}
                    to={link.to}
                    label={link.label}
                  />
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
