"use client";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FaBriefcase, FaTools, FaFileAlt, FaCommentDots, FaStar, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  const items = [
    { icon: <FaBriefcase className="text-brown-500" />, title: "Projects", desc: "Explore my latest work and creative solutions.", link: "View Projects", href: "/projects" },
    { icon: <FaTools className="text-yellow-500" />, title: "Skills", desc: "Discover my technical expertise and proficiencies.", link: "View Skills", href: "/skills" },
    { icon: <FaFileAlt className="text-gray-400" />, title: "Resume", desc: "Download my professional resume and experience.", link: "View Resume", href: "/resume" },
    { icon: <FaCommentDots className="text-gray-200" />, title: "Blog", desc: "Read my thoughts on technology and design.", link: "Read Articles", href: "/blog" },
    { icon: <FaStar className="text-yellow-400" />, title: "Testimonials", desc: "See what clients and colleagues say about my work.", link: "Read Reviews", href: "/testimonials" },
    { icon: <FaPhoneAlt className="text-red-500" />, title: "Contact", desc: "Let s discuss your next project together.", link: "Get In Touch", href: "/contact" },
  ];

  return (
    <section id="home" className="py-25 bg-[#0b0f19]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-white">
            Hi, I m <span className="text-[#00adb5]">Ahmed</span>
          </h1>
          <p className="text-2xl mt-4 text-gray-300">Front-End Developer</p>
          <p className="mt-4 text-xl text-gray-300">
            I create exceptional digital experiences that combine <br />
            beautiful design with robust functionality. Let s build <br />
            something amazing together.
          </p>
          <div className="mt-10">
            <Link href="/projects" className=" bg-[#00adb5] hover:bg-[#007a80] transform hover:scale-105 transition duration-300 cursor-pointer text-white py-3 px-6 rounded-md">
              View My Work
            </Link>
          </div>

          <div className="mt-10 flex gap-4 text-3xl">
            <Link href="https://github.com/AhmedSamyEid?tab=repositories" target="_blank">
              <LuGithub className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300 ease-in-out" />
            </Link>
            <Link href="https://www.linkedin.com/in/ahmed-samy-454b72365/" target="_blank">
              <FiLinkedin className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300 ease-in-out" />
            </Link>
            <Link href="mailto:ahmedsamyeidassy@gmail.com">
              <CgMail className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300 ease-in-out" />
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Image src="/image/ahmedsamy.jpg" alt="Ahmed Profile" width={400} height={400} className="rounded-full mx-auto" />
        </div>
      </div>

      <div className="border-b-1 text-gray-500 mt-12"></div>

      <section className="bg-[#080e1c] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Explore My Work</h2>
          <p className="text-gray-400">Discover my projects, skills, and professional journey through these carefully crafted sections.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#030711] rounded-lg p-6 flex flex-col gap-3 
                        hover:translate-y-[-4px] transition-transform duration-300 
                        group"
            >
              <div
                className="w-10 h-10 flex items-center justify-center bg-[#222831] rounded-lg 
                            transform transition-transform duration-300 group-hover:rotate-15"
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm flex-grow">{item.desc}</p>

              <a
                href={item.href}
                className="text-[#00adb5] flex items-center gap-2 
              hover:text-white hover:bg-[#007a80] 
                    transform hover:scale-105 transition duration-300 
                  py-3 px-6 rounded-md w-45"
              >
                {item.link} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
