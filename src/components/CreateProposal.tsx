import { useState } from 'react';
import styled from 'styled-components';

interface CreateProposalProps {
  onClose: () => void;
}

const CreateProposal: React.FC<CreateProposalProps> = ({ onClose }) => {
  const [project, setProject] = useState<Project>({
    id: '',
    type: '',
    name: '',
    date: '',
    imageUrl: '',
    textInfo: '',
  });

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, name: e.target.value });
  };

  const handleDescriptionInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProject({ ...project, textInfo: e.target.value });
  };

  const handleTypeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, type: e.target.value });
  };

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({ ...project, date: e.target.value });
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton className='fa-solid fa-xmark' onClick={onClose} />
        <InputWrapper>
          {project.imageUrl ? (
            <HeroImage src={project.imageUrl} alt={project.name} />
          ) : (
            <ImageInput type='file' />
          )}
          <TitleInput
            type='text'
            name='title-input'
            value={project.name}
            placeholder='Event Name'
            onChange={handleTitleInput}
          ></TitleInput>
          <TextInput
            type='text'
            name='type-input'
            value={project.type}
            placeholder='Type of Event'
            onChange={handleTypeInput}
          ></TextInput>
          <TextInput
            type='text'
            name='date-input'
            value={project.date}
            placeholder='Date of your event'
            onChange={handleDateInput}
          ></TextInput>
          <DescriptionInput
            name='description-input'
            placeholder='Description of your event'
            value={project.textInfo}
            rows={5}
            onChange={handleDescriptionInput}
          />
        </InputWrapper>
        {/* Placeholder for Supporter components */}
        <SupporterWrapper>
          {/* Supporter components will go here */}
        </SupporterWrapper>
        <SupportButton>Submit</SupportButton>
      </ModalContent>
    </ModalWrapper>
  );
};

const TextInput = styled.input`
  font-size: medium;
  outline: none;
  border: none;
  text-align: center;
  background-color: var(--color-background-main);
  border-color: black;
  lighting-color: black;
  color: white;
  &:focus-visible {
    border: none;
  }
  line-height: 1.5;
  margin: 20px 20%;
`;

const ImageInput = styled.input`
  font-size: medium;
  outline: none;
  border: none;
  text-align: center;
  background-color: var(--color-background-main);
  border-color: black;
  lighting-color: black;
  color: white;
  &:focus-visible {
    border: none;
  }
  line-height: 1.5;
  margin: 20px 20%;
`;

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
  position: relative;
  border-radius: 10px;
  width: 90vw; // Ensures padding from the screen edges
  height: 90vh; // Doesn't exceed the viewport height
  overflow-y: auto; // Allows scrolling for longer content
  background-color: var(--color-background-alt);
`;

const CloseButton = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-primary);
  &:hover {
    color: var(--color-accent);
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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: space-between;
  height: 80%;
`;

const TitleInput = styled(TextInput)`
  margin-top: 20px;
  padding: 0 20px;
  font-size: x-large;
  padding-left: auto;
  color: var(--color-primary);
`;

const DescriptionInput = styled.textarea`
  margin: 20px 20%;
  padding: 0 20px;
  font-size: medium;
  outline: none;
  border: none;
  text-align: center;
  background-color: var(--color-background-main);
  border-color: black;
  lighting-color: black;
  color: white;
  &:focus-visible {
    border: none;
  }
  line-height: 1.5;
  margin: 20px 20%;
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
