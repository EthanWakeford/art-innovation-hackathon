import styled from "styled-components";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

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
];

const Hero = () => {
  return (
    <HeroContents>
      <HeroTagline>
        <h1>Discover Amazing Art & Music Events</h1>
        <p>
          Explore the projects that have reached their proposal goal and are
          currently being planned.
        </p>
      </HeroTagline>
      <CarouselContainer>
        <CarouselWrapper>
          {projects.map((project) => (
            <CarouselSlide>
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
      var(--color-primary),
      var(--color-accent)
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
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
`;

export default Hero;
