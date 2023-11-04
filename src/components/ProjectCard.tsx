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
        <ProjectCardContainer className="project-card" onClick={handleCardClick} role="button" tabIndex={0}>
            <img src={project.imageUrl} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <time dateTime={project.eventDate}>
                {new Date(project.eventDate).toLocaleDateString()}
            </time>
        </ProjectCardContainer>
    );
};

const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    width: 300px;
    height: 300px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 0 3px #ccc;
    }
    `


// Export the component
export default ProjectCard;
