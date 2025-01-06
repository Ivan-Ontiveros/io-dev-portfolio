import type { Project } from "./dataTypes";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "CircleCI AWS Proof-of-Concept",
    subtitle: "AWS S3 Deployment with Rollback",
    description:
      "Designed and implemented a proof-of-concept showcasing CircleCI's integration with AWS, streamlining CI/CD processes for seamless deployment and automated rollback. This project demonstrated scalable and efficient deployment pipelines tailored for static site hosting.",
    role: "CI/CD Technical Lead",
    duration: "1 week",
    status: "Completed",
    impact:
      "Successfully demonstrated the feasibility of integrating CircleCI with AWS for automated deployment, enabling rapid and reliable delivery of web applications.",
    responsibilities: [
      "Architect and implement CI/CD pipelines for automated deployment.",
      "Configure AWS services for hosting and content delivery.",
      "Secure deployment processes with fine-grained permissions.",
    ],
    techStack: ["CircleCI", "AWS (S3, CloudFront, IAM)", "GitHub", "ViteJS"],
    challenges: [
      "Integrating CircleCI with AWS services",
      "Configuring fine-grained permissions for secure deployment",
    ],
    links: {
      liveDemo: "https://dvxbudt1nngd9.cloudfront.net/",
      sourceCode: "https://github.com/Ivan-Ontiveros/aws-cci",
    },
    images: {
      thumbnail: "/images/aws-cci.png",
    },
  },
  {
    id: "2",
    title: "IvanOntiveros.dev",
    subtitle: "Personal Portfolio Web Application",
    description:
      "Developed my personal portfolio application using NextJS and Vercel to highlight professional projects, technical expertise, and career achievements. This platform is designed to reflect my skillset as a web developer and provide accessible links to live demos and code repositories.",
    role: "Full Stack Developer",
    duration: "Ongoing",
    status: "Ongoing",
    impact:
      "Created a centralized platform to demonstrate my technical expertise, facilitating easy access to my work for potential employers and collaborators.",
    responsibilities: [
      "Design and implement a responsive portfolio layout using NextJS.",
      "Deploy and optimize the portfolio on Vercel for global performance.",
      "Architect data objects for the API to efficiently handle project and content data, starting with mock data for the MVP while planning for a live backend to dynamically serve and update content without rebuilding the project.",
      "Create engaging and informative content to effectively showcase projects and achievements.",
    ],
    techStack: ["NPM Workspaces", "NextJS", "Vercel", "GitHub"],
    challenges: [
      "Designing a layout that effectively showcases diverse projects.",
      "Architecting and structuring data objects for the API with scalability in mind.",
      "Creating high-quality content to highlight skills and projects.",
    ],
    links: {
      liveDemo: "https://ivanontiveros.dev/",
      sourceCode: "https://github.com/Ivan-Ontiveros/io-dev-portfolio",
    },
    images: {
      thumbnail: "/images/portfolio.png",
    },
  },
  {
    id: "3",
    title: "EOTattoos.com",
    subtitle: "Lead Generation Platform for Tattoo Business",
    description:
      "Developed a comprehensive lead generation platform for a tattoo business, leveraging modern web technologies to enhance user experience and streamline client acquisition.",
    role: "Full-Stack Web Developer",
    duration: "6 months",
    status: "Archived",
    impact:
      "Increased client acquisition by 30% through targeted lead generation and improved user experience.",
    responsibilities: [
      "Developed responsive web application with ReactJS and Tailwind CSS.",
    ],
    techStack: [
      "ReactJS",
      "GhostCMS",
      "GoogleForms",
      "TypeScript",
      "Sass/scss",
    ],
    challenges: [
      "Implementing dynamic content management with GhostCMS",
      "Integrating Google Forms for lead capture",
    ],
    links: {
      liveDemo:
        "https://web.archive.org/web/20210526020337/https://eotattoos.com/",
    },
    images: {
      thumbnail: "/images/eotattoos.png",
    },
  },
];
