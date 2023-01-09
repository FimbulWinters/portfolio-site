import Profile from "./profile";
import Technology from "./technology";
import Top from "./top";

export default function Home() {
  return (
    <section className=" h-screen bg-background">
      <body className="h-4/5 bg-background">
        <Top />
        <Profile />
        <Technology />
      </body>
      <footer className="absolute bottom-0"></footer>
    </section>
  );
}
