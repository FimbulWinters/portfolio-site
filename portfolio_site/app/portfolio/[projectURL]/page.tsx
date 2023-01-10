type params = {
  params: any;
  projectURL: string;
};

const ProjectInfo = ({ params }: params) => {
  return (
    <section className="">
      <p>hello from {params.projectURL} </p>
    </section>
  );
};
export default ProjectInfo;
