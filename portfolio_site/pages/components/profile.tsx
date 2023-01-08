import Image from "next/image";
import profile from "./images/profile.png";

export default function Profile() {
  return (
    <section className="flex justify-center mt-4">
      <div className="border-2 border-menuColour w-1/2 h-[50vw] rounded-full align-middle">
        <Image src={profile} alt="me" quality={100} />
      </div>
    </section>
  );
}
