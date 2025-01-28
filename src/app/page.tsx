import { AboutMe } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Reviews } from "@/components/reviews";
import { Skills } from "@/components/skills";

const Home = () => {
  return (
    <main className="min-h-screen pt-20">
      <Intro />
      <AboutMe/>
      <Projects/>
      <Reviews/>
      <Skills/>
      <Contact/>
    </main>
  );
};

export default Home;
