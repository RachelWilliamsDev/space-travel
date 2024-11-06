export const PlanetSelector = ({ planets, selectedPlanet, onSelect }) => {
  return (
    <div className="flex flex-row space-x-8">
      {planets.map((planet, i) => (
        <div
          key={i}
          onClick={() => onSelect(planet)}
          className={`uppercase leading-4 tracking-[2px] font-barlow-condensed text-primary-blue-300 pb-2 hover:cursor-pointer hover:border-b-2 hover:border-[rgba(255,255,255,0.2)] ${
            selectedPlanet.name === planet.name ? "border-b-2" : ""
          }`}
        >
          {planet.name}
        </div>
      ))}
    </div>
  );
};

export default PlanetSelector;
