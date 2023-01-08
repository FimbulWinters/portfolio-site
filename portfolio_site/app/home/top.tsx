import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import github from "../images/github-mark-white.svg";
import LinkedIn from "../images/linkedin(1).svg";

export default function Top() {
  return (
    <section className="flex flex-col justify-center items-center h-1/2">
      <h1 className="text-3xl mt-16 mb-6 text-textColour">Alex Winters</h1>
      <p className="text-center text-sm text-secondaryText m-3">
        Following my passion for technology by changing to a career in software
        development.
      </p>
      <p className="text-center text-sm m-3 text-secondaryText">
        I’m an ex-probation oﬃcer and I can bring creative problem solving,
        transferable skills and a desire to keep developing to your company.
      </p>
      <section className="flex flex-row space-x-4 mt-4 colour-secondaryText">
        <Image src={github} alt="github logo" className="w-6" />
        <Image src={LinkedIn} alt="linked in logo" />
      </section>
    </section>
  );
}
