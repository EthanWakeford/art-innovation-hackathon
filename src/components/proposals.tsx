import { useState } from 'react';
import ProposalItem from './proposalItem';

const proposalInfoHardcoded: Proposal[] = [
  {
    id: 21,
    imageUrl: '',
    type: 'concert',
    name: 'roomates sisters jazz math rock',
    date: 'never',
    textInfo:
      'idk when its gonna happen but its gonna be greate lorem ipsum sit dolor amet whaterver',
  },
  {
    id: 12323,
    imageUrl: '',
    type: 'art exhibition',
    name: 'someones art exhibit',
    date: 'idk',
    textInfo: 'this sucks and no one wants to go to it',
  },
];

const Proposals: React.FC = () => {
  const [clickedItems, setClickedItems] = useState<Set<number>>(new Set());

  const handleClick = (id: number) => {
    const copyClickedItems = new Set(clickedItems);
    if (copyClickedItems.has(id)) {
      console.log('here');
      copyClickedItems.delete(id);
    } else {
      copyClickedItems.add(id);
      console.log('not here');
    }
    setClickedItems(copyClickedItems);
  };
  console.log(clickedItems);
  return (
    <>
      <h2>Open Proposals</h2>
      <div>
        {proposalInfoHardcoded.map((proposal) => (
          <ProposalItem
            id={proposal.id}
            onClick={handleClick}
            open={clickedItems.has(proposal.id)}
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
