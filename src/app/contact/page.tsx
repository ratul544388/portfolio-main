import { Metadata } from "next";
import { ContactClient } from "./_components/contact-client";
export const generateMetadata = (): Metadata => {
  return {
    title: "Contact",
  };
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
