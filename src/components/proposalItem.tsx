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
          <p>{type}</p>
          <img src={imageUrl} alt={`${name} icon`} />
          <h3>{name}</h3>
          <p>{date}</p>
          <p>{textInfo}</p>
          <p>this is big now</p>
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

const SmallProposal = styled.div`
  display: flex;
  background-color: black;
  border: 1px whitesmoke solid;
  justify-content: space-between;
  padding: 0 10%;
`;

const SmallImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const LargeProposal = styled.div`
  position: relative;
  min-height: 40%;
  background-color: black;
  border: 5px var(--color-primary) solid;
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

export default ProposalItem;
