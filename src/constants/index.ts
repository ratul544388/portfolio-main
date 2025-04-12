import {
  FaBriefcase,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLightbulb,
  FaLinkedin,
  FaPhoneAlt,
  FaRocket,
  FaTwitter,
} from "react-icons/fa";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";
export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";
export const myFiverrLink = "https://www.fiverr.com/ratul544";

import blogAppImage from "@/../public/projects/blog-app.webp";
import calmLandingPageImage from "@/../public/projects/calm-landing-page.webp";
import carBookingAppImage from "@/../public/projects/car-booking-app.webp";
import digitalMarketplaceImage from "@/../public/projects/digital-marketplace.webp";
import doctorBookingAppImage from "@/../public/projects/doctor-booking-app.webp";
import foodOrderingAppImage from "@/../public/projects/food-ordering-app.webp";
import grassRootLandingPageImage from "@/../public/projects/grass-root-landing-page.webp";
import gymImage from "@/../public/projects/gym.webp";
import mernBlogAppImage from "@/../public/projects/mern-blog-app.webp";
import mernNoteAppImage from "@/../public/projects/mern-note-app.webp";
import portfolio_1_image from "@/../public/projects/portfolio-1.webp";
import portfolio_2_image from "@/../public/projects/portfolio-2.webp";
import portfolio_3_image from "@/../public/projects/portfolio-3.webp";
import portfolio_4_image from "@/../public/projects/portfolio-4.webp";
import portfolio_5_image from "@/../public/projects/portfolio-5.webp";
import shoppingAppImage from "@/../public/projects/shopping-app.webp";
import simpleProjectsImage from "@/../public/projects/simple-projects.webp";
import twitterCloneImage from "@/../public/projects/twitter-clone.webp";
import universityLandingPageImage from "@/../public/projects/university-landing-page.webp";
import wafflesImage from "@/../public/projects/waffles.webp";
import stackCardImageAnimation from "@/../public/stack-cards-images/animation.jpg";
import stackCardImagebackend from "@/../public/stack-cards-images/backend.jpg";
import stackCardImageFigma from "@/../public/stack-cards-images/figma.jpg";
import stackCardImageFullStack from "@/../public/stack-cards-images/full-stack.jpg";
import stackCardImageUILibraries from "@/../public/stack-cards-images/ui-ilbraries.jpg";

import { ProjectType } from "@/types";
import { TbBrandFiverr } from "react-icons/tb";

export const navLinks = [
  {
    icon: FaHome,
    label: "Home",
    href: "/",
  },
  {
    icon: FaBriefcase,
    label: "About",
    href: "/about",
  },
  {
    icon: FaRocket,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: FaLightbulb,
    label: "Skills",
    href: "/skills",
  },
  {
    icon: FaPhoneAlt,
    label: "Contact",
    href: "/contact",
  },
];

export const projectCategories = [
  "all projects",
  "social media",
  "ecommerce",
  "portfolio",
  "management",
  "booking",
  "landing page",
] as const;

export const socialLinks = [
  {
    label: "Github",
    icon: FaGithub,
    href: myGithubLink,
  },
  {
    label: "Linkdin",
    icon: FaLinkedin,
    href: MyLinkdinLink,
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    href: myTwitterLink,
  },
  {
    label: "Facebook",
    icon: FaFacebook,
    href: myFacebookLink,
  },
  {
    label: "Fiverr",
    icon: TbBrandFiverr,
    href: myFiverrLink,
  },
];

