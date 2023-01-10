import Image, { StaticImageData } from "next/image";

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
    links: Array<string>;
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
      links: [
        "https://github.com/FimbulWinters/Game-server-async-await",
        "https://embarrassed-calf-lapel.cyclic.app/api",
      ],
    },
    {
      projectName: "Game Review frontend",
      projectSummary:
        "A server application to provide a RESTful API. Handles CRUD operations to Games Review front-end",
      projectImage: games,
      technologies: ["Reactjs", "Javascript", "Tailwind", "Axios", "HTML5"],
      links: [
        "https://github.com/FimbulWinters/Games-Front-end",
        "https://boardgamecorner.netlify.app/home",
      ],
    },
    {
      projectName: "Hobnob Game",
      projectSummary:
        "A silly game that works in a similar way to Cookie Clicker. Please forgive the absolutelu terrible UI here... we had a small challenge in our seminar group to see who could make the loudest one possible",
      projectImage: hobnob,
      technologies: ["Reactjs", "Javascript", "HTML5", "CSS3"],
      links: [
        "https://github.com/FimbulWinters/hobnobgame/tree/main/hobnob-game",
        "https://hobnobgame.netlify.app/",
      ],
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
      links: ["https://github.com/FimbulWinters/Power-projec-FE", ""],
    },
  ];

  return (
    <section className=" h-fit bg-background">
      <h2 className="pt-24 mb-4 text-textColour text-center text-xl">
        Portfolio{" "}
      </h2>

      {projects.map((project) => {
        const projectURL = project.projectName.replace(/\s/g, "");

        return (
          <section>
            <article className="m-4">
              <div className="max-w-sm bg-menuColour border border-secondaryText rounded-lg shadow-md">
                <div className=" my-2">
                  <Image
                    src={project.projectImage}
                    alt="project"
                    className="w-64 h-64 mx-auto my-auto border-1 border-menuColour rounded-full object-cover"
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
                  <button>
                    <a
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-textColour"
                      href={project.links[0]}
                    >
                      See code on Github
                    </a>
                  </button>
                  <button>
                    <a
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-textColour"
                      href={project.links[1]}
                    >
                      See in action
                    </a>
                  </button>
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
