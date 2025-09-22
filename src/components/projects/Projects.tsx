import Image from "next/image";
import Link from "next/link";
import useProjects from "./hooks/usrProjects";

export default function ProjectsPage() {
  const { projects } = useProjects();
  return (
    <div className="bg-[#0a0f1c] min-h-screen py-30 px-6 md:px-20 text-white">
      <h1 className="text-6xl font-bold text-start mb-3">Projects</h1>
      <p className="text-gray-300 text-xl">
        Explore my portfolio of projects showcasing modern web development and
        <br /> thoughtful design.
      </p>
      <div className="border-b border-gray-700 my-12 w-3/4 mx-auto"></div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#0a0f1c] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
            <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#1a2238] text-gray-300 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={project.url} target="_blank" className="mt-5 inline-block bg-[#00adb5] hover:bg-[#007a80] text-white text-sm px-4 py-2 rounded-lg transition duration-300 text-center">
                View Project <span className="ml-4 ">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
