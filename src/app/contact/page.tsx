import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
  return {
    title: "Contact",
  };
};

const ContactPage = () => {
  return (
    <Container elem="main" className="py-12">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mt-3 text-center text-muted-foreground">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <div className="mt-8 flex gap-8">
        <section className="rounded-lg border bg-secondary/20">
          <div className="p-4">
            <h2 className="text-3xl font-bold">Contact information</h2>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out through any of these channels
            </p>
            <span className="h-1 w-full block border-t-[1.5px] my-5 border-dashed"/>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default ContactPage;
