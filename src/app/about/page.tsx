import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { Heading } from "@/components/heading";
import { Timeline } from "@/app/about/_components/time-line";
import { Metadata } from "next";
import Image from "next/image";
import { SkillList } from "./_components/skill-list";
import UserImage from "@/../public/user-coding.jpg";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
  };
};

const AboutPage = () => {
  return (
    <Container className="flex flex-col items-center pt-12">
      <div className="z-10 flex flex-col items-center">
        <Heading color="primary" label="About me" />
        <Description delay={0.3} className="mt-2 text-center">
          Get to know more about me, my background, and what drives my passion
          for technology and learning.
        </Description>
        <div className="mt-12 grid w-full gap-10 lg:grid-cols-2">
          <div className="relative h-[450px] w-full overflow-hidden rounded-lg border bg-secondary/40">
            <Image
              src={UserImage}
              alt="User coding"
              placeholder="blur"
              fill
              className="object-cover"
            />
          </div>
          <section>
            <Heading
              label={[
                { text: "Hello! I'm" },
                { text: "Ratul Hossain", color: "primary", delay: 0.2 },
              ]}
            />
            <Description animateFrom="top" delay={0.3} className="mt-2">
              I specialize in building responsive, full-stack web applications
              using modern technologies, constantly evolving my skills to
              deliver high-performing solutions that blend functionality,
              design, and user experience.
            </Description>
            <SkillList />
          </section>
        </div>
      </div>
      <Timeline />
    </Container>
  );
};

export default AboutPage;
