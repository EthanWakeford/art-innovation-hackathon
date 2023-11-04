import ProposalItem from './proposalItem';

const proposalInfoHardcoded: Proposal[] = [
  {
    imageUrl: '',
    type: 'concert',
    name: 'roomates sisters jazz math rock',
    date: 'never',
    textInfo:
      'idk when its gonna happen but its gonna be greate lorem ipsum sit dolor amet whaterver',
  },
  {
    imageUrl: '',
    type: 'art exhibition',
    name: 'someones art exhibit',
    date: 'idk',
    textInfo: 'this sucks and no one wants to go to it',
  },
];

const Proposals: React.FC = () => {
  return (
    <>
      <h2>Open Proposals</h2>
      <div>
        {proposalInfoHardcoded.map((proposal) => (
          <ProposalItem
            open={false}
            imageUrl={proposal.imageUrl}
            type={proposal.type}
            name={proposal.name}
            date={proposal.date}
            textInfo={proposal.textInfo}
          />
        ))}
      </div>
    </>
  );
};

export default Proposals;
