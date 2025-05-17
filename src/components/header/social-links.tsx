import { socialLinks } from "@/constants";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              className="block rounded-full p-2 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Icon className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
