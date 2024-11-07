const TechSelector = ({ tech, onSelect, selected }) => {
  return (
    <div className="flex flex-row xl:flex-col gap-x-4 xl:gap-y-8 justify-center xl:justify-normal">
      {tech.map((tech, i) => (
        <div
          key={i}
          onClick={() => onSelect(tech)}
          className={`flex justify-center items-center w-10 h-10 md:h-14 md:w-14 xl:w-20 xl:h-20 rounded-full border border-white border-opacity-25 hover:border-opacity-100 hover:cursor-pointer ${
            selected.name === tech.name
              ? "bg-white text-primary-blue-900"
              : " text-white"
          }`}
        >
          <span className="text-lg md:text-2xl xl:text-[32px] font-bellefair leading-[36.7%]">
            {i + 1}
          </span>
        </div>
      ))}
    </div>
  );
};
export default TechSelector;
