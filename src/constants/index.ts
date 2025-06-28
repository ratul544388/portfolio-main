import {
  FaAward,
  FaBriefcase,
  FaCertificate,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLightbulb,
  FaLinkedin,
  FaPhoneAlt,
  FaRocket,
  FaTwitter,
  FaUsers,
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
import { Briefcase } from "lucide-react";
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
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "Stripe",
      "Next.js",
    ],
    description:
      "Glamify is a full-featured e-commerce platform tailored for selling clothing items. Users can browse a variety of apparel, choose sizes and colors, and complete purchases through a streamlined shopping experience with Stripe payment integration.",
    features: [
      "User authentication with secure login and registration",
      "Browse clothing by category, size, color, and more",
      "Detailed product pages with multiple variant options",
      "Shopping cart functionality with quantity adjustments",
      "Stripe-powered payment gateway for secure checkout",
      "User dashboard to manage orders and view cart history",
      "Admin dashboard for managing products, sales, and revenue insights",
    ],
  },
  {
    name: "Digital Marketplace",
    image: digitalMarketplaceImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/digital-marketplace",
    deployedLink: "https://digital-marketplace-rouge.vercel.app",
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "TypeScript",
      "ShadCN UI",
      "Tailwind CSS",
      "Stripe",
      "Prisma",
    ],
    description:
      "The Digital Marketplace is a multi-vendor platform for buying and selling digital products like icons, illustrations, videos, and other creative assets. Users can register as sellers or buyers, upload digital content, and manage sales through intuitive dashboards.",
    features: [
      "Role-based access for buyers and sellers",
      "Sellers can upload, manage, and monetize digital assets",
      "Buyers can purchase and download digital products",
      "Integrated Stripe payment system for instant checkout",
      "Seller dashboard to track earnings, products, and transactions",
      "Buyer dashboard to view purchase history and access downloads",
      "Admin panel to oversee listings, users, and platform activity",
    ],
  },
  {
    name: "Waffles",
    image: wafflesImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/waffle",
    deployedLink: "https://waffle-two.vercel.app/",
    technologies: ["HTML", "Tailwind CSS", "TypeScript", "Next.js"],
    description:
      "Waffles is a food ordering website tailored for a local waffles and drinks shop. Customers can browse the available menu items and place their orders through a real-time chat-based interface that notifies the shop owner for fulfillment.",
    features: [
      "Clean and responsive frontend built with HTML, Tailwind CSS, and Next.js",
      "Users can select waffles or drinks from the menu",
      "Integrated chat feature to place orders by messaging the shop owner",
      "Real-time order notifications for the shop admin",
      "Manual order confirmation and delivery handling by the store owner",
    ],
  },
  {
    name: "Gym Admin Management",
    image: gymImage,
    category: "management",
    githubLink: "https://github.com/ratul544388/gym-admin-management",
    deployedLink: "https://gym-admin-management.vercel.app/",
    technologies: ["TypeScript", "React", "MongoDB", "Prisma", "Tailwind CSS"],
    description:
      "Gym Admin Management is a full-featured admin dashboard designed for managing gym memberships, plans, and revenue. Admins can manage members, assign plans, and track overall business performance, making it ideal for gym operators.",
    features: [
      "Full CRUD operations for managing gym members",
      "Add, update, or delete membership plans",
      "Assign specific plans to members during registration",
      "Track monthly revenue and expenses with visual stats",
      "Renew membership and monitor member activity",
      "User-friendly UI for efficient management",
    ],
  },
  {
    name: "Twitter Clone",
    image: twitterCloneImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/twitter-clone",
    deployedLink: "https://twitter-clone-next-15.vercel.app/",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "SQL",
      "Prisma",
      "Tanstack Query",
      "Tailwind CSS",
    ],
    description:
      "Twitter Clone is a feature-rich social media application inspired by the core functionalities of real Twitter. It allows users to post, interact, and engage with tweets just like the original platform.",
    features: [
      "User registration and authentication",
      "Create, update, and delete tweets",
      "Like and bookmark other users’ tweets",
      "View all tweets in a public timeline",
      "User profiles with tweet history",
      "Fully responsive and interactive UI",
      "Built with Tanstack Query for efficient data handling",
    ],
  },
  {
    name: "Mern-blog-app",
    image: mernBlogAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/mern-blog-app",
    deployedLink: "https://mern-blog-app-kij0.onrender.com/",
    technologies: ["HTML", "JavaScript", "Tailwind CSS", "MongoDB"],
    description:
      "MERN Blog App is a full-stack blogging platform where users can create and publish posts, view others' content, and engage in discussions through threaded comments. It provides a social blogging experience with powerful search and interaction capabilities.",
    features: [
      "User authentication and post creation",
      "View all published blog posts in reverse chronological order",
      "Commenting system with support for nested replies",
      "Search functionality to filter and locate posts",
      "Post view counters and metadata display",
      "Responsive and mobile-friendly design",
    ],
  },
  {
    name: "Food Ordering App",
    image: foodOrderingAppImage,
    category: "ecommerce",
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Next.js",
      "Stripe",
    ],
    description:
      "Food Ordering App is a modern web application that allows users to browse menus and order food online. It offers an intuitive user experience with real-time cart updates and a secure checkout process using Stripe.",
    features: [
      "Real-time food menu display with images and pricing",
      "Add-to-cart and remove-from-cart functionality",
      "User login and secure order management",
      "Stripe integration for seamless payment processing",
      "Order tracking and confirmation pages",
      "Responsive layout optimized for food delivery experiences",
    ],
  },
  {
    name: "Blog App",
    image: blogAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
    technologies: ["TypeScript", "React", "MongoDB", "Node.js", "Tailwind CSS"],
    description:
      "This Blog App is a feature-rich blogging platform built with TypeScript and the MERN stack. It allows users to publish blog posts, explore content written by others, and interact via comments—delivering a clean and professional blog experience.",
    features: [
      "Type-safe blog creation and management using TypeScript",
      "Create, read, update, and delete blog posts",
      "Engage with content through comments",
      "Responsive and accessible UI for all device types",
      "Efficient backend with MongoDB and Node.js for scalable content delivery",
    ],
  },
  {
    name: "Doctor Booking App",
    image: doctorBookingAppImage,
    category: "booking",
    githubLink: "https://github.com/ratul544388/Doctor-Booking-App",
    deployedLink: "https://doctor-booking-app.vercel.app",
    technologies: ["HTML", "Tailwind CSS", "TypeScript", "MongoDB", "Prisma"],
    description:
      "Doctor Booking App is a medical appointment platform that allows users to browse available doctors and seamlessly book appointments based on their preferred schedule and specialization.",
    features: [
      "Doctor listing with details such as specialization and availability",
      "Appointment booking form with date and time selection",
      "User-friendly booking process for patients",
      "Responsive and intuitive UI",
      "Backend integration using MongoDB and Prisma",
    ],
  },
  {
    name: "Portfolio 1",
    image: portfolio_1_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-1",
    deployedLink: "https://ratulcodes-1.vercel.app",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Portfolio 1 is a personal web portfolio designed to showcase my skills, projects, and development experience in a clean and animated layout.",
    features: [
      "Interactive animations using Framer Motion",
      "Responsive design across all devices",
      "Dedicated sections for skills, projects, and contact",
      "Modern, minimalistic UI with smooth transitions",
      "Built with React and TypeScript for maintainability",
    ],
  },
  {
    name: "Portfolio 2",
    image: portfolio_2_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-2",
    deployedLink: "https://ratulcodes-2.vercel.app",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Portfolio 2 is an upgraded animated portfolio website featuring elegant transitions and structured content to present my development capabilities effectively.",
    features: [
      "Animated transitions and reveal effects using Framer Motion",
      "Mobile-first responsive layout",
      "Project showcase with links to live demos and GitHub",
      "Dark mode friendly UI",
      "Built with React and TypeScript for a modern tech stack",
    ],
  },
  {
    name: "Portfolio 3",
    image: portfolio_3_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-3",
    deployedLink: "https://ratulcodes-3.vercel.app",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Portfolio 3 is a polished and animated personal portfolio website designed to showcase my projects and skills with smooth transitions and a modern layout.",
    features: [
      "Smooth animations powered by Framer Motion",
      "Clean and responsive design for desktop and mobile",
      "Sections for skills, projects, and contact info",
      "Built with React and TypeScript for scalable code",
      "Easy navigation with an intuitive UI",
    ],
  },
  {
    name: "Portfolio 4",
    image: portfolio_4_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-4",
    deployedLink: "https://ratulcodes-4.vercel.app",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Portfolio 4 features a sleek, animated design that highlights my development skills and projects with engaging motion effects and a user-friendly layout.",
    features: [
      "Engaging animations and scroll-triggered effects",
      "Mobile-first responsive design",
      "Project showcase with direct links",
      "Clean codebase using React and TypeScript",
      "Accessible and intuitive navigation",
    ],
  },
  {
    name: "Portfolio 5",
    image: portfolio_5_image,
    category: "portfolio",
    githubLink: "https://github.com/ratul544388/portfolio-5",
    deployedLink:
      "https://ratulcodes-5.vercel.apphttps://ostad-assignment-1.onrender.com",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Portfolio 5 is my latest animated portfolio project showcasing my development work with modern UI/UX patterns and smooth interactive animations.",
    features: [
      "Modern and animated UI with Framer Motion",
      "Fully responsive across all devices",
      "Comprehensive sections for projects and skills",
      "Developed using React and TypeScript",
      "Optimized for performance and accessibility",
    ],
  },
  {
    name: "Calm Landing Page",
    image: calmLandingPageImage,
    category: "landing page",
    githubLink: "https://github.com/ratul544388/calm-landing-page",
    deployedLink: "https://calm-landing-page.vercel.app/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Calm Landing Page is a clean, modern landing page designed to provide a peaceful and engaging introduction to a product or service.",
    features: [
      "Smooth animations using Framer Motion",
      "Responsive design for all device sizes",
      "Clear call-to-action sections",
      "Minimalistic UI focused on user experience",
      "Built with React and TypeScript for maintainability",
    ],
  },
  {
    name: "University Landing Page",
    image: universityLandingPageImage,
    category: "landing page",
    githubLink: "https://github.com/ratul544388/university-landing-page",
    deployedLink:
      "https://university-landing-page-7jiet8en9-ratul544388.vercel.app/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "University Landing Page is a professional and informative landing site designed to showcase a university’s offerings and campus information with elegant animations.",
    features: [
      "Animated content sections using Framer Motion",
      "Mobile-friendly responsive layout",
      "Detailed sections about courses and campus life",
      "Easy navigation and clean UI design",
      "Built with React and TypeScript for scalability",
    ],
  },
  {
    name: "Grass Root Landing Page",
    image: grassRootLandingPageImage,
    category: "landing page",
    githubLink:
      "https://github.com/ratul544388/grass-root-farmers-landing-page",
    deployedLink: "https://grass-root-farmers-landing-page.vercel.app/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "TypeScript",
    ],
    description:
      "Grass Root Landing Page is a vibrant, engaging landing page focused on grassroots farmers and agricultural initiatives, designed with smooth animations and clear information hierarchy.",
    features: [
      "Dynamic animations via Framer Motion",
      "Fully responsive across devices",
      "Content focused on agriculture and farmer services",
      "User-friendly interface with intuitive navigation",
      "Developed using React and TypeScript",
    ],
  },
  {
    name: "Car Booking App",
    image: carBookingAppImage,
    category: "booking",
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"],
    description:
      "Car Booking App allows users to browse and view car details fetched from an external API, providing a simple interface to explore available vehicles.",
    features: [
      "Fetches car data from a public API",
      "Displays detailed information about each car",
      "Clean and responsive UI built with React",
      "Basic navigation and user interaction",
      "Built as an early project to practice React fundamentals",
    ],
  },
  {
    name: "Mern Note App",
    image: mernNoteAppImage,
    category: "social media",
    githubLink: "https://github.com/ratul544388/mern-note-app",
    deployedLink: "https://mern-note-app-qyl8.onrender.com/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "MongoDB",
      "JavaScript",
      "Node.js",
      "Redux",
    ],
    description:
      "Mern Note App is a simple note-taking application built with the MERN stack, allowing users to create, update, delete, and like notes.",
    features: [
      "CRUD operations for notes",
      "User authentication and authorization",
      "State management using Redux",
      "Responsive design with Tailwind CSS",
      "Built to learn full-stack development with MERN",
    ],
  },
  {
    name: "Simple Projects",
    image: simpleProjectsImage,
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    description:
      "Simple Projects is a collection of beginner-friendly mini applications and games such as ToDo List, Hangman, Country Capital Quiz, and Tic-Tac-Toe.",
    features: [
      "Multiple small games and utility apps",
      "Practices core React concepts and JavaScript",
      "Responsive and straightforward UI",
      "Great for learning and experimentation",
      "Includes popular beginner projects like Tic-Tac-Toe and Hangman",
    ],
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

export const experienceCardData = [
  {
    label: "Years of Experience",
    icon: FaAward,
    countValue: "3+",
  },
  {
    label: "Completed Projects",
    icon: Briefcase,
    countValue: "33+",
  },
  {
    label: "Satisfied Clients",
    icon: FaUsers,
    countValue: "11+",
  },
  {
    label: "Certificates Earned",
    icon: FaCertificate,
    countValue: "3+",
  },
] as const;

export const timelineData = [
  {
    title: "Completed Higher Secondary Certificate (HSC)",
    date: "July 2021",
    description:
      "Graduated from Sheikh Burhanuddin Post Graduate College, majoring in Science. Built a strong academic foundation in mathematics, physics, and computer science, developing problem-solving abilities and analytical skills that later fueled my passion for full-stack web development and modern software technologies.",
  },
  {
    title: "Started BSc in Computer Science & Engineering",
    date: "Dec 2022",
    description:
      "Began pursuing a Bachelor’s degree in Computer Science to deepen my knowledge of programming, data structures, algorithms, and software engineering principles. Focused on enhancing both theoretical understanding and practical experience in web development, database systems, and cloud-based solutions.",
  },
  {
    title: "Began Full-Stack Web Development Journey",
    date: "Feb 2022",
    description:
      "Started building full-stack web applications, mastering technologies like React, Next.js, TypeScript, Node.js, and MongoDB. Focused on creating scalable, responsive, and modern web apps while learning about API development, backend systems, authentication, and user-centered design principles.",
  },
  {
    title: "Developed Gym Management Website",
    date: "Mar 2024",
    description:
      "Designed and built a complete gym management platform for Akash Fitness Studio. Implemented features for member registration, subscription management, revenue tracking, and personalized fitness plans using modern web technologies to improve business operations and user experience.",
  },
  {
    title: "Built Custom Food Ordering Website",
    date: "Sep 2024",
  },
  {
    title: "Designed Business Portfolio Website",
    date: "Jan 2025",
    description:
      "Developed a modern, fully responsive portfolio website for a business to enhance its digital identity. Focused on clean UI/UX design, fast performance, SEO optimization, and scalability, helping the brand create a strong online presence and attract potential clients.",
  },
] as const;
