"use client";
import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import TechDetails from "@/components/TechDetails";
import TechSelector from "@/components/TechSelector";
import Image from "next/image";
import { useState } from "react";

export default function Technology() {
  const spaceTech = [
    {
      name: "Launch Vehicle",
      image: "/images/launch-vehicle.png",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      image: "/images/spaceport.png",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space Capsule",
      image: "/images/space-capsule.png",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  const [selectedTech, setSelectedTech] = useState(spaceTech[0]);

  return (
    <div className="relative flex w-screen">
      <div className="absolute bg-destination w-full h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat">
        <NavBar />
        <Container
          title="Space launch 101"
          pageNumber="3"
          outerHorizontalPadding="px-0 xl:pl-[165px] xl:pr-0"
          innerHorizontalPadding="px-0"
        >
          <div className="flex flex-col xl:flex-row w-full h-full gap-y-14 mx-auto xl:mx-0 items-center gap-x-8">
            <div className="xl:order-1 order-2 flex flex-1 flex-col xl:flex-row gap-x-16 px-8 md:px-[88px] xl:px-0">
              <TechSelector
                tech={spaceTech}
                onSelect={setSelectedTech}
                selected={selectedTech}
              />
              <TechDetails selectedTech={selectedTech} />
            </div>
            <div className="order-1 xl:order-2 flex flex-1 justify-end">
              <Image
                src={selectedTech.image}
                alt={selectedTech.name}
                width={608}
                height={608}
                className="w-screen max-h-80 object-cover xl:w-full xl:max-h-[600px] h-full"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
