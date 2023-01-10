import Image from "next/image";
import photo from "./Images/alex+Alex_LochGarten_0215.jpg";

const AboutMe = () => {
  return (
    <section>
      <h2 className="pt-24 mb-4 text-textColour text-center text-xl">
        About Me
      </h2>

      <div className="flex">
        <Image
          src={photo}
          alt="me"
          className="w-64 h-64 mx-auto border rounded-full object-cover "
        />
      </div>
      <article className="m-4">
        <p className="text-sm text-textColour">Write about me here...</p>
      </article>
    </section>
  );
};
export default AboutMe;
