import { AboutMe } from "@/app/(home)/_components/about-me/index";
import { Intro } from "@/app/(home)/_components/intro";
import { Contact } from "@/components/contact";
import { Reviews } from "@/components/reviews";
import { Skills } from "@/app/(home)/_components/skills/skills";
import { LatestProjects } from "./_components/latest-projects";

const Home = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <LatestProjects />
      <Reviews />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
