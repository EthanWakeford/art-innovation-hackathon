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
            <p>{`About: ${textInfo}`}</p>
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

const LargeProposal = styled.div`
  position: relative;
  min-height: 40%;
  background-color: black;
  border: 5px var(--color-primary) solid;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  text-align: right;
  margin: 10px 0;
`;

const CloseButton = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: var(--color-accent);
  }
`;

const LargeImage = styled.img`
  width: 400px;
  height: 400px;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SmallProposal = styled.div`
  display: flex;
  background-color: black;
  border: 1px whitesmoke solid;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
  margin: 10px 0;
`;

const SmallImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export default ProposalItem;
