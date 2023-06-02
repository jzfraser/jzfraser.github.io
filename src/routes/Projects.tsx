import "../styles/Projects.scss";

import { Container, Row } from "react-bootstrap";

import checkmate from "../img/Checkmate.gif";
import particleGame from "../img/ParticleGame.gif";
import rayTracing from "../img/RayTracing.png";
import sortingAlgo from "../img/SortingAlgorithm.png";

const projects = [
  {
    imgSrc: checkmate,
    title: "PythonChess",
    link: "https://github.com/jzfraser/PythonChess",
  },
  {
    imgSrc: rayTracing,
    title: "RayTracing",
    link: "https://github.com/jzfraser/RayTracing",
  },
  {
    imgSrc: particleGame,
    title: "ParticleGame",
    link: "https://github.com/jzfraser/ParticleGame",
  },
  {
    imgSrc: sortingAlgo,
    title: "LearnSFML",
    link: "https://github.com/jzfraser/LearnSFML",
  },
];

type ProjectProps = {
  imgSrc: string;
  title: string;
  link: string;
};

function Project({ imgSrc, title, link }: ProjectProps) {
  return (
    <Row className="project">
      <img src={imgSrc} />
      <div className="link-container">
        <a
          className="project-link"
          target="_blank"
          aria-label={title}
          rel="noopener noreferrer"
          href={link}
        >
          {title}
        </a>
      </div>
    </Row>
  );
}

export function Projects() {
  return (
    <Container className="projects">
      <Row className="project-row">
        {projects.map((p) => (
          <Project imgSrc={p.imgSrc} title={p.title} link={p.link} />
        ))}
      </Row>
    </Container>
  );
}
