import { useState } from "react";
import ProposalItem from "./proposalItem";
import styled from "styled-components";
import { PageTitleContainer } from "./projects";

const proposalInfoHardcoded: Proposal[] = [
  {
    id: 16,
    imageUrl: "https://img-c.udemycdn.com/course/480x270/1172526_e914_8.jpg",
    type: "Tech Workshop",
    name: "Blockchain Developer Bootcamp",
    date: "2024-11-05",
    textInfo: "A comprehensive workshop for aspiring blockchain developers.",
  },
  {
    id: 17,
    imageUrl:
      "https://madmuseum.org/sites/default/files/styles/page_hero/public/static/press/pr3.jpg?itok=5GeK-qgX",
    type: "Art Showcase",
    name: "Sculpture Innovations Expo",
    date: "2024-11-12",
    textInfo: "Featuring the latest trends in sculpture and 3D art.",
  },
  {
    id: 18,
    imageUrl:
      "https://remix86.com/wp-content/uploads/2019/07/retro-synthwave-computer-landscape-palm-trees-shutterstock-1022092345.jpg",
    type: "Music Festival",
    name: "Synthwave Summer Night",
    date: "2024-11-20",
    textInfo: "A night dedicated to the sounds of synthwave and retro electro.",
  },
  {
    id: 19,
    imageUrl:
      "https://www.clipstudio.net/wp-content/uploads/2020/02/0082_000_en-us.jpg",
    type: "Art Workshop",
    name: "Digital Painting Techniques",
    date: "2024-11-28",
    textInfo: "Learn digital painting from expert illustrators.",
  },
  {
    id: 20,
    imageUrl:
      "https://media.northwest.education/wp-content/uploads/2023/05/04153341/vecteezy_system-artificial-intelligence-chatgpt-chat-bot-ai_22479074_457-scaled.jpg",
    type: "Tech Conference",
    name: "AI & Creativity Conclave",
    date: "2024-12-03",
    textInfo: "Where artificial intelligence meets artistic creativity.",
  },
  {
    id: 21,
    imageUrl:
      "https://theater.bard.edu/index.php?action=getfile&id=99966082&disposition=inline&type=image",
    type: "Theatre Play",
    name: "The Modern Bard",
    date: "2024-12-10",
    textInfo: "Contemporary plays inspired by Shakespeare's classics.",
  },
  {
    id: 22,
    imageUrl:
      "https://www.gosnells.wa.gov.au/sites/default/files/styles/og/public/2021-09/COG%20Fusion%20Website%20Landing%20Page%20Update_0.jpg?itok=101nzMYi",
    type: "Culinary Event",
    name: "Fusion Food Fest",
    date: "2024-12-17",
    textInfo: "A celebration of innovative and diverse culinary arts.",
  },
  {
    id: 23,
    imageUrl: "https://heapsdecent.com/files/unnamed.jpg",
    type: "Music Workshop",
    name: "Electronic Music Production",
    date: "2024-12-24",
    textInfo:
      "Craft your own electronic music with guidance from top producers.",
  },
  {
    id: 24,
    imageUrl:
      "https://www.rev.com/blog/wp-content/uploads/2019/09/indie-film-festival-premiere.jpg",
    type: "Film Screening",
    name: "Indie Film Marathon",
    date: "2025-01-02",
    textInfo: "A marathon screening of award-winning indie films.",
  },
  {
    id: 25,
    imageUrl:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_736,q_50,w_1232/v1/crm/neworleans/69984_3136_02_8e203b77-5056-b365-ab058451b4d914bb.jpg",
    type: "Art Fair",
    name: "Urban Art Bazaar",
    date: "2025-01-09",
    textInfo: "Street art and urban culture collide in this dynamic fair.",
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
      <ProposalsContainer>
        <PageTitleContainer>
          <Title>Open Engines</Title>
          <p>Engines are event proposals that are calling for supporters.</p>
        </PageTitleContainer>
        <div>
          {proposalInfoHardcoded.map((proposal) => (
            <ProposalItem
              key={proposal.id}
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
      </ProposalsContainer>
    </>
  );
};

const Title = styled.h2`
  text-align: center;
`;

const ProposalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem 0;
`;

export default Proposals;
