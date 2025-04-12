import { ArrowDown } from "lucide-react";
import { Heading } from "../../../../components/heading";
import { RevealAnimation } from "../../../../components/reveal-animation";
import Link from "next/link";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "@/lib/utils";
import { WhileInView } from "../../../../components/while-in-view";

const HEADING = "I Build Full Stack Web Application with React & Next.Js.";
const DESCRIPTION =
  "I'm a Full Stack Web Developer with 3 years of experience. I'm proficient in both frontend and backend technologies, including HTML, CSS, Tailwind CSS, React, Next.js, TypeScript, JavaScript, Framer Motion, GSAP, MongoDB, MySQL, Express, Node.js. I've built numerous full stack websites, such as e-commerce platforms, social media sites, portfolios, and landing pages. I'm passionate about learning new technologies to enhance my skills.";

export const TextContainer = () => {
  return (
    <>
      <p className="font-gupter">
        <RevealAnimation color="white">About me</RevealAnimation>
      </p>
      <Heading aria-label={HEADING}>
        <RevealAnimation>I Build&nbsp;</RevealAnimation>
        <RevealAnimation color="primary" delay={0.2}>
          Full Stack&nbsp;
        </RevealAnimation>
        <br />
        <RevealAnimation>Web Application with&nbsp;</RevealAnimation>
        <br />
        <RevealAnimation color="primary">React & Next.Js&nbsp;</RevealAnimation>
      </Heading>
      <div className="mt-8 flex flex-col font-chakra_petch lg:ml-[430px]">
        <RevealAnimation
          aria-label={DESCRIPTION}
          color="white"
          className="text-muted-foreground"
        >
          {DESCRIPTION}
        </RevealAnimation>
        <WhileInView className="mx-auto mt-6 lg:mx-0 lg:ml-auto" y={30}>
          <Link
            href="/ratul.cv.pdf"
            target="_blank"
            download
            className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}
          >
            Download CV
            <ArrowDown className="size-4 animate-bounce" />
          </Link>
        </WhileInView>
      </div>
    </>
  );
};
