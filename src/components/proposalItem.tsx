import styled from 'styled-components';

interface ProposalItemProps extends Proposal {
  open: boolean;
  onClick: (id: number) => void;
}

const ProposalItem: React.FC<ProposalItemProps> = ({
  id,
  open,
  type,
  name,
  date,
  imageUrl,
  textInfo,
  onClick,
}) => {
  if (open) {
    return (
      <>
        <LargeProposal>
          <CloseButton
            className='fa-solid fa-xmark'
            onClick={() => onClick(id)}
          />
          <LargeImage src={imageUrl} alt={`${name} icon`} />
          <ContentHolder>
            <h3>{name}</h3>
            <p>{type}</p>
            <p>{`Date: ${date}`}</p>
            <About>{`About: ${textInfo}`}</About>
          </ContentHolder>
        </LargeProposal>
      </>
    );
  } else {
    return (
      <>
        <SmallProposal onClick={() => onClick(id)}>
          <SmallImage src={imageUrl} alt={`${name} icon`} />
          <h3>{name}</h3>
          <p>{`${type}:  ${date}`}</p>
        </SmallProposal>
      </>
    );
  }
};

const About = styled.p`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LargeProposal = styled.div`
  position: relative;
  min-height: 40%;
  background-color: black;
  border: 5px var(--color-primary) solid;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  text-align: right;
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const CloseButton = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  text-shadow: black 0 0 10px;
  &:hover {
    color: var(--color-accent);
  }
`;

const LargeImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem 1rem 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SmallProposal = styled.div`
  display: flex;
  background-color: black;
  border: 1px whitesmoke solid;
  justify-content: space-between;
  padding: 0.1rem 0.5rem;
  align-items: center;
  margin: 0.5rem 0;
  transition: transform 0.3s ease-out;
  text-align: center;
`;

const SmallImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  object-fit: cover;
`;

export default ProposalItem;
