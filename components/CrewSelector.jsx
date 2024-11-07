const CrewSelector = ({ crew, onSelect, selected }) => {
  return (
    <div className="flex flex-row mb-12 space-x-10 mt-auto justify-center xl:justify-start">
      {crew.map((member) => (
        <div
          key={member.name}
          onClick={() => onSelect(member)}
          className={`w-[15px] h-[15px] bg-white rounded-full hover:cursor-pointer hover:bg-opacity-65 ${
            selected?.name === member.name ? "" : "bg-opacity-20"
          }`}
        />
      ))}
    </div>
  );
};
export default CrewSelector;
