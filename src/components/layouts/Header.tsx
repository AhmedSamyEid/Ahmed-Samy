"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Resume", path: "/resume" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeLink = document.querySelector<HTMLLIElement>(`li[data-href="${pathname}"]`);
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [pathname]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (parentRect) {
      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  };

  const handleMouseLeave = () => {
    const activeLink = document.querySelector<HTMLLIElement>(`li[data-href="${pathname}"]`);
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setUnderlineStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#00adb5]">
          <Link href="/">Ahmed</Link>
        </div>

        <nav className="relative">
          <button className="md:hidden cursor-pointer text-3xl" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          <ul
            onMouseLeave={handleMouseLeave}
            className={`absolute md:static top-14 right-0 
  w-85 sm:w-150 md:w-100 lg:w-auto
  md:flex md:gap-6 flex-col md:flex-row text-center 
  rounded-lg md:rounded-none
  backdrop-blur-md bg-[#222831]/80 md:bg-transparent 
  shadow-md md:shadow-none
  p-4 md:p-0 transition-all duration-300 ease-in-out 
  ${isOpen ? "flex opacity-100 translate-y-0" : "hidden md:flex opacity-0 md:opacity-100 -translate-y-2 md:translate-y-0"}`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                data-href={link.path}
                onMouseEnter={handleMouseEnter}
                className={`relative px-3 py-2 cursor-pointer transition-colors ${pathname === link.path ? "text-[#00adb5] font-semibold" : "text-white hover:text-[#00adb5]"}`}
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}

            <span
              className="absolute bottom-0 h-[2px] bg-[#00ADB5] transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
