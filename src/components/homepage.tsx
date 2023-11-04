import ProjectCard from "./ProjectCard";

const Homepage = () => {
  return (
    <>
      <div>this is a hojmepage</div>
      <ProjectCard
        project={{
          id: "000001",
          name: "Fancy Party",
          description: "A party, but fancy.",
          imageUrl: "https://ci6.googleusercontent.com/proxy/7majMCZYAEq6aBZmv0LCwogQ63X961cgncekZVcEqXGUsugKkfNJqb-VWgUJ66jfCWT9J-p2_sAgh1aAoa92-OCGW4J6DYqQiClT0Xw=s0-d-e1-ft#https://avatars.githubusercontent.com/u/90289314?s=120&v=4",
          eventDate: "December 31, 2021",
        }}
      />
    </>
  );
};

export default Homepage;
