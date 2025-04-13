"use client";

import { Description } from "@/components/description";
import { Heading } from "@/components/heading";
import { WhileInView } from "@/components/while-in-view";

export const MyJourney = () => {
  return (
    <article className="mt-14">
      <Heading label="My Journey" className="text-center" elem="h2" />
      <WhileInView
        y={30}
        scale={0.9}
        delay={0.2}
        className="mt-5 rounded-lg border bg-secondary/20 p-5 text-muted-foreground shadow"
      >
        <Description animation={false}>
          I am a highly motivated Full Stack Web Developer with 3 years of
          hands-on experience building dynamic and responsive web applications.
          My expertise spans across both frontend and backend development,
          allowing me to create seamless and efficient digital experiences. On
          the frontend, I have a strong command of HTML, CSS, and Tailwind CSS,
          and I&apos;m proficient in modern JavaScript frameworks and libraries
          like React, Next.js, and TypeScript. For animations and UI
          interactions, I frequently utilize tools such as Framer Motion and
          GSAP to deliver smooth and engaging interfaces that enhance user
          experience. On the backend, I have built robust APIs and server-side
          logic using Node.js and Express, integrating them with various
          databases like MongoDB and MySQL to manage and store data securely and
          efficiently. Over the course of my career, I have successfully
          designed, developed, and deployed a wide variety of full stack
          projects. These include e-commerce platforms with secure payment
          integration, interactive social media applications, responsive
          personal portfolios, and high-conversion landing pages for marketing
          campaigns. In addition to my technical skills, I am deeply passionate
          about continuous learning and personal growth within the ever-evolving
          tech industry. I actively explore emerging technologies and
          frameworks, aiming to stay ahead of trends and incorporate the latest
          best practices into my work. I&apos;m currently pursuing a degree in
          Computer Science, which complements my practical experience and helps
          me deepen my theoretical understanding of computing systems,
          algorithms, and software engineering principles. I approach every
          project with creativity, attention to detail, and a problem-solving
          mindset, striving to deliver clean, maintainable code and outstanding
          user experiences. As a lifelong learner, I am always open to new
          challenges and excited to collaborate with other developers to build
          innovative and impactful digital products.
        </Description>
      </WhileInView>
    </article>
  );
};
