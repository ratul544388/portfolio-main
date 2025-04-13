"use client";

import { Description } from "@/components/description";
import { DotSeperator } from "@/components/dot-seperator";
import { Heading } from "@/components/heading";
import { WhileInView } from "@/components/while-in-view";
import { myEmail, myPhone, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const contactMediums = [
  {
    label: "Email",
    icon: IoMail,
    value: myEmail,
    iconClassName: "text-blue-500 bg-blue-500/10",
  },
  {
    label: "Phone",
    icon: FaPhoneAlt,
    value: myPhone,
    iconClassName: "text-red-500 bg-red-500/10",
  },
  {
    label: "Location",
    icon: FaLocationDot,
    value: "Dhaka, Bangladesh",
    iconClassName: "text-green-500 bg-green-500/10",
  },
];

export const ContactInformation = () => {
  return (
    <WhileInView
      elem="section"
      y={20}
      delay={0.4}
      className="xs:min-w-[410px] rounded-lg border bg-secondary/20"
    >
      <div className="p-4">
        <Heading elem="h3" label="Contact Information"/>
        <Description className="mt-2" delay={0.2}>
          Feel free to reach out through any of these channels
        </Description>
      </div>
      <DotSeperator />
      <ul className="mt-3 space-y-4 p-4">
        {contactMediums.map(({ label, icon: Icon, value, iconClassName }) => (
          <li key={label} className="flex items-center gap-3">
            <div className={cn("rounded-full p-3", iconClassName)}>
              <Icon className="size-4" />
            </div>
            <div className="text-sm">
              <p className="font-medium">{label}</p>
              <p>{value}</p>
            </div>
          </li>
        ))}
      </ul>
      <DotSeperator />
      <div className="p-4">
        <h5 className="text-lg font-medium">Connect with me</h5>
        <ul className="mt-3 flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="block rounded-full bg-primary/10 p-3 text-primary"
              >
                <Icon className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex h-52 flex-col items-center justify-center gap-2 rounded-lg border bg-gradient-to-r from-purple-500/10 to-blue-600/10 text-muted-foreground">
          <FaLocationDot className="size-5" />
          Dhaka
        </div>
      </div>
    </WhileInView>
  );
};
