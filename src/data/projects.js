import placesCRUD from "../assets/images/places-app-prtSc.png";
import portfolioImg from "../assets/images/portfolio-prtSc.png";

const projects = [
  {
    image: placesCRUD,
    title: "Places CRUD App",
    description: "A React app to add, edit and delete places.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Rania-Papachr/places-app",
    demo: "https://places-app-b5111.web.app/",
  },
  {
    image: portfolioImg,
    title: "Developer Portfolio",
    description: "My personal portfolio built with React and MUI.",
    tech: ["React", "Material UI"],
    github: "https://github.com/Rania-Papachr/my-portfolio",
    demo: "",
  },
  {
    image: placesCRUD,
    title: "Movie Finder",
    description: "Search movies using an API.",
    tech: ["React", "API", "JavaScript"],
    github: "",
    demo: "",
  },
];

export default projects;
