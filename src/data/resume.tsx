import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "praneet Suyal",
  initials: "DV",
  url: "https://praneetsuyal.netlify.app/",
  location: " Thane, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Aspiring Software Engineer. I love building things and helping people.",
  summary:
    "I'm a Full Stack Developer with a strong eagerness to learn and grow. Currently, I'm expanding my skillset by exploring open-source projects and diving into DevOps practices, focusing on tools like Kubernetes, Docker, and AWS.",
  avatarUrl: "/me.png",
  skills: [
    "C++",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Docker",
    "MongoDB",
    "Kubernetes",
    "Angular",
    "C#",
    ".NET Core",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prs2002",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/praneetsuyal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/wtf_prs",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology - Chennai",
      href: "https://chennai.vit.ac.in/",
      degree: "Bachelors in Technology (B. Tech)",
      logoUrl: "/vit.png",
      start: "2019",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "tech Emporium",
      href: "https://techemporium.onrender.com/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Built a feature-rich e-commerce platform with features like a shopping cart(Redux for state management), secure PayPal payment integration, user reviews and ratings, and more. Explore the full experience and try a demo purchase",
      technologies: [
        "React.js",
        "Node.js",
        "Redux",
        "Material icon",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://techemporium.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prs2002/eCommerce-MERN-prs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/techEmporium.png",
      video:
        "",
    },
    {
      title: "Video call app",
      href: "https://github.com/prs2002/webrtc-video-chat",
      dates: "Dec 2024 - Jan2025",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Socket.io",
        "webRTC",
        "Node.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/prs2002/webrtc-video-chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/videoCall.png",
      video: "",
    },
    {
      title: "polyEms",
      href: "https://llm.report",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "PolyLLMs: A cutting-edge chatbot , enabling you to explore, chat, and experience the capabilities of various large language models seamlessly.",
      technologies: [
        "React",
        "Node.js",

      ],
      links: [
        {
          type: "Website",
          href: "https://polyEms.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prs2002/polyEms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/llmHub.png",
      video: "",
    },
    {
      title: "forex-rates",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Built a simple and intuitive currency converter with React, allowing users to easily convert between various world currencies.",
      technologies: [
        "React",
        "Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://prs2002.github.io/forex-rates/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prs2002/forex-rates/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/forex.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
