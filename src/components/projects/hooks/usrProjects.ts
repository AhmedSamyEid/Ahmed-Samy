import { Project } from "../types/ProjectsTypes";

export default function useProjects() {
  
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
return{projects};
}