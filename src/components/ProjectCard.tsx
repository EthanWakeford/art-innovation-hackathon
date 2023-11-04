import styled from "styled-components";

// Define the Project type with the fields you expect to use
type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  eventDate: string; // Use ISO string format or Date type based on your preference
};

// Define the props for the ProjectCard component
type ProjectCardProps = {
  project: Project;
};

// The ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Handler function for when the card is clicked
  const handleCardClick = () => {
    // Navigate to the project's page
    // This can be done using react-router's useHistory hook or window.location, depending on your setup
    // window.location.href = `/projects/${project.id}`; // For example
  };

  return (
    <ProjectCardContainer
      className="project-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      backgroundImage={project.imageUrl}
    >
      <ImageContainer>
        <CardImage src={project.imageUrl} alt={project.name} />
      </ImageContainer>
      <CardTitle>{project.name}</CardTitle>
      <p>{project.description}</p>
      <time dateTime={project.eventDate}>
        Event Date: {new Date(project.eventDate).toLocaleDateString()}
      </time>
    </ProjectCardContainer>
  );
};

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

const ProjectCardContainer = styled.div<{ backgroundImage: string }>`
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
    content: "";
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
