import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarthak Kamble",
  initials: "SK",
  url: "https://dillion.io",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring FullStack Developer Currently Student at Symbiosis Institute of Technology. I love building things and helping people.",
  summary:
    "Aspiring Full Stack Developer and UI/UX Designer with expertise in creating intuitive, user-centric digital experiences and robust web applications. Proficient in React JS, Node.js, Express, MongoDB, and Figma, with a strong background in both front-end and back-end development. Skilled in wireframing, prototyping, and implementing design principles to deliver seamless interfaces. Successfully developed projects like a weather app inspired by the iPhone Weather app and full-stack applications such as a House Rental System and Threads clone, enhancing user experiences and optimizing functionality. Dedicated to merging design and technology to craft impactful, scalable solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "Figma",
    "Illustrator",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sarthakkamble101@gmail.com",
    tel: "+917400075175",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sarthak102",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarthak-kamble-101/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sarthakkamblex?s=21",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "sarthakkamble101@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ONGC",
      href: "https://ongcindia.com/web/eng",
      badges: [],
      location: "Mumbai",
      title: "Summer Intern",
      logoUrl: "/ongc.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "During a summer internship at ONGC in 2024, I developed an inventory management system to replace physical logbooks. The system featured functionalities such as product addition, issuance, and monthly report generation, utilizing HTML and CSS for the frontend and PHP with MySQL for backend operations.",
    },
    {
      company: "Explore It",
      badges: [],
      href: "https://exploreit.in/",
      location: "Pune",
      title: "Volunteer",
      logoUrl: "/exploreit.jpeg",
      start: "June 2023",
      end: "October 2023",
      description:
        "As a team leader at ExploreIT from June to October 2023, I led the creation of a website feature that promoted waste recycling and raised environmental awareness. The project leveraged the MERN stack, with React.js for an interactive user interface, and involved coordinating team efforts and participating in educational drives organized by the NGO.",
    },
    
  ],
  education: [
    {
      school: "Symbiosis Institute of Technology",
      href: "https://www.sitpune.edu.in/",
      degree: "Bachelor of Technology in CSE",
      logoUrl: "/symbiosis.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Rajhans Vidyalaya",
      href: "https://rajhans.bkhm.edu.in/",
      degree: "High School",
      logoUrl: "/rajhans.jpeg",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Awarrdss Clone",
      href: "https://awards-website-clone.vercel.app/",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "The Awards Website Clone is a visually rich, scroll-animated website inspired by Zentry, featuring geometric transitions, 3D hover effects using GSAP, and clip-path animations. It delivers an engaging user experience through responsive design, video storytelling, and reusable UI components styled with Tailwind CSS.",
      technologies: [
        "ReactJs", "TailwindCSS", "ViteJs"
      ],
      links: [
        {
          type: "Website",
          href: "https://awards-website-clone.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sarthak102/Awards-website-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/awards-video.mp4",
    },
    {
      title: "Xora Website Clone",
      href: "https://xora-website-clone-sable.vercel.app/",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "The Xora Website UI Clone is a sleek, fully responsive SaaS landing page built with React and Vite. It includes essential sections like hero, features, pricing, FAQs, and testimonials, enhanced with smooth animations, advanced CSS gradients, and a modular component-based structure for optimized performance.",
      technologies: [
        "ReactJs", "TailwindCSS", "ViteJs"
      ],
      links: [
        {
          type: "Website",
          href: "https://xora-website-clone-sable.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sarthak102/xora-website-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/xora-video.mp4",
    },
    {
      title: "UI/UX Design of Ecommerce Website",
      href: "https://www.figma.com/design/IyZePDvfYqWsta7XQBVfmO/Untitled?node-id=0-1&t=i9l5b7XTtBXcmsVT-1",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "Designed an interactive weather app interface in Figma, inspired by the iPhone Weather app, with a focus on intuitive user experience and modern aesthetics. Created wireframes and prototypes to showcase user interaction and ensured a clean, responsive, and minimalistic design.",
      technologies: [
        "Figma",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://www.figma.com/design/IyZePDvfYqWsta7XQBVfmO/Untitled?node-id=0-1&t=i9l5b7XTtBXcmsVT-1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eroze.png",
      video: "",
    },
    {
      title: "Threads Clone",
      href: "https://github.com/Sarthak102/threds",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Developed a Threads clone as a Full stack web application, featuring user authentication, post creation, and an interactive feed. Utilized React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage to deliver a seamless user experience.",
      technologies: [
        "Next.js",
        "Javascript",
        "ExpressJS",
        "Prisma",
        "TailwindCSS",
        "MongoDB",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Sarthak102/threds",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/threads.png",
      video: "",
    },
    {
      title: "Invoice Maker",
      href: "https://invoice-maker-7dmiy03og-sarthak-kambles-projects.vercel.app/",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
        "Developed an invoice generation application with efficient product and client management using React.js for a dynamic interface, IndexedDB for data persistence, Framer Motion for animations, and Lottiefiles for engaging dashboard widgets.",
      technologies: [
        "Rect.js",
        "Framer Motion",
        "LottieFiles",
        "IndexedDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://invoice-maker-7dmiy03og-sarthak-kambles-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sarthak102/invoice-maker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/invoice.png",
      video:
        "",
    },
    {
      title: "House Rental System",
      href: "https://github.com/Sarthak102/Full-Stack-Real-Estate",
      dates: "April 2023 - May 2023",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "React.js",
        "Javascript",
        "ExpressJS",
        "Prisma",
        "TailwindCSS",
        "MongoDB",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Sarthak102/Full-Stack-Real-Estate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/house.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Bajaj HackRx",
      dates: "September 18th - October 9th, 2024",
      location: "Pune, India",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://www.bajajgroup.company/wp-content/uploads/2024/05/Bajajlogo3.jpg",
      mlh: "https://hackrx.in/?viewport=desktop",
      links: [],
    },
    
  ],
} as const;
