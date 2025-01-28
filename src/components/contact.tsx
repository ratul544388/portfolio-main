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
import { useToast } from "@/hooks/use-toast";
import { ContactSchema } from "@/validations";
import { Mail, MousePointer2 } from "lucide-react";
import { useTransition } from "react";
import { Container } from "./container";
import { RevealedAnimatedText } from "./revealed-animated-text";
import { SectionHeading } from "./section-heading";
import { myEmail } from "@/constants";
import { WhileInView } from "./while-in-view";

export const Contact = () => {
  const DESCRIPTION =
    "Like what see? Have a project you'd like to talk about? Want to ask me a personal question?";

  return (
    <section
      id="contact"
      className="scroll-margin-top mt-16 bg-foreground text-center text-background"
      style={{ clipPath: "polygon(11% 4%, 100% 0, 100% 100%, 0 93%, 0 15%)" }}
    >
      <Container className="flex flex-col items-center py-16">
        <SectionHeading icon={Mail}>Contact</SectionHeading>
        <h2 className="mt-7 flex" aria-label={myEmail}>
          <RevealedAnimatedText
            color="primary"
            className="sm:text-4xl text-2xl"
          >
            ratulislam544388
          </RevealedAnimatedText>
          <RevealedAnimatedText
            color="background"
            delay={0.21}
            className="xs:text-4xl text-2xl"
          >
            @gmail.com
          </RevealedAnimatedText>
        </h2>
        <p aria-label={DESCRIPTION} className="mt-3">
          <RevealedAnimatedText color="background" type="paragraph">
            {DESCRIPTION}
          </RevealedAnimatedText>
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

  return (
    <WhileInView y={50} className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-14 flex w-full mx-auto max-w-[600px] flex-col gap-8"
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
};
