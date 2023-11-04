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
        <LargeProposal onClick={() => onClick(id)}>
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
          <p>{type}</p>
          <img src={imageUrl} alt={`${name} icon`} />
          <h3>{name}</h3>
          <p>{date}</p>
        </SmallProposal>
      </>
    );
  }
};

const SmallProposal = styled.div`
  display: flex;
`;

const LargeProposal = styled.div`
  min-height: 40%;
`;

export default ProposalItem;
