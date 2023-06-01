import "../styles/About.scss";

import { PropsWithChildren } from "react";
import { Container, Row } from "react-bootstrap";

import { IconBundle } from "../components/IconBundle";
import c from "../img/c.svg";
import cpp from "../img/cplusplus.svg";
import django from "../img/django.svg";
import docker from "../img/docker.svg";
import git from "../img/git.svg";
import java from "../img/java.svg";
import javascript from "../img/javascript.svg";
import nodejs from "../img/node-js.svg";
import pgsql from "../img/postgresql.svg";
import python from "../img/python.svg";
import react from "../img/react.svg";
import typescript from "../img/typescript.svg";

const langIcons = [javascript, typescript, python, java, c, cpp];
const toolIcons = [react, nodejs, django, docker, git, pgsql];

const bio = (
  <>
    <p>
      As a kid I loved playing video games and in middle school that naturally
      developed into an interest for all things computer related. Ever since I
      dual-booted my hand-me-down Macbook with Ubuntu and started teaching
      myself Python I've loved computer science, programming, and fiddling with
      technology.
    </p>
    <p>
      I am an honest, direct person with an appreciation for all cultures and
      points of view. Although I am quite introverted, I love to make people
      laugh and enjoy healthy banter with those who I feel comfortable with.
    </p>
    <p>
      When I'm not coding you can find me gaming, reading, learning new
      languages (programming and otherwise), and spending time with the people I
      love.
    </p>
  </>
);

const languages = (
  <p>
    I take pride in working in a variety of languages and being able to provide
    value in any area of an application. Below are those I have the most
    experience with.
  </p>
);

const education = (
  <p>
    After doing an exchange program to Germany in my senior year and then
    graduating high school I attended Colorado State University. There I got a
    Bachelor of Science in Computer Science and a Bachelor of Arts in Languages,
    Literatures, and Cultures with a concentration in German.
  </p>
);

type AboutCardProps = PropsWithChildren<{
  title: string;
  icons?: string[];
}>;

function AboutCard({ title, icons, children }: AboutCardProps) {
  return (
    <Row className="about-section">
      <h1>{title}</h1>
      <div className="divider" />
      <h2>{children}</h2>
      {icons && <IconBundle icons={icons} />}
    </Row>
  );
}

export function About() {
  return (
    <Container className="about">
      <AboutCard title="About me" children={bio} />
      <AboutCard title="Languages" icons={langIcons} children={languages} />
      <AboutCard title="Tools/Frameworks" icons={toolIcons} />
      <AboutCard title="Education" children={education} />
    </Container>
  );
}
