"use client";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import useContact from "./hooks/useContact";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  const { formRef, sendEmail, loading, status } = useContact();
  return (
    <section className="bg-[#0a0f1c] text-white py-30 px-4">
      <div className="max-w-6xl mx-auto text-start mb-12">
        <h2 className="text-6xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-2">
          Let’s discuss your next project. Get in touch and let s create something
          <br /> amazing together.
        </p>
      </div>

      <div className="border-b border-gray-700 my-12 w-3/4 mx-auto"></div>

      <div className="text-start mb-12">
        <h3 className="text-3xl font-bold text-center">Let s Work Together</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          Ready to bring your ideas to life? I m here to help you create exceptional digital experiences. Let s discuss your project and explore how we can collaborate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="md:col-span-2 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-6">Send Me a Message</h4>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="user_name"
                type="text"
                placeholder="Full Name *"
                required
                className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                name="user_email"
                type="email"
                placeholder="Email Address *"
                required
                className="w-full rounded-md border border-gray-700 bg-[#0a0f1c] px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                name="company"
                type="text"
                placeholder="Company/Organization"
                className="w-full rounded-md border border-gray-700 bg-[#0a0f1c]  px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select name="project_type" className="w-full rounded-md border border-gray-700 bg-[#0a0f1c] px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select project type</option>
                <option>Website</option>
                <option>Mobile App</option>
                <option>Dashboard</option>
              </select>
              <select name="budget" className="w-full rounded-md border border-gray-700 bg-[#0a0f1c]  px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select budget range</option>
                <option>$500 - $1000</option>
                <option>$1000 - $5000</option>
                <option>$5000+</option>
              </select>
              <select name="timeline" className="w-full rounded-md border border-gray-700 bg-[#0a0f1c] px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select timeline</option>
                <option>1-2 Weeks</option>
                <option>1 Month</option>
                <option>2+ Months</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full rounded-md border border-gray-700 bg-transparent px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button type="submit" disabled={loading} className="flex items-center gap-2 bg-[#00adb5] hover:bg-[#007a80] cursor-pointer text-white px-6 py-2 rounded-md">
              {loading ? "Sending..." : "Send Message"} <FaExternalLinkAlt size={14} />
            </button>
            {status && <p className="mt-2">{status}</p>}
          </form>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-semibold mb-5">Contact Information</h4>
            <Link href="mailto:ahmedsamyeidassy@gmail.com" className="flex items-center gap-2 hover:text-white transition">
              <FaEnvelope /> ahmedsamyeidassy@gmail.com
            </Link>
            <p className="flex items-center mt-5 gap-2 text-gray-300">
              <FaPhone /> +20 1068320396
              <br />
              +20 15 57017487
            </p>
            <p className="flex items-center mt-5 gap-2 text-gray-300">
              <FaMapMarkerAlt /> Cairo
            </p>
            <p className="flex items-center gap-2 text-gray-400 mt-5 text-sm ">
              <MdAccessTime className="text-2xl" />
              Response Time: Within 24 hours
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Connect With Me</h4>
            <div className="flex flex-col gap-2">
              <Link href="https://github.com/AhmedSamyEid?tab=repositories" target="_blank" className="flex items-center justify-between px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800">
                <FaGithub /> GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmed-samy-454b72365/"
                target="_blank"
                className="flex items-center justify-between px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800"
              >
                <FaLinkedin /> LinkedIn
              </Link>
              <Link href="https://ahmed-samy-beta.vercel.app/" className="flex items-center justify-between px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800">
                🌐 Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
