import { AboutMe } from "@/app/(home)/_components/about-me/index";
import { Intro } from "@/app/(home)/_components/intro";
import { Contact } from "@/components/contact";
import { Reviews } from "@/components/reviews";
import { Skills } from "@/components/skills";
import { LatestProjects } from "./_components/latest-projects";

const Home = () => {
  return (
    <main>
      <Intro />
      <AboutMe />
      <LatestProjects />
      <Reviews />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
