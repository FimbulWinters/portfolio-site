export default function Technology() {
  const langauges = [
    "Javascript",
    "PHP",
    "Java(basic working knowledge)",
    "Dart",
  ];
  const frontEnd = [
    "React",
    "Next js",
    "HTML 5",
    "CSS3",
    "Sass/ SCSS",
    "CSS Frameworks(inc Bulma and Tailwind",
    "Flutter",
  ];
  const backEnd = [
    "Node js",
    "Express",
    "SQL (including mariaDB and PSQL)",
    "MongoDB",
  ];
  const others = ["Jest", "Firebase authentication", "Mongoose"];

  return (
    <section className="ml-2">
      <h2 className="text-textColour text-center mt-4 underline">
        Technologies
      </h2>
      <section className="grid grid-cols-2 gap-4 m-2">
        <section>
          <h3 className="text-textColour">Languages</h3>
          <ul className="mb-2 list-disc list-inside">
            {langauges.map((langauge) => {
              return <li className="text-secondaryText text-xs">{langauge}</li>;
            })}
          </ul>
        </section>
        <section>
          <h3 className="text-textColour">Front End </h3>
          <ul className="mb-2 list-disc list-inside">
            {frontEnd.map((tech) => {
              return <li className="text-secondaryText text-xs">{tech}</li>;
            })}
          </ul>
        </section>
        <section>
          <h3 className="text-textColour">Languages</h3>
          <ul className="mb-2 list-disc list-inside">
            {backEnd.map((tech) => {
              return <li className="text-secondaryText text-xs">{tech}</li>;
            })}
          </ul>
        </section>
        <section>
          <h3 className="text-textColour">Languages</h3>
          <ul className="mb-2 list-disc list-inside">
            {others.map((other) => {
              return <li className="text-secondaryText text-xs">{other}</li>;
            })}
          </ul>
        </section>
      </section>
    </section>
  );
}
