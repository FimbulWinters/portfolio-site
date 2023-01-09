import Image, { StaticImageData } from "next/image";
import holder from "../images/profile.png";
import Link from "next/link";
import server from "./images/Screenshot from 2023-01-09 13-55-08.png";
import games from "./images/games.png";
import hobnob from "./images/hobnob.png";
import home from "./images/longwayhome.png";

const Portfolio = () => {
  const projects: {
    projectName: string;
    projectSummary: string;
    projectImage: StaticImageData;
    technologies: Array<string>;
  }[] = [
    {
      projectName: "Game Review Server",
      projectSummary:
        "A server application to provide a RESTful API. Handles CRUD operations to Games Review front-end",
      projectImage: server,
      technologies: [
        "Nodejs",
        "Express",
        "Javascript",
        "PSQL",
        "Jest",
        "Supertest",
      ],
    },
    {
      projectName: "Game Review frontend",
      projectSummary:
        "A server application to provide a RESTful API. Handles CRUD operations to Games Review front-end",
      projectImage: games,
      technologies: ["Reactjs", "Javascript", "Tailwind", "Axios", "HTML5"],
    },
    {
      projectName: "Hobnob Game",
      projectSummary:
        "A silly game that works in a similar way to Cookie Clicker. Please forgive the absolutelu terrible UI here... we had a small challenge in our seminar group to see who could make the loudest one possible",
      projectImage: hobnob,
      technologies: ["Reactjs", "Javascript", "HTML5", "CSS3"],
    },
    {
      projectName: "The Long Way Home",
      projectSummary:
        "An app that helps people explore. Take a point A and B, and find various points of interest that would be on the way and route to them",
      projectImage: home,
      technologies: [
        "Dart",
        "Flutter",
        "Firebase Authentication",
        "Nodejs",
        "Express",
        "Mongoose",
        "mongoDB",
      ],
    },
  ];

  return (
    <section className=" h-fit bg-background">
      <h2 className="pt-16 text-textColour text-center text-xl">Portfolio </h2>

      {projects.map((project) => {
        return (
          <section>
            <article className="m-4">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-menuColour dark:border-secondaryText">
                <div className="">
                  <Image
                    src={project.projectImage}
                    alt="project"
                    className="w-64 h-64 mx-auto my-auto "
                  />
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-textColour">
                      {project.projectName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-secondaryText dark:text-gray-400">
                    {project.projectSummary}
                  </p>
                  <section className="flex flex-row flex-wrap">
                    {project.technologies.map((tech) => {
                      return (
                        <span className="bg-textColour text-menuColour text-xs font-medium mb-2 mr-2 px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      );
                    })}
                  </section>
                  <Link
                    href=""
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-textColour bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </section>
        );
      })}
    </section>
  );
};
export default Portfolio;
