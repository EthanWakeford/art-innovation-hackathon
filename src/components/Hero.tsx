import styled from 'styled-components';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import artSoiree from '../assets/Art Soiree.png';
import creativeMixer from '../assets/Creative Mixer.png';
import hackathon from '../assets/Hackathon.png';
import RB from '../assets/R&B.png';
import incubator from '../assets/Incubator.png';

const projects: ProjectCardProps[] = [
  {
    id: '0',
    name: 'ArtSync Collective',
    open: true,
    type: 'Kickoff Mixer',
    date: 'Dec 10, 2023',
    imageUrl: creativeMixer,
    textInfo:
      'This event marks the launch of ArtSync, a new Tulsa collective built around Tulsa art collaborators.',
  },
  {
    id: '-1',
    name: 'R&B Tulsa 2023',
    type: 'Festival',
    date: 'Dec 15, 2023',
    imageUrl: RB,
    textInfo:
      ' A dynamic festival event where many of the top R&B groups in Tulsa showcase their music to the community.',
  },
  {
    id: '-2',
    name: 'World Creators’ Hackathon',
    type: 'Workshop and Competition',
    imageUrl: hackathon,
    date: 'an 15-17, 2024',
    textInfo:
      'Over a 48-hour period, creatives from all over the world will form teams to devise innovative art projects..',
  },
  {
    id: '-3',
    name: 'Tulsa Artists & Patrons Soiree',
    type: 'Networking Gala',
    date: 'Jan 25, 2024',
    imageUrl: artSoiree,
    textInfo:
      'An exclusive evening event connecting Tulsan artists with community patrons.',
  },
  {
    id: '-4',
    name: 'The Creative Incubator',
    type: 'Mentorship Program Launch',
    imageUrl: incubator,
    date: 'Feb 1, 2024',
    textInfo:
      'This program pairs experienced artists and business mentors with emerging creatives.',
  },
  {
    id: '0',
    name: 'ArtSync Collective',
    open: true,
    type: 'Kickoff Mixer',
    date: 'Dec 10, 2023',
    imageUrl: creativeMixer,
    textInfo:
      'This event marks the launch of ArtSync, a new Tulsa collective built around Tulsa art collaborators.',
  },
  {
    id: '-1',
    name: 'R&B Tulsa 2023',
    type: 'Festival',
    date: 'Dec 15, 2023',
    imageUrl: RB,
    textInfo:
      ' A dynamic festival event where many of the top R&B groups in Tulsa showcase their music to the community.',
  },
  {
    id: '-2',
    name: 'World Creators’ Hackathon',
    type: 'Workshop and Competition',
    imageUrl: hackathon,
    date: 'an 15-17, 2024',
    textInfo:
      'Over a 48-hour period, creatives from all over the world will form teams to devise innovative art projects.',
  },
  {
    id: '-3',
    name: 'Tulsa Artists & Patrons Soiree',
    type: 'Networking Gala',
    date: 'Jan 25, 2024',
    imageUrl: artSoiree,
    textInfo:
      'An exclusive evening event connecting Tulsan artists with community patrons.',
  },
  {
    id: '-4',
    name: 'The Creative Incubator',
    type: 'Mentorship Program Launch',
    imageUrl: incubator,
    date: 'Feb 1, 2024',
    textInfo:
      'This program pairs experienced artists and business mentors with emerging creatives.',
  },
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
    imageUrl:
      "https://i.ytimg.com/vi/STZxAY3PrU8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBMgNyh_MA8=&rs=AOn4CLBnlUe21ZmKH1YVDsl5XRksot969g",
    textInfo:
      "A gala event showcasing artworks inspired by cryptocurrency and blockchain technology.",
  },
  {
    id: "7",
    open: true,
    type: "Music",
    name: "Decentralized Beats Festival",
    date: "2024-03-14T14:00:00.000Z",
    imageUrl:
      "https://pbs.twimg.com/media/FsoGWyiWwAESMVc?format=jpg&name=large",
    textInfo:
      "A music festival featuring live performances from artists who integrate crypto themes into their music.",
  },
  {
    id: "8",
    open: false,
    type: "Art",
    name: "NFT Art Fair",
    date: "2024-04-05T10:00:00.000Z",
    imageUrl:
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/05/149869.jpg",
    textInfo:
      "An exclusive fair for NFT artists to exhibit and sell their digital masterpieces.",
  },
  {
    id: "9",
    open: true,
    type: "Music",
    name: "Smart Contract Symphony",
    date: "2024-04-20T18:00:00.000Z",
    imageUrl:
      "https://www.inquirer.com/resizer/CXdpwgTWF1bgHnC0TBUggNL0nHU=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/JLN46ERGWJHX3G4PSWXCNM2AIY.jpg",
    textInfo:
      "An orchestral event where music meets technology, inspired by the principles of smart contracts.",
  },
  {
    id: "10",
    open: true,
    type: "Art",
    name: "Blockchain Mural Project",
    date: "2024-05-15T08:00:00.000Z",
    imageUrl:
      "https://bitcoinmagazine.com/.image/t_share/MTgxNzI3OTA4MzY3MTgxNDE5/bitcoin-2021-graffiti-wall-main.jpg",
    textInfo:
      "A collaborative mural project that explores the intersection of street art and blockchain.",
  },
  {
    id: "11",
    open: true,
    type: "Music",
    name: "Tokenized Tunes Day",
    date: "2024-06-10T16:00:00.000Z",
    imageUrl:
      "https://cointelegraph.com/magazine/wp-content/uploads/2023/07/magazin-Putting-music-IP-on-the-blockchain-1-scaled.jpg",
    textInfo:
      "A day-long celebration of music where attendees can purchase songs as tokens.",
  },
  {
    id: "12",
    open: true,
    type: "Art",
    name: "Immersive VR Art Experience",
    date: "2024-07-22T12:00:00.000Z",
    imageUrl:
      "https://www.gold.ac.uk/media/images-by-section/about-us/news/OranicArtweb.jpg",
    textInfo: "Dive into digital realities with this VR-driven art exhibition.",
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
    imageUrl:
      "https://beincrypto.com/wp-content/uploads/2023/01/best-NEAR-wallet-cover.jpg.optimal.jpg",
    textInfo:
      "A workshop where attendees can learn how to set up a NEAR wallet and receive a free NFT.",
  },
  {
    id: "15",
    open: true,
    type: "Music",
    name: "Folk Finance Fest",
    date: "2024-10-03T13:00:00.000Z",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5f10a7f0e4041a480cbbf0be/80db8856-f19a-476d-a6c2-aa125b7aa027/13234384680514781369.jpeg",
    textInfo: "A music festival where folk music meets financial tech talks.",
  },
];

const Hero = () => {
  return (
    <HeroContents>
      <HeroTagline>
        <h1>Fuel a creative Engine,<br></br>get paid from its output.</h1>
        <p>
          Explore the Engines that have reached their fuel requirements and are
          currently being planned.
        </p>
      </HeroTagline>
      <CarouselContainer>
        <CarouselWrapper>
          {projects.map((project) => (
            <CarouselSlide key={project.id}>
              <ProjectCard {...project} />
            </CarouselSlide>
          ))}
        </CarouselWrapper>
      </CarouselContainer>
    </HeroContents>
  );
};

const CarouselContainer = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 1rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  transition: transform 0.3s ease-out;
`;

const CarouselSlide = styled.div`
  transition: opacity 0.3s ease-in-out;
`;

const HeroContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  position: relative;
  z-index: 1; // Ensure that HeroContents is above the pseudo-element

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
      var(--color-accent) var(--color-primary)
    ); // Replace with your colors
  }
`;

const HeroTagline = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  @media (max-width: 768px) {
    padding: 0;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0 2rem;
  }
`;

export default Hero;
