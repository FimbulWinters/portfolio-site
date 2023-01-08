import Navigation from "./components/nav";
import Profile from "./components/profile";
import Technology from "./components/technology";
import Top from "./components/top";

export default function Home() {
  return (
    <section className=" h-screen bg-background">
      <header>
        <Navigation />
      </header>
      <body className="h-4/5 bg-background">
        <Top />
        <Profile />
        <Technology />
      </body>
      <footer className="absolute bottom-0"></footer>
    </section>
  );
}
