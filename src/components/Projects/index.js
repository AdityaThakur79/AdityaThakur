import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects.Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend web app" ? (
            <ToggleButton
              active
              value="frontend web app"
              onClick={() => setToggle("frontend web app")}
            >
              Frontend Web App's
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend web app"
              onClick={() => setToggle("frontend web app")}
            >
              Frontend Web App's
            </ToggleButton>
          )}
          <Divider />
          {toggle === "FireBase Projects" ? (
            <ToggleButton
              active
              value="firebase projects"
              onClick={() => setToggle("firebase projects")}
            >
              FireBase Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="firebase projects"
              onClick={() => setToggle("firebase projects")}
            >
              FireBase Projects
            </ToggleButton>
          )}
          <Divider />
          {toggle === "api projects" ? (
            <ToggleButton
              active
              value="api projects"
              onClick={() => setToggle("api projects")}
            >
              API Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="api projects"
              onClick={() => setToggle("api projects")}
            >
              API Projects
            </ToggleButton>
          )}
          <Divider />
          {toggle === "fullstack projects" ? (
            <ToggleButton
              active
              value="fullstack projects"
              onClick={() => setToggle("fullstack projects")}
            >
              Fullstack Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="fullstack projects"
              onClick={() => setToggle("fullstack projects")}
            >
              Fullstack Projects
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
