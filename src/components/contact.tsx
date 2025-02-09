"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendEmail } from "@/actions/send-mail";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { myEmail } from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { ContactSchema } from "@/validations";
import { Mail, MousePointer2 } from "lucide-react";
import { useMemo, useTransition } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { RevealAnimation } from "./reveal-animation";
import { SectionHeading } from "./section-heading";
import { WhileInView } from "./while-in-view";

const DESCRIPTION =
  "Like what see? Have a project you'd like to talk about? Want to ask me a personal question?";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-margin-top mt-16 bg-background-2 text-center text-white"
      style={{ clipPath: "polygon(11% 4%, 100% 0, 100% 100%, 0 93%, 0 15%)" }}
    >
      <Container color="primary" className="flex flex-col items-center py-16">
        <SectionHeading color="primary" icon={Mail}>
          Contact
        </SectionHeading>
        <Heading elem="h3" className="mt-7 flex" aria-label={myEmail}>
          <RevealAnimation color="primary">ratulislam544388</RevealAnimation>
          <RevealAnimation color="white" delay={0.21}>
            @gmail.com
          </RevealAnimation>
        </Heading>
        <p aria-label={DESCRIPTION} className="mt-3">
          <RevealAnimation
            color="white"
            className="text-gray-400 dark:text-muted-foreground"
          >
            {DESCRIPTION}
          </RevealAnimation>
        </p>
        <ContactForm />
      </Container>
    </section>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    startTransition(() => {
      sendEmail(values).then(({ error, success }) => {
        if (success) {
          toast({
            title: "Email Sent Successfully!",
            description:
              "Thank you for reaching out. I'll get back to you within 24 hours.",
          });
        } else if (error) {
          toast({
            title: "An error occured while sending main",
            description: "Please try again.",
          });
        }
      });
    });
  }

  const renderedForm = useMemo(() => {
    return (
      <WhileInView y={50} className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mt-14 flex w-full max-w-[600px] flex-col gap-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input label="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="resize-none pr-40"
                      label="Message"
                      {...field}
                      rows={8}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="ml-auto" disabled={isPending}>
              Send
              <MousePointer2 className="size-5 rotate-[135deg]" />
            </Button>
          </form>
        </Form>
      </WhileInView>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return renderedForm;
};
