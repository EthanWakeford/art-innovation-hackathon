import { useState } from 'react';
import ProposalItem from './proposalItem';
import styled from 'styled-components';

const proposalInfoHardcoded: Proposal[] = [
  {
    id: 21,
    imageUrl: 'https://avatars.githubusercontent.com/u/37547658?v=4',
    type: 'concert',
    name: 'roomates sisters jazz math rock',
    date: 'never',
    textInfo:
      'idk when its gonna happen but its gonna be greate lorem ipsum sit dolor amet whaterver',
  },
  {
    id: 1232323,
    imageUrl: 'https://avatars.githubusercontent.com/u/37547658?v=4',
    type: 'art exhibition',
    name: 'someones art exhibit',
    date: 'idk',
    textInfo: 'this sucks and no one wants to go to it',
  },
  {
    id: 123233,
    imageUrl: 'https://avatars.githubusercontent.com/u/37547658?v=4',
    type: 'art exhibition',
    name: 'someones art exhibit',
    date: 'idk',
    textInfo: 'this sucks and no one wants to go to it',
  },
  {
    id: 123223233,
    imageUrl: 'https://avatars.githubusercontent.com/u/37547658?v=4',
    type: 'art exhibition',
    name: 'someones art exhibit',
    date: 'idk',
    textInfo: 'this sucks and no one wants to go to it',
  },
  {
    id: 1234323,
    imageUrl: 'https://avatars.githubusercontent.com/u/37547658?v=4',
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
      copyClickedItems.delete(id);
    } else {
      copyClickedItems.add(id);
    }
    setClickedItems(copyClickedItems);
  };

  return (
    <>
      <Title>Open Proposals</Title>
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

const Title = styled.h2`
  text-align: center;
`;

export default Proposals;
