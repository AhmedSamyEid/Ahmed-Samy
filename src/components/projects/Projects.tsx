import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce",
    description:
      "A modern, fully responsive e-commerce platform designed to provide users with a seamless online shopping experience. Includes features like product browsing, shopping cart, and secure payment integration, built with Next and TypeScript for high performance and scalability.",
    tech: ["Next.js", "TypeScript"],
    image: "/image/E-Commerce-ui-kit.webp",
    url: "https://e-commerce-ui-kit-sigma.vercel.app/",
  },
  {
    title: "Car Dealer Website",
    description:
      "A professional car dealership website that allows users to explore available vehicles, check detailed specifications, and filter by model or category. Built with Next.js and TypeScript to ensure fast performance, SEO optimization, and a smooth user experience across all devices.",
    tech: ["Next.js", "TypeScript"],
    image: "/image/car_dealer_website.png",
    url: "https://car-dealer-website-zeta.vercel.app/",
  },
  {
    title: "Execlusive-e-Commerce",
    description:
      "A modern, fully responsive e-commerce platform designed to provide users with a seamless online shopping experience. Includes features like product browsing, shopping cart, and secure payment integration, built with React and TypeScript for high performance and scalability.",
    tech: ["React", "TypeScript"],
    image: "/image/E-Commerce.png",
    url: "https://execlusive-e-commerce.vercel.app/",
  },

  {
    title: "Farm Website",
    description:
      "A clean and modern agricultural website showcasing farm products and services with smooth animations and responsive layouts. Developed using React and TypeScript, focusing on simplicity, accessibility, and an engaging user experience.",
    tech: ["React", "TypeScript"],
    image: "/image/farm.png",
    url: "https://farm-website-omega.vercel.app/",
  },
  {
    title: "Diamond Shop E-commerce Store",
    description:
      "An elegant and fully responsive e-commerce website for diamond and jewelry products. Features product listings, detailed views, and smooth UI interactions, built with React and TypeScript for a premium online shopping experience.",
    tech: ["React", "TypeScript"],
    image: "/image/Diamond-Shop-Ecommerce-Store-Community.png",
    url: "https://diamond-shop-ecommerce-store-community.vercel.app/",
  },
  {
    title: "Rebel Rover",
    description:
      "A creative and interactive landing page built with pure HTML and CSS, featuring smooth hover effects and responsive design. Perfect as a lightweight showcase for a futuristic rover concept.",
    tech: ["HTML", "CSS"],
    image: "/image/Rebel-Rover.png",
    url: "https://ahmedsamyeid.github.io/Rebel-Rover/",
  },
];

export default function ProjectsPage() {
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
