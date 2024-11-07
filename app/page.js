import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex w-screen">
      <div className="absolute bg-homepageMobile lg:bg-homepage w-full h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat">
        <NavBar />
        <div className="flex py-6 md:py-32 px-10 md:px-10 lg:px-0 w-full">
          <div className="flex flex-col xl:flex-row w-full max-w-[1110px] h-[632px] max-h-[632px] mx-auto xl:items-end md:gap-y-12">
            <div className="flex flex-col flex-1 space-y-6 text-center xl:text-left items-center xl:items-start">
              <h2 className="uppercase text-base md:text-[28px] leading-7 tracking-[4px] font-barlow-condensed font-normal">
                So, you want to travel to
              </h2>
              <h1 className="uppercase leading-[144px] tracking-normal text-[80px] md:text-[144px] font-bellefair font-normal">
                Space
              </h1>
              <p className="text-[15px] md:text-lg leading-[18px] tracking-normal font-barlow font-normal max-w-[512px] lg:w-full">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="flex flex-1 justify-center xl:justify-end items-end md:items-start">
              <div className="flex w-36 h-36 md:w-[272px] md:h-[272px] rounded-full bg-white items-center justify-center hover:outline hover:outline-[50px] xl:hover:outline-[80px] hover:outline-[rgba(255,255,255,0.2)] hover:cursor-pointer">
                <Link
                  href="/destination"
                  className="text-primary-blue-900 font-bellefair font-normal tracking-normal leading-8 text-lg md:text-[32px] uppercase"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
