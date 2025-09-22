import Link from "next/link";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen text-white py-30 px-6 md:px-20">
      <div className="text-start mb-12">
        <h1 className="text-6xl font-bold mb-2">Resume</h1>
        <p className="text-gray-400">My professional experience, education, and accomplishments with download option.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className=" border-1 p-6 rounded-xl shadow-lg flex flex-col items-center">
          <Image src="/image/ahmedsamy.jpg" alt="Profile" width={220} height={220} className="rounded-full border-4 border-gray-700 mb-4" />
          <h2 className="text-xl font-semibold">Ahmed Samy</h2>
          <p className="text-gray-400 mb-4">Front-End Developer</p>

          <div className="space-y-2 text-sm text-gray-300 w-full">
            <span className="flex items-center gap-2 hover:text-white transition">
              <FaPhone /> +20 1068320396
              <br />
              +20 15 57017487
            </span>

            <Link href="mailto:ahmedsamyeidassy@gmail.com" className="flex items-center gap-2 hover:text-white transition">
              <FaEnvelope /> ahmedsamyeidassy@gmail.com
            </Link>

            <Link href="https://github.com/AhmedSamyEid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <FaGithub /> github.com/AhmedSamyEid
            </Link>

            <Link href="https://ahmed-samy-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <IoIosLink /> ahmedsamyeid.vercel.app
            </Link>

            <Link href="https://www.linkedin.com/in/ahmedsamy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <FaLinkedin /> linkedin.com/in/ahmedsamy
            </Link>

            <Link href="https://maps.google.com/?q=Cairo,Egypt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
              <FaMapMarkerAlt /> Cairo
            </Link>
          </div>

          <a href="/CV/Ahmed_Samy.pdf" download className="mt-6 bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-lg transition flex items-center gap-2 text-white w-fit">
            <FaDownload className="text-white" /> Download Resume PDF
          </a>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div className=" border-1 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Summary</h3>
            <p className="text-gray-300">
              Front-End Developer with 3+ years of experience creating modern, scalable, and responsive web applications using React, Next.js, and TypeScript. Skilled in building intuitive user
              interfaces, performance optimization, and delivering pixel-perfect designs aligned with client goals.
            </p>
          </div>

          <div className=" border-1 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Built and deployed full-scale web applications with 100% responsive layouts.</li>
              <li>Improved website performance and SEO, increasing traffic by 50%.</li>
              <li>Created reusable UI components reducing development time by 40%.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
