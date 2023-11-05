import styled from 'styled-components';

interface CreateProposalProps {
  onClose: () => void;
}

const CreateProposal: React.FC<CreateProposalProps> = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <HeroImage src={project.imageUrl} alt={project.name} />
        <Title>{project.name}</Title>
        <Description>{project.textInfo}</Description>
        {/* Placeholder for Supporter components */}
        <SupporterWrapper>
          {/* Supporter components will go here */}
        </SupporterWrapper>
        <SupportButton>Support</SupportButton>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure it's above other content
`;

const ModalContent = styled.div`
  border-radius: 10px;
  width: 90vw; // Ensures padding from the screen edges
  height: 90vh; // Doesn't exceed the viewport height
  overflow-y: auto; // Allows scrolling for longer content
  background-color: var(--color-background-alt);
`;

const CloseButton = styled.span`
  position: absolute;
  top: 2rem;
  right: 8vw;
  font-size: 1.5em;
  border-radius: 25px;
  padding: 0.25em;
  cursor: pointer;
  color: var(--color-accent);
  &:hover {
    color: var(--color-primary);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Title = styled.h2`
  margin-top: 20px;
  padding: 0 20px;
  text-align: center;
  color: var(--color-primary);
`;

const Description = styled.p`
  margin: 20px 0;
  padding: 0 20px;
`;

const SupporterWrapper = styled.section`
  // Add styles for the supporter section
`;

const SupportButton = styled.button`
  position: fixed;
  bottom: 10vh; // Raised above the very bottom of the viewport
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 20px;
  background-color: var(--color-accent); // Example color
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px 0px 1rem var(--color-background-main); // Example color
    opacity: 0.8;
  }
`;

export default CreateProposal;
