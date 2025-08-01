import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030711] text-[#aaa] py-8 px-6 md:px-20 text-center">
      <div>
        <h2 className="text-3xl mb-4 text-white font-semibold">Ahmed Samy</h2>
        <p className="max-w-xl mx-auto leading-relaxed">
          Creating exceptional digital experiences with
          <br /> modern technologies and thoughtful design.
        </p>

        {/* أيقونات السوشيال ميديا */}
        <div className="mt-6 flex justify-center gap-6 text-3xl">
          <Link
            href="https://github.com/AhmedSamyEid?tab=repositories"
            target="_blank"
            aria-label="GitHub"
          >
            <LuGithub className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahmed-samy-454b72365/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300 ease-in-out" />
          </Link>
          <Link
            href="mailto:ahmedsamyeidassy@gmail.com"
            aria-label="Email"
          >
            <CgMail className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300 ease-in-out" />
          </Link>
        </div>
      </div>

      {/* خط سفلي */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Ahmed Samy. All rights reserved.
      </div>
    </footer>
  );
}
