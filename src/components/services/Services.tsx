import { FaBolt, FaCode, FaStar, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";

export default function Servicess() {
  const mainServices = [
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

  const workSteps = [
    { step: "01", title: "Discovery", desc: "Understanding your needs and project requirements" },
    { step: "02", title: "Planning", desc: "Creating detailed roadmap and timeline" },
    { step: "03", title: "Development", desc: "Building with clean code and best practices" },
    { step: "04", title: "Delivery", desc: "Testing, deployment, and handover" },
  ];

  const chooseServices = [
    { icon: <FaStar className="text-3xl text-gray-300" />, title: "3+ Years Experience", desc: "Proven track record with 50+ successful projects" },
    { icon: <FaCode className="text-3xl text-gray-300" />, title: "Modern Technologies", desc: "Latest tools and frameworks for optimal performance" },
    { icon: <FaCheckCircle className="text-3xl text-gray-300" />, title: "100% Customer Satisfaction", desc: "Committed to exceeding expectations on every project" },
    { icon: <FaBolt className="text-3xl text-gray-300" />, title: "Performance Focused", desc: "Optimized code for speed and search engine rankings" },
    { icon: <PiUsersFill className="text-3xl text-gray-300" />, title: "Responsive Support", desc: "Quick response times and reliable communication" },
    { icon: <FaShieldAlt className="text-3xl text-gray-300" />, title: "Quality Assurance", desc: "Thorough testing and quality control processes" },
  ];

  return (
    <>
      <section className="bg-[#0a0f1c]  min-h-screen text-white py-30 px-6 md:px-20">
        <div className="text-start">
          <h1 className="text-6xl mb-4 font-bold text-white">Services</h1>
          <p className="text-gray-300 text-xl">
            Comprehensive frontend development solutions to bring your digital vision to life.
            <br /> From concept to deployment, I provide expert services tailored to your needs.
          </p>
        </div>

        <div className="border-b border-gray-700 my-12 w-3/4 mx-auto"></div>

        <div className="text-center mb-12">
          <h1 className="text-3xl mb-4 font-bold text-white">What I Offer</h1>
          <p className="text-gray-300">
            Specialized services designed to help businesses and individuals create exceptional web
            <br /> experiences with modern technology and proven methodologies.
          </p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          {mainServices.map((service, idx) => (
            <div
              key={idx}
              className="group bg-[#111827] p-8 rounded-xl border border-gray-700 hover:border-gray-500 
                        transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-white text-xl">
                  {service.icon}
                  {service.title}
                </div>
                {service.badge && <span className="text-sm bg-white text-black px-3 py-1 rounded-full">{service.badge}</span>}
              </div>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <h4 className="text-white font-semibold mb-2">What s Included:</h4>
              <ul className="text-gray-300 mb-6 list-disc list-inside space-y-1 text-sm">
                {service.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4 className="text-white font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b0f19] text-center">
        <h2 className="text-3xl font-bold text-white mb-2">How I Work</h2>
        <p className="text-gray-400 mb-10">A proven process that ensures quality results and client satisfaction</p>
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {workSteps.map((step, idx) => (
            <div key={idx} className="bg-[#0e1522] w-70 p-6 rounded-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-white">{step.step}</h3>
              <p className="text-white text-2xl  font-bold mt-2">{step.title}</p>
              <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-10">
          <h2 className="text-3xl font-bold text-white  mb-2">Why Choose My Services</h2>
          <p className="text-gray-400 mb-10">What sets my approach apart and the value I bring to every project</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {chooseServices.map((service, idx) => (
              <div
                key={idx}
                className=" p-6 rounded-md border border-gray-700 hover:border-gray-500 
                        hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
