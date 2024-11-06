const Container = ({ title, pageNumber, children }) => {
  return (
    <div className="flex items-center justify-center max-w-[1110px] h-full mx-auto">
      <div className="flex flex-col px-10 xl:px-0 py-6 md:py-10 xl:py-12 w-full h-full">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-6 font-barlow-condensed text-base md:text-[28px] justify-center md:justify-start">
            <span className="font-bold tracking-[4.72px] opacity-25 ">
              0{pageNumber}
            </span>
            <h1 className="uppercase leading-7 tracking-[4px] font-normal">
              {title}
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