export const projects: ProjectType[] = [
  {
    name: "Glamify Shopping App",
    image: shoppingAppImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/ecommerce",
    deployedLink: "https://ecommerce-coral-delta.vercel.app",
    rating: 4.5,
  },
  {
    name: "Digital Marketplace",
    image: digitalMarketplaceImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/digital-marketplace",
    deployedLink: "https://digital-marketplace-rouge.vercel.app",
    rating: 4,
  },
  {
    name: "Waffles",
    image: wafflesImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/waffle",
    deployedLink: "https://waffle-two.vercel.app/",
    rating: 5,
  },
  {
    name: "Gym Admin Management",
    image: gymImage,
    category: "management",
    githubLink: "https://github.com/ratul544388/gym-admin-management",
    deployedLink: "https://gym-admin-management.vercel.app/",
    rating: 5,
  },
  {
    name: "Twitter Clone",
    image: twitterCloneImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/twitter-clone",
    deployedLink: "https://twitter-clone-next-15.vercel.app/",
    rating: 5,
  },
  {
    name: "Mern-blog-app",
    image: mernBlogAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/mern-blog-app",
    deployedLink: "https://mern-blog-app-kij0.onrender.com/",
    rating: 3.5,
  },
  {
    name: "Food Ordering App",
    image: foodOrderingAppImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
    rating: 3.5,
  },
  {
    name: "Blog App",
    image: blogAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
    rating: 3,
  },
  {
    name: "Doctor Booking App",
    image: doctorBookingAppImage,
    category: "booking",
    githubLink: "https://github.com/ratul544388/Doctor-Booking-App",
    deployedLink: "https://doctor-booking-app.vercel.app",
    rating: 3.5,
  },
  {
    name: "Portfolio 1",
    image: portfolio_1_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-1",
    deployedLink: "https://ratulcodes-1.vercel.app",
    rating: 3.5,
  },
  {
    name: "Portfolio 2",
    image: portfolio_2_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-2",
    deployedLink: "https://ratulcodes-2.vercel.app",
    rating: 4,
  },
  {
    name: "Portfolio 3",
    image: portfolio_3_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-3",
    deployedLink: "https://ratulcodes-3.vercel.app",
    rating: 5,
  },
  {
    name: "Portfolio 4",
    image: portfolio_4_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-4",
    deployedLink: "https://ratulcodes-4.vercel.app",
    rating: 3.5,
  },
  {
    name: "Portfolio 5",
    image: portfolio_5_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-5",
    deployedLink:
      "https://ratulcodes-5.vercel.apphttps://ostad-assignment-1.onrender.com",
    rating: 2.5,
  },
  {
    name: "Calm Landing Page",
    image: calmLandingPageImage,
    category: "landing page",
    githubLink: "https://github.com/ratul544388/calm-landing-page",
    deployedLink: "https://calm-landing-page.vercel.app/",
    rating: 4,
  },
  {
    name: "University Landing Page",
    image: universityLandingPageImage,
    category: "landing page",
    githubLink: "https://github.com/ratul544388/university-landing-page",
    deployedLink:
      "https://university-landing-page-7jiet8en9-ratul544388.vercel.app/",
    rating: 4,
  },
  {
    name: "Grass Root Landing Page",
    image: grassRootLandingPageImage,
    category: "landing page",
    githubLink:
      "https://github.com/ratul544388/grass-root-farmers-landing-page",
    deployedLink: "https://grass-root-farmers-landing-page.vercel.app/",
    rating: 4,
  },
  {
    name: "Car Booking App",
    image: carBookingAppImage,
    category: "booking",
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
    rating: 2,
  },
  {
    name: "Mern Note App",
    image: mernNoteAppImage,
    githubLink: "https://github.com/ratul544388/mern-note-app",
    deployedLink: "https://mern-note-app-qyl8.onrender.com/",
    rating: 2,
  },
  {
    name: "Simple Projects",
    image: simpleProjectsImage,
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
    rating: 3.5,
  },
];

export const reviews = [
  {
    name: "John Doe",
    username: "john_doe123",
    image: "/reviews/user-1.jpg",
    comment:
      "As a fellow developer, I must say your work is impressive! Your attention to detail and problem-solving skills are top-notch.",
  },
  {
    name: "Alex Johnson",
    username: "alex_johnson789",
    image: "/reviews/user-2.jpg",
    comment:
      "Your projects are inspiring! Your ability to create seamless user experiences is commendable.",
  },
  {
    name: "Jane Smith",
    username: "jane_smith456",
    image: "/reviews/user-3.jpg",
    comment:
      "Wow, your coding skills are incredible! I'm amazed at how efficiently you handle both front-end and back-end development.",
  },
  {
    name: "Emily Brown",
    username: "emily_brown321",
    image: "/reviews/user-4.jpg",
    comment:
      "Your problem-solving skills are next level! It's evident that you're dedicated to delivering high-quality work.",
  },
  {
    name: "Michael Lee",
    username: "michael_lee654",
    image: "/reviews/user-5.jpg",
    comment:
      "Impressive work, as always! Your expertise in both front-end and back-end development shines through in every project.",
  },
];

export const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Framer Motion",
  "GSAP",
  "Bootstrap",
  "Shadcn/UI",
];

export const backendSkills = [
  "NodeJS",
  "NextJS",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Drizzle",
  "HonoJS",
  "NextAuth",
  "Redux Toolkit",
  "Tanstack Query",
  "Stripe",
];

export const stackCards = [
  {
    title: "Figma to Pixel-Perfect Code",
    description:
      "I transform Figma designs into responsive, high-quality code using Tailwind CSS or standard CSS. My focus is on pixel-perfect accuracy, clean structure, and cross-device compatibility. By maintaining best coding practices, I ensure that every design translates seamlessly into a functional, fast-loading, and visually stunning user interface.",
    image: stackCardImageFigma,
  },
  {
    title: "Creating Stunning Animations",
    description:
      "Using Framer Motion and GSAP, I create smooth, engaging animations that enhance user experience. Whether it's subtle micro-interactions or complex motion effects, my animations are performance-optimized and visually appealing. I ensure fluid transitions and interactive elements that make web applications feel dynamic, intuitive, and immersive.",
    image: stackCardImageAnimation,
  },
  {
    title: "Modern UI with Top Libraries",
    description:
      "I build sleek, modern interfaces using UI libraries like ShadCN, Flowbite, and DaisyUI. These tools help me develop visually appealing, highly functional, and responsive designs. By leveraging pre-built, customizable components, I ensure fast development while maintaining a clean and user-friendly experience across different screen sizes and devices.",
    image: stackCardImageUILibraries,
  },
  {
    title: "Scalable Backend Development",
    description:
      "I develop scalable, high-performance backends using Node.js, Next.js, Express, MongoDB, PostgreSQL, Prisma, and Drizzle. My expertise lies in creating secure APIs, handling databases efficiently, and optimizing performance. I ensure seamless server-side functionality that supports fast, reliable, and maintainable web applications for various use cases.",
    image: stackCardImagebackend,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "As a full-stack developer, I build robust applications using React, Next.js, and TypeScript. I specialize in crafting responsive frontends and scalable backends, ensuring seamless user experiences. My expertise includes state management, API integrations, and database handling, allowing me to develop high-quality, end-to-end web solutions.",
    image: stackCardImageFullStack,
  },
];
