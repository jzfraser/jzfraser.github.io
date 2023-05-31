import "../styles/Home.scss";

import { Col, Container, Row } from "react-bootstrap";

import { BioBullet } from "../components/BioBullet";
import me from "../img/Me.png";

const bioBullets = [
  {
    emoji: "⌨️",
    text: "Lover of Vi, Vim, and especially Neovim",
  },
  {
    emoji: "👨‍💻",
    text: "Remote worker extraordinaire",
  },
  {
    emoji: "🎮",
    text: "Enjoyer of video games",
  },
  {
    emoji: "🇩🇪",
    text: "Fluent in German",
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
                    emoji={bullet.emoji}
                    text={bullet.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
