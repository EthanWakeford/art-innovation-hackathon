// CardContainer.tsx

import React from "react";
import styled from "styled-components";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface ProjectCardContainerProps {
  projects: ProjectCardProps[];
}

const ProjectCardContainer: React.FC<ProjectCardContainerProps> = ({
  projects,
}) => {
  return (
    <Container>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          open={project.open}
          type={project.type}
          name={project.name}
          date={project.date}
          imageUrl={project.imageUrl}
          textInfo={project.textInfo}
        />
      ))}
    </Container>
  );
};

// Styled-components for Container
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Or any spacing you like
  justify-content: center;
  margin: 20px; // Or any margin you prefer
`;

export default ProjectCardContainer;
