"use client";

import { myEmail } from "@/constants";
import { ContactForm } from "./contact-form";
import { Container } from "./container";
import { Description } from "./description";
import { Heading } from "./heading";

export const Contact = () => {
  return (
    <section
      className="mt-16 bg-background-2 text-center pt-20 pb-28"
      style={{ clipPath: "polygon(11% 4%, 100% 0, 100% 100%, 0 93%, 0 15%)" }}
    >
      <Container color="primary" className="flex flex-col items-center">
        <Heading label="Contact" />
        <Heading
          label={myEmail}
          className="mt-2"
          elem="h3"
          color="primary"
          delay={0.2}
        />
        <Description className="mt-2 mb-12" delay={0.4}>
          Like what see? Have a project you&apos;d like to talk about? Want to
          ask me a personal question?
        </Description>
        <ContactForm className="bg-background/50"/>
      </Container>
    </section>
  );
};
