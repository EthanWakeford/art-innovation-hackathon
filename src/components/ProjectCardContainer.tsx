// CardContainer.tsx

import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import ProjectCardDetailedView from "./ProjectDetailedView";

interface ProjectCardContainerProps {
  projects: ProjectCardProps[];
}

const ProjectCardContainer: React.FC<ProjectCardContainerProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const handleCardClick = (project: ProjectCardProps) => {
    setSelectedProject(project);
    console.log(`${project.name} was clicked!`)
  };

  // When closing the modal
  const handleClose = () => {
    setSelectedProject(null);
  };
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
          onClick={() => handleCardClick(project)}
        />
      ))}
      {selectedProject && (
        <ProjectCardDetailedView
          project={selectedProject}
          onClose={handleClose}
        />
      )}
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
