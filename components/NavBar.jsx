"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const links = [
    { name: "HOME", href: "/" },
    { name: "DESTINATION", href: "/" },
    { name: "CREW", href: "/" },
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
      <div className="w-full h-full hidden xl:flex items-center z-20">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={736}
          height={48}
          className="z-20"
        />
      </div>
      <div className="h-full md:mx-[55px] xl:hidden flex items-center z-20">
        <Image src="/images/logo-small.png" alt="logo" width={40} height={40} />
      </div>

      <div className="w-full h-full hidden md:flex justify-around items-center bg-[rgba(255,255,255,0.04)] backdrop-blur-[35px] z-10 xl:-ml-64 ">
        {links.map((link, i) => (
          <Link
            key={i}
            className={`font-light text-base font-barlow-condensed tracking-[2px] flex items-center justify-around leading-4 relative h-full ${
              i === 0 ? "ml-[100px]" : ""
            } ${i === 3 ? "mr-[140px]" : ""}`}
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
