import Profile from "./profile";
import Technology from "./technology";
import Top from "./top";

export default function Home() {
  return (
    <section>
      <section className=" h-screen bg-background">
        <section className="h-4/5">
          <Top />
          <Profile />
          <Technology />
        </section>
      </section>
    </section>
  );
}
