"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const links = [
    { name: "HOME", href: "/" },
    { name: "DESTINATION", href: "/destination" },
    { name: "CREW", href: "/crew" },
    { name: "TECHNOLOGY", href: "/" },
  ];

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNavRef]);

  return (
    <div className="flex h-[96px] w-full items-center md:mt-10 px-8 md:px-0 justify-between md:justify-normal">
      <div className="w-full h-full md:ml-[55px] flex items-center z-20 max-w-[40px] xl:max-w-none mr-[55px] xl:mr-0">
        <Image
          src="/images/logo-small.png"
          alt="logo"
          width={40}
          height={40}
          className="z-20 flex-shrink-0"
        />
        <div className="hidden xl:flex h-[0.6px] bg-[rgba(255,255,255,0.2)] w-full ml-4 mr-56" />
      </div>
      <div className="w-full h-full hidden md:flex justify-around items-center bg-[rgba(255,255,255,0.04)] backdrop-blur-[35px] z-10 xl:-ml-64">
        {links.map((link, i) => (
          <Link
            key={i}
            className={`font-light text-base font-barlow-condensed tracking-[2px] flex items-center justify-around leading-4 relative h-full z-50 ${
              i === 0 ? "ml-4 xl:ml-[100px]" : ""
            } ${i === 3 ? "mr-4 xl:mr-[140px]" : ""}`}
            href={link.href}
          >
            <span className="font-bold mr-3">0{i}</span>
            {link.name}
            <div
              className={`border-b-[3px] border-solid border-white absolute bottom-[1.5px] w-full ${
                pathname === link.href ? "" : "hidden"
              }`}
            />
          </Link>
        ))}
      </div>
      <div
        className="inline-block md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Image src="/images/menu.svg" alt="menu" width={24} height={22} />
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          links={links}
          setIsOpen={setIsMobileMenuOpen}
          ref={mobileNavRef}
        />
      )}
    </div>
  );
};
export default NavBar;
