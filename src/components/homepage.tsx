import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Projects from './projects';

const Homepage = () => {
  return (
    <>
      <h2>Welcome to the events planning whatever thing</h2>
      <p>this is where we give a short tagline</p>
      <ProjectsCardHolder>
        <ProjectCard
            name='Fancy Party'
            textInfo='A party, but fancy.'
            imageUrl='https://ci6.googleusercontent.com/proxy/7majMCZYAEq6aBZmv0LCwogQ63X961cgncekZVcEqXGUsugKkfNJqb-VWgUJ66jfCWT9J-p2_sAgh1aAoa92-OCGW4J6DYqQiClT0Xw=s0-d-e1-ft#https://avatars.githubusercontent.com/u/90289314?s=120&v=4'
            date='December 31, 2021'
        />
        <ProjectCard
            name='Fancy Party'
            textInfo='A party, but fancy.'
            imageUrl='https://ci6.googleusercontent.com/proxy/7majMCZYAEq6aBZmv0LCwogQ63X961cgncekZVcEqXGUsugKkfNJqb-VWgUJ66jfCWT9J-p2_sAgh1aAoa92-OCGW4J6DYqQiClT0Xw=s0-d-e1-ft#https://avatars.githubusercontent.com/u/90289314?s=120&v=4'
            date='December 31, 2021'
        />
      </ProjectsCardHolder>
      <p>
        perhapss some instructions on how to create your own event proposal
      </p>
      <Projects />
    </>
  );
};

const ProjectsCardHolder = styled.div`
  display: flex;
`;

export default Homepage;
