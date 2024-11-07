"use client";
import Container from "@/components/Container";
import CrewDetails from "@/components/CrewDetails";
import CrewSelector from "@/components/CrewSelector";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";

export default function Crew() {
  const spaceCrew = [
    {
      name: "Douglas Hurley",
      image: "/images/douglas-hurley.png",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      role: "Commander",
    },
    {
      name: "Mark Shuttleworth",
      image: "/images/mark-shuttleworth.png",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      role: "Mission Specialist",
    },
    {
      name: "Victor Glover",
      image: "/images/victor-glover.png",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      role: "Pilot",
    },
    {
      name: "Anousheh Ansari",
      image: "/images/anousheh-ansari.png",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      role: "Flight Engineer",
    },
  ];
  const [selectedCrew, setSelectedCrew] = useState(spaceCrew[0]);

  return (
    <div className="relative flex w-screen">
      <div className="absolute bg-destination w-full h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat">
        <NavBar />
        <Container title="Meet your crew" pageNumber="2">
          <div className="flex flex-col xl:flex-row w-full max-w-[512px] xl:max-w-[1110px] h-full gap-y-14 mx-auto xl:mx-0">
            <div className="flex flex-col xl:flex-1 p-4">
              <div className="flex flex-col xl:justify-between h-full gap-y-6">
                <CrewDetails selectedCrew={selectedCrew} />
                <CrewSelector
                  crew={spaceCrew}
                  onSelect={setSelectedCrew}
                  selected={selectedCrew}
                />
              </div>
            </div>

            {/* Image container */}
            <div className="xl:flex-1 flex justify-center items-center h-[347px] w-auto md:h-[459px] xl:h-[734px]">
              <Image
                src={selectedCrew.image}
                alt={selectedCrew.name}
                width={605.19}
                height={597.2}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
