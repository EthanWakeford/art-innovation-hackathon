import styled from "styled-components";
import { ProjectCardProps } from "./ProjectCard";
import ProjectCardContainer from "./ProjectCardContainer";

export const Projects: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      id: "1",
      open: true,
      type: "Art",
      name: "Digital Art Exhibition",
      date: "2023-11-10T18:00:00.000Z",
      imageUrl:
        "https://www.cornucopia.net/library/blog/Noise_install_shot-4-web.jpg",
      textInfo:
        "Explore the depths of digital art in this captivating exhibition.",
    },
    {
      id: "2",
      open: true,
      type: "Music",
      name: "Drum and Bass Show",
      date: "2023-11-15T20:00:00.000Z",
      imageUrl: "https://i.ytimg.com/vi/4068PYO7zPU/maxresdefault.jpg",
      textInfo:
        "Enjoy an evening of drum and bass with local talent and special guests.",
    },
    {
      id: "3",
      open: false,
      type: "Art",
      name: "Regional Burn Festival",
      date: "2023-12-05T12:00:00.000Z",
      imageUrl:
        "https://radseason.com/wp-content/uploads/2017/05/Apogaea-Valdez-Colorado.jpg",
      textInfo: "Regional Burn for the midwest region.",
    },
    {
      id: "4",
      open: true,
      type: "Music",
      name: "Fire in Little Africa",
      date: "2023-12-20T19:00:00.000Z",
      imageUrl:
        "https://static1.squarespace.com/static/5ed3170159ec2e0cbc41bfc3/5edfba39bf421965bd84f126/606518108a228263b6901e13/1620958927719/FIRE+IN+LITTLE+AFRICA.jpg?format=1500w",
      textInfo: "Bring Fire in Little Africa back together for a reunion show.",
    },
    {
      id: "5",
      open: true,
      type: "Art",
      name: "Art + Tech Hackathon",
      date: "2024-01-18T10:00:00.000Z",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwa7ESto7uLVhhiqWWK5Y4LfMGcWT2Bcf9g&usqp=CAU",
      textInfo:
        "Bring creators and technologists together to create new art experiences.",
    },
    {
      id: "6",
      open: true,
      type: "Art",
      name: "Crypto Canvas Gala",
      date: "2024-02-25T19:00:00.000Z",
      imageUrl: "https://i.ytimg.com/vi/STZxAY3PrU8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBMgNyh_MA8=&rs=AOn4CLBnlUe21ZmKH1YVDsl5XRksot969g",
      textInfo:
        "A gala event showcasing artworks inspired by cryptocurrency and blockchain technology.",
    },
    {
      id: "7",
      open: true,
      type: "Music",
      name: "Decentralized Beats Festival",
      date: "2024-03-14T14:00:00.000Z",
      imageUrl: "https://pbs.twimg.com/media/FsoGWyiWwAESMVc?format=jpg&name=large",
      textInfo:
        "A music festival featuring live performances from artists who integrate crypto themes into their music.",
    },
    {
      id: "8",
      open: false,
      type: "Art",
      name: "NFT Art Fair",
      date: "2024-04-05T10:00:00.000Z",
      imageUrl: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/05/149869.jpg",
      textInfo:
        "An exclusive fair for NFT artists to exhibit and sell their digital masterpieces.",
    },
    {
      id: "9",
      open: true,
      type: "Music",
      name: "Smart Contract Symphony",
      date: "2024-04-20T18:00:00.000Z",
      imageUrl: "https://www.inquirer.com/resizer/CXdpwgTWF1bgHnC0TBUggNL0nHU=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/JLN46ERGWJHX3G4PSWXCNM2AIY.jpg",
      textInfo:
        "An orchestral event where music meets technology, inspired by the principles of smart contracts.",
    },
    {
      id: "10",
      open: true,
      type: "Art",
      name: "Blockchain Mural Project",
      date: "2024-05-15T08:00:00.000Z",
      imageUrl: "https://bitcoinmagazine.com/.image/t_share/MTgxNzI3OTA4MzY3MTgxNDE5/bitcoin-2021-graffiti-wall-main.jpg",
      textInfo:
        "A collaborative mural project that explores the intersection of street art and blockchain.",
    },
    {
      id: "11",
      open: true,
      type: "Music",
      name: "Tokenized Tunes Day",
      date: "2024-06-10T16:00:00.000Z",
      imageUrl: "https://cointelegraph.com/magazine/wp-content/uploads/2023/07/magazin-Putting-music-IP-on-the-blockchain-1-scaled.jpg",
      textInfo:
        "A day-long celebration of music where attendees can purchase songs as tokens.",
    },
    {
      id: "12",
      open: true,
      type: "Art",
      name: "Immersive VR Art Experience",
      date: "2024-07-22T12:00:00.000Z",
      imageUrl: "https://www.gold.ac.uk/media/images-by-section/about-us/news/OranicArtweb.jpg",
      textInfo:
        "Dive into digital realities with this VR-driven art exhibition.",
    },
    {
      id: "13",
      open: false,
      type: "Music",
      name: "Ethereal Acoustic Evening",
      date: "2024-08-18T19:00:00.000Z",
      imageUrl: "https://99bitcoins.com/wp-content/uploads/2014/05/2.jpg",
      textInfo:
        "Unwind with acoustic melodies in a setting inspired by ethereal aesthetics and crypto-culture.",
    },
    {
      id: "14",
      open: true,
      type: "Tech",
      name: "NEAR Wallet Sign-Up Event",
      date: "2024-09-05T17:00:00.000Z",
      imageUrl: "https://beincrypto.com/wp-content/uploads/2023/01/best-NEAR-wallet-cover.jpg.optimal.jpg",
      textInfo:
        "A workshop where attendees can learn how to set up a NEAR wallet and receive a free NFT.",
    },
    {
      id: "15",
      open: true,
      type: "Music",
      name: "Folk Finance Fest",
      date: "2024-10-03T13:00:00.000Z",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5f10a7f0e4041a480cbbf0be/80db8856-f19a-476d-a6c2-aa125b7aa027/13234384680514781369.jpeg",
      textInfo: "A music festival where folk music meets financial tech talks.",
    },
  ];
  return (
    <>
      <PageTitleContainer>
        <h2>Projects</h2>
        <p>
          Explore the Engines that have reached their fuel requirements and are
          currently being planned.
        </p>
      </PageTitleContainer>
      <ProjectCardContainer projects={projects} />
    </>
  );
};

export const PageTitleContainer = styled.div`
  text-align: center;
  margin: 0.5rem 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; // Place the pseudo-element below the HeroContents content
    background: linear-gradient(
        135deg,
        var(--color-primary) 0%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(
        225deg,
        var(--color-accent) 0%,
        rgba(255, 255, 255, 0) 70%
      ),
      var(--color-background-main);
  }
`;

export default Projects;
