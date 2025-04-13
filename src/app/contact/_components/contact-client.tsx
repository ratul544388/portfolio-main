"use client";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { Heading } from "@/components/heading";
import { ContactInformation } from "./contact-information";

export const ContactClient = () => {
  return (
    <Container elem="main" className="flex flex-col items-center py-12">
      <Heading label="Contact me" color="primary" />
      <Description delay={0.2} className="mt-3 text-center">
        Have a question or want to work together? Feel free to reach out!
      </Description>
      <div className="mt-8 flex w-full flex-col gap-12 lg:flex-row">
        <ContactInformation />
        <ContactForm animationDelay={0.4} />
      </div>
    </Container>
  );
};
