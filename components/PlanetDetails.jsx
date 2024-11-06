export const PlanetDetails = ({ planet }) => {
  return (
    <>
      <div className="uppercase leading-[100px] tracking-normal font-bellefair text-8xl">
        {planet.name}
      </div>
      <div className="leading-[180%] tracking-normal font-barlow text-center xl:text-left text-lg font-thin h-[128px]">
        {planet.description}
      </div>
      <div className="opacity-25 w-full h-px bg-primary-blue-300" />
      <div className="flex flex-col md:flex-row md:space-x-6 gap-y-6 whitespace-nowrap text-center xl:text-left">
        <div className="flex flex-col flex-1 ">
          <div className="font-barlow-condensed tracking-[2px] text-sm">
            AVG. DISTANCE
          </div>
          <div className=" uppercase font-bellefair text-[28px]">
            {planet.distance}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="font-barlow-condensed tracking-[2px] text-sm">
            EST. TRAVEL TIME
          </div>
          <div className="uppercase font-bellefair text-[28px]">
            {planet.travelTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetDetails;
