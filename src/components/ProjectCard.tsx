import styled from 'styled-components';
import ProjectCardDetailedView from './ProjectDetailedView';
import { useState } from 'react';

export interface ProjectCardProps extends Project {
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  date,
  imageUrl,
  textInfo,
}) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardProps | null>(null);

  const handleCardClick = (project: ProjectCardProps) => {
    setSelectedProject(project);
    console.log(`${project.name} was clicked!`);
  };

  // When closing the modal
  const handleClose = () => {
    setSelectedProject(null);
  };
  return (
    <>
      <ProjectCardBody
        className='project-card'
        role='button'
        tabIndex={0}
        backgroundImage={imageUrl}
        onClick={() => handleCardClick({ name, date, imageUrl, textInfo })}
      >
        <ImageContainer>
          <CardImage src={imageUrl} alt={name} />
        </ImageContainer>
        <CardTitle>{name}</CardTitle>
        <Details>{textInfo}</Details>
        <time dateTime={date}>
          Event Date: {new Date(date).toLocaleDateString()}
        </time>
      </ProjectCardBody>
      {selectedProject && (
        <ProjectCardDetailedView
          project={selectedProject}
          onClose={handleClose}
        />
      )}
    </>
  );
};

const Details = styled.p`
  display: flex;
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  transition: all var(--animation-speed-medium) ease;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 0px 0.5rem var(--color-primary);
  transition: all var(--animation-speed-medium) ease;
`;

const ImageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  display: flex;
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all var(--animation-speed-medium) ease;
`;

const ProjectCardBody = styled.div<{ backgroundImage: string }>`
  /* border: 1px solid var(--color-border); */
  padding: 0px 0px;
  border-radius: 20px;
  width: 270px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all var(--animation-speed-medium) ease;
  box-shadow: none;
  margin: 0.3rem;
  align-self: stretch;
  height: 400px;
  justify-content: space-around;
  background-color: var(--other-color);
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: filter var(--animation-speed-medium) ease,
      opacity var(--animation-speed-medium) ease;
    z-index: -1;
    border-radius: 20px;
  }

  &::before {
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(5px);
  }

  &::after {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  &:hover::before {
    filter: blur(5px); // If you want to adjust the blur on hover
  }

  &:hover::after {
    opacity: 0.5; // Fades out the overlay on hover
  }

  &:hover {
    text-decoration: none;
    box-shadow: 0px 0px 10px var(--color-accent);
    cursor: pointer;
    overflow: visible;
    border: none;
  }
  &:hover ${CardTitle} {
    color: var(--color-accent);
    text-shadow: 1px 1px 0 var(--color-background-alt),
      1px -1px 0 var(--color-background-alt),
      -1px 1px 0 var(--color-background-alt),
      -1px -1px 0 var(--color-background-alt);
    transform: scale(1.05);
    padding-top: 5px;
    z-index: 1;
  }
  &:hover ${CardImage} {
    box-shadow: 0px 0px 0px var(--color-accent);
    transform: scale(1.05);
    margin-top: 5px;
  }
`;

// Export the component
export default ProjectCard;
