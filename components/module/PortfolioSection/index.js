import Image from "next/image";

const PortfolioSection = () => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6">
      <article className="relative">
        {/* <button className="absolute z-[1] -right-[0.5vw] -top-[0.6vw] bg-red-600 hover:bg-red-600/80 text-gray-200 px-[0.7vw] h-[2vw] pb-1 flex justify-center items-center rounded-full">
          x
        </button> */}

        <div className="relative w-[36vw] h-[20vw] sm:w-[16vw] sm:h-[10vw] mx-auto">
          <Image
            src="/assets/images/image-portfolio.png"
            alt="portfolio"
            fill
          />
        </div>
        <p className="text-gray-800 text-xs sm:text-base text-center mt-1">
          Portfolio 1
        </p>
      </article>
    </div>
  );
};

export default PortfolioSection;
