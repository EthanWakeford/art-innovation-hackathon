import ProjectCard from "./ProjectCard";

const Homepage = () => {
  return (
    <>
      <h2>Welcome to the events planning whatever thing</h2>
      <p>this is where we give a short tagline</p>
      <ul>
        <li>short</li>
        <li>list</li>
        <li>of projects</li>
      </ul>
      <div>
        perhapss some instructions on how to create your own event proposal
      </div>
      <ProjectCard
        name="Fancy Party"
        textInfo="A party, but fancy."
        imageUrl="https://ci6.googleusercontent.com/proxy/7majMCZYAEq6aBZmv0LCwogQ63X961cgncekZVcEqXGUsugKkfNJqb-VWgUJ66jfCWT9J-p2_sAgh1aAoa92-OCGW4J6DYqQiClT0Xw=s0-d-e1-ft#https://avatars.githubusercontent.com/u/90289314?s=120&v=4"
        date="December 31, 2021"
      />
    </>
  );
};

export default Homepage;
