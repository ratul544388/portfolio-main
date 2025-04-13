import { Description } from "@/components/description";
import { Heading } from "../../../../components/heading";
import { WhileInView } from "@/components/while-in-view";

const DESCRIPTION =
  "I'm a Full Stack Web Developer with 3 years of experience. I'm proficient in both frontend and backend technologies, including HTML, CSS, Tailwind CSS, React, Next.js, TypeScript, JavaScript, Framer Motion, GSAP, MongoDB, MySQL, Express, Node.js. I've built numerous full stack websites, such as e-commerce platforms, social media sites, portfolios, and landing pages. I'm passionate about learning new technologies to enhance my skills.";

export const TextContainer = () => {
  return (
    <div className="text-center">
      <WhileInView elem="p" x={-20} className="font-gupter">
        About me
      </WhileInView>
      <Heading
        className="mt-3"
        label={[
          { text: "I build" },
          { text: "Full Stack", lineBreak: true, color: "primary", delay: 0.2 },
          { text: "Web Application with", lineBreak: true },
          { text: "React & Next.Js", color: "primary" },
        ]}
      />
      <Description className="mt-5">{DESCRIPTION}</Description>
    </div>
  );
};
