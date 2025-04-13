"use client";
import { sendEmail } from "@/actions/send-mail";
import { useToast } from "@/hooks/use-toast";
import { ContactSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosSend } from "react-icons/io";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { WhileInView } from "./while-in-view";
import { cn } from "@/lib/utils";

export const ContactForm = ({
  animationDelay,
  className,
}: {
  animationDelay?: number;
  className?: string;
}) => {
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
    <WhileInView
      y={20}
      delay={animationDelay}
      className={cn("w-full max-w-[600px] mx-auto bg-secondary/20 rounded-lg border px-6 py-10", className)}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-8"
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
            <IoIosSend className="size-5" />
            Submit
          </Button>
        </form>
      </Form>
    </WhileInView>
  );
};
