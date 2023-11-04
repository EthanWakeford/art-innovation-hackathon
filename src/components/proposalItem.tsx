import styled from 'styled-components';

interface ProposalItemProps {
  open: boolean;
  type: string;
  name: string;
  date: string;
  imageUrl: string;
  textInfo: string;
}

const ProposalItem: React.FC<ProposalItemProps> = ({
  open,
  type,
  name,
  date,
  imageUrl,
  textInfo,
}) => {
  if (open) {
    return (
      <>
        <LargeProposal>
          <p>{type}</p>
          <img src={imageUrl} alt={`${name} icon`} />
          <h3>{name}</h3>
          <p>{date}</p>
          <p>{textInfo}</p>
        </LargeProposal>
      </>
    );
  } else {
    return (
      <>
        <SmallProposal>
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
