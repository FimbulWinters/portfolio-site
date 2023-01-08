import { IconType } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

export default function Menu() {
  const buttonIcon: IconType = AiOutlineClose;
  return (
    <div className="flex">
      <div className="absolute right-0 top-0 h-screen w-32 flex flex-col bg-menuColour text-textColour shadow-lg">
        <div>
          <button className="absolute right-4 top-4">
            <AiOutlineClose />
          </button>
        </div>
        <div className="mt-8"></div>
        <i className="mt-8 ml-4">About me</i>
        <i className="mt-8 ml-4">Projects</i>
        <i className="mt-8 ml-4">CV</i>
        <i className="mt-8 ml-4">Contact</i>
      </div>
    </div>
  );
}
