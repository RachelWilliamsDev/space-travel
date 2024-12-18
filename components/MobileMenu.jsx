import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ links, setIsOpen, ref }) => {
  const pathname = usePathname();

  return (
    <div
      ref={ref}
      className="absolute top-0 right-0 w-[61.7%] h-full bg-[rgba(255,255,255,0.04)] backdrop-blur-[35px] z-50 md:hidden"
    >
      <div className="relative flex flex-col">
        <div
          className="flex justify-end mr-[33.95px] mt-[33.95px]"
          onClick={() => setIsOpen(false)}
        >
          <Image src="/images/close.png" alt="close" width={24} height={21} />
        </div>

        <div className="flex flex-col justify-start pl-8 mt-[86px]">
          {links?.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`font-light text-sm font-barlow-condensed tracking-[2px] flex leading-4 relative h-auto mt-8 hover:border-r-[3px] hover:border-solid hover:border-white/20 ${
                pathname === link.href
                  ? "border-r-[3px] border-solid border-white"
                  : ""
              }`}
            >
              <span className="font-bold mr-3">0{i}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
