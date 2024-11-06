"use client";
import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import PlanetDetails from "@/components/PlanetDetails";
import PlanetSelector from "@/components/PlanetSelector";
import Image from "next/image";
import { useState } from "react";

export default function Destination() {
  const planets = [
    {
      name: "Moon",
      image: "/images/moon.png",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 Days",
    },
    {
      name: "Mars",
      image: "/images/mars.png",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 Months",
    },
    {
      name: "Europa",
      image: "/images/europa.png",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 Years",
    },
    {
      name: "Titan",
      image: "/images/titan.png",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 Years",
    },
  ];
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

  return (
    <div className="relative flex w-screen">
      <div className="absolute bg-destination w-full h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat">
        <NavBar />
        <Container title="Pick your destination" pageNumber="1">
          <div className="flex flex-col xl:flex-row gap-y-10 xl:space-x-8 items-center">
            <Image
              src={selectedPlanet.image}
              alt={selectedPlanet.name}
              width={576}
              height={576}
              className="w-auto h-[150px] md:h-[300px] xl:h-[576px]"
            />
            <div className="flex flex-col space-y-10 max-w-[700px] lg:max-w-[445px] w-full items-center xl:items-start">
              <PlanetSelector
                planets={planets}
                selectedPlanet={selectedPlanet}
                onSelect={setSelectedPlanet}
              />
              <PlanetDetails planet={selectedPlanet} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
