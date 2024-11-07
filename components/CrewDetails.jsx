const CrewDetails = ({ selectedCrew }) => {
  return (
    <div className="flex-grow flex flex-col xl:justify-center text-center xl:text-left max-w-[512px]">
      <div className="opacity-50 font-bellefair uppercase tracking-normal leading-8 text-lg md:text-2xl xl:text-[32px] mb-4">
        {selectedCrew.role}
      </div>
      <div className="mb-6 uppercase text-[56px] leading-[64.2%] font-bellefair text-2xl md:text-[40px] xl:text-[56px] whitespace-nowrap">
        {selectedCrew.name}
      </div>
      <div className="xl:text-lg leading-[180%] font-barlow text-[15px] md:text-base">
        {selectedCrew.description}
      </div>
    </div>
  );
};
export default CrewDetails;
