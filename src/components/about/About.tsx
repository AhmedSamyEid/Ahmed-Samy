import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaGlobe, FaRegBookmark } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-40">
      <div className="container mx-auto text-start ">
        <h2 className="text-5xl font-bold mb-4 text-white">About Me</h2>
        <p className=" text-gray-300 text-xl max-w-xl">
          Get to know the person behind the work—my journey, passions, and what
          <br /> drives me to create exceptional digital experiences.
        </p>
        <div className="flex gap-6 mt-4 ">
          <h2 className="bg-slate-900 text-white p-3 rounded-[15px]">🚀Front-End Developer</h2>
          <h2 className="bg-slate-900 text-white p-3 rounded-[15px]">💡 Innovation Enthusias</h2>
        </div>
      </div>
      <div className="border-b-1 text-gray-500 mt-12"></div>
      <div className="flex flex-col md:flex-row items-center justify-around px-4 md:px-10 py-10 gap-10 ">
        <div className="w-full md:w-1/2 bg-[#111827] rounded-2xl shadow-lg px-6 md:px-10 py-8">
          <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2">My Story</h3>

          <div className="space-y-5  text-gray-300 text-base leading-relaxed">
            <p>
              Hello! I m <span className="text-white font-semibold">Ahmed Samy</span>, a Junior Front-End Developer with 3 years of hands-on experience building responsive and user-friendly web
              applications. I specialize in <strong className="text-white">React.js, Next.js, and TypeScript</strong>, with a strong foundation in modern UI/UX practices and clean, maintainable code.
            </p>

            <p>
              Throughout my journey, I’ve contributed to the development of internal dashboards, landing pages, and dynamic components in sectors like education, e-commerce, and business services. I
              enjoy turning complex requirements into smooth and accessible user interfaces while always aiming to improve performance and code quality.
            </p>

            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Built and maintained reusable components using React and Next.js across multiple projects.</li>
              <li>Collaborated in agile teams and participated in code reviews, testing, and continuous integration.</li>
            </ul>

            <p>
              Passionate about learning new technologies and staying updated with the latest front-end trends. Currently looking to grow my impact by contributing to scalable front-end systems and
              learning from experienced developers in a fast-paced environment.
            </p>
            <div className="border border-solid text-center text-2xl border-gray-600 p-3 px-15 w-[70%]">
              <span className="">40+</span>
              <h3>Projects Completed</h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image src="/image/ahmed-samy.jpg" alt="Ahmed Samy" width={500} height={450} className=" rounded-2xl shadow-xl object-cover" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-white font-bold mb-10">Quick Facts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border border-solid border-gray-500 rounded-xl p-6">
          <div className="flex flex-col items-center space-y-2 border-r border-gray-500 last:border-r-0 md:last:border-r-0">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span className="text-sm text-gray-400">Location</span>
            <strong className="text-white font-semibold">El-Mahalla El-Kubra, Egypt</strong>
          </div>

          <div className="flex flex-col items-center space-y-2 border-r border-gray-500 last:border-r-0 md:last:border-r-0">
            <FaCalendarAlt className="text-blue-500 text-2xl" />
            <span className="text-sm text-gray-400">Experience</span>
            <strong className="text-white font-semibold">3+ Years</strong>
          </div>

          <div className="flex flex-col items-center space-y-2 border-r border-gray-500 last:border-r-0 md:last:border-r-0">
            <FaGlobe className="text-green-500 text-2xl" />
            <span className="text-sm text-gray-400">Languages</span>
            <strong className="text-white font-semibold">English, Arabic</strong>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaRegBookmark className="text-purple-500 text-2xl" />
            <span className="text-sm text-gray-400">Status</span>
            <strong className="text-white font-semibold">Available</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
