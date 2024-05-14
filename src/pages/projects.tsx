import { ArrowLeft } from "lucide-react";
import { TracingBeam } from "../components/ui/tracing-beam";
import { Link } from "react-router-dom";
import { ProjectItem } from "../components/project-item";

import frauditImage from "../assets/fraudit.png";
import rmpImage from "../assets/rmp.png";
import cliToolImage from "../assets/cli-tool.png";

const projects = [
  {
    link: "http://github.com/kourosh-alasti/fraudit",
    title: "Fraudit",
    description:
      "Open Source Reddit Clone to bootstrap social platform development",
    src: frauditImage,
    alt: "Fraudit Project Image",
    tech: [
      "Next.JS",
      "TypeScript",
      "TailwindCSS",
      "Drizzle",
      "Clerk",
      "Neon DB",
      "PostgreSQL",
    ],
  },
  {
    link: "https://github.com/kourosh-alasti/fraudit/tree/master/src/app/(main)/rmp",
    title: "Fraudit Rate My Professor",
    description:
      "Open Source Rate My Professor Clone for students who want to implement a rating system for highschool teachers",
    src: rmpImage,
    alt: "Fraudit RMP Project Image",
    tech: [
      "Next.JS",
      "TypeScript",
      "Drizzle",
      "Clerk",
      "Neon DB",
      "PostgreSQL",
    ],
  },
  {
    link: "https://github.com/AlastiSolutions/cli-tool",
    title: "CLI Tool",
    description: "A CLI Tool to speed up my initial development process",
    src: cliToolImage,
    alt: "CLI Tool Project Image",
    tech: ["TypeScript", "Node.JS", "NPM"],
  },
];

function ProjectsPage() {
  return (
    <main className=" mb-6 flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Link to="/">
        <div className="flex items-center justify-center gap-1 justify-self-start">
          <ArrowLeft />
          <h1>go back</h1>
        </div>
      </Link>
      <TracingBeam className="px-6">
        <div className="mt-6 grid grid-cols-1 items-center justify-center gap-2 antialiased md:gap-4">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              link={project.link}
              alt={project.alt}
              description={project.description}
              src={project.src}
              tech={project.tech}
              title={project.title}
            />
          ))}
        </div>
      </TracingBeam>
    </main>
  );
}

export default ProjectsPage;