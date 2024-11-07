const TechDetails = ({ selectedTech }) => {
  return (
    <div className="font-bellefair flex flex-col pt-8 text-center xl:text-left">
      <h2 className="mb-4 text-lg md:text-2xl xl:text-[32px] opacity-[50.42%] leading-[36.7%]">
        THE TERMINOLOGY...
      </h2>
      <h1 className="uppercase text-[40px] xl:text-[56px] leading-[64.2px] mb-4 xl:mb-6">
        {selectedTech.name}
      </h1>
      <p className="text-[15px] md:text-base xl:text-lg leading-[180%] font-barlow">
        {selectedTech.description}
      </p>
    </div>
  );
};
export default TechDetails;
