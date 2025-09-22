"use client";
import { FaCode, FaPalette, FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaCode className=" text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#00ADB5]" />,
      title: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
    },
    {
      icon: <FaPalette className="text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#fe9d9d]" />,
      title: "UI/UX & Styling",
      items: ["Tailwind CSS", "Bootstrap", "Material UI", "Sass", "Framer Motion", "Pixel Perfect", "Accessibility"],
    },
    {
      icon: <FaTools className="text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#d9e08c]" />,
      title: "Development Tools",
      items: ["Git", "GitHub", "GitHub Actions", "Vite", "Webpack", "Babel", "ESLint", "Prettier"],
    },
  ];

  return (
    <section className="bg-[#0a0f1c] min-h-screen text-white py-30 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-6xl font-bold mb-2">Skills</h2>
        <p className="text-gray-400 mb-12">My technical expertise and proficiency levels across various technologies and tools.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" border-1  rounded-lg p-6 shadow-md hover:shadow-lg hover:translate-y-[-4px] transition-transform duration-300 
                        group"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <ul className="space-y-2 text-gray-300">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
