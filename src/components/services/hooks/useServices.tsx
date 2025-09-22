import { PiUsersFill } from "react-icons/pi";
import { Choose, Service, Step } from "../types/ServicesTypes";
import { FaBolt, FaCode, FaStar, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

export default function useServices() {
  const mainServices: Service[] = [
    {
      icon: <FaCode className="text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#00ADB5]" />,
      title: "Frontend Development",
      badge: "Popular",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: [
        "React.js & Next.js Development",
        "TypeScript Implementation",
        "Responsive Web Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Progressive Web Apps (PWAs)",
        "Component Libraries & Design Systems",
        "API Integration & State Management",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    },
    {
      icon: <FaBolt className="text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-yellow-400" />,
      title: "Performance & SEO Optimization",
      description: "Boost your website s speed, search engine rankings, and user experience.",
      features: [
        "Core Web Vitals Optimization",
        "Technical SEO Implementation",
        "Performance Auditing",
        "Code Splitting & Lazy Loading",
        "Image Optimization",
        "Bundle Size Reduction",
        "Lighthouse Score Improvement",
        "Mobile Performance Enhancement",
      ],
      tech: ["Lighthouse", "Google PageSpeed", "Webpack", "Quickly", "CDN"],
    },
  ];

  const workSteps: Step[] = [
    { step: "01", title: "Discovery", desc: "Understanding your needs and project requirements" },
    { step: "02", title: "Planning", desc: "Creating detailed roadmap and timeline" },
    { step: "03", title: "Development", desc: "Building with clean code and best practices" },
    { step: "04", title: "Delivery", desc: "Testing, deployment, and handover" },
  ];

  const chooseServices: Choose[] = [
    { icon: <FaStar className="text-3xl text-gray-300" />, title: "3+ Years Experience", desc: "Proven track record with 50+ successful projects" },
    { icon: <FaCode className="text-3xl text-gray-300" />, title: "Modern Technologies", desc: "Latest tools and frameworks for optimal performance" },
    { icon: <FaCheckCircle className="text-3xl text-gray-300" />, title: "100% Customer Satisfaction", desc: "Committed to exceeding expectations on every project" },
    { icon: <FaBolt className="text-3xl text-gray-300" />, title: "Performance Focused", desc: "Optimized code for speed and search engine rankings" },
    { icon: <PiUsersFill className="text-3xl text-gray-300" />, title: "Responsive Support", desc: "Quick response times and reliable communication" },
    { icon: <FaShieldAlt className="text-3xl text-gray-300" />, title: "Quality Assurance", desc: "Thorough testing and quality control processes" },
  ];
  return { mainServices, workSteps, chooseServices };
}
