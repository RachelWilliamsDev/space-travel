import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ links, setIsOpen, ref }) => {
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
              className="font-light text-sm font-barlow-condensed tracking-[2px] flex leading-4 relative h-auto mt-8"
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
