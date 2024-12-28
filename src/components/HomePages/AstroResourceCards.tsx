import React, { useRef, useEffect } from "react";

const AstroResourceCards = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative mt-10 flex flex-col items-center">
      {/* Navigation Buttons */}
      <div className="w-full flex justify-between px-8">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="mt-4 flex gap-6 overflow-x-auto no-scrollbar px-8"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[400px] shadow-lg rounded-[16px] flex flex-col justify-start items-start overflow-hidden bg-white"
          >
            <img
              src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg"
              alt="resource-thumbnail"
              className="flex-shrink-0 w-[300px] h-[180px] object-cover"
            />
            <div className="relative w-[300px] h-[220px] p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0A0A0A] font-bold text-[18px] leading-[24px]">
                  Rahu Enters Cancer And Ketu Enters Capricorn
                </h3>
                <p className="text-[#292929] opacity-50 text-[14px] leading-[20px] font-normal">
                  Learn the top tips to become a successful blogger.
                </p>
              </div>

              <div className="absolute bottom-4 left-4 w-[120px] h-[32px] flex justify-center items-center rounded-full bg-[#FF9500] px-[20px] py-[6px]">
                <span className="text-white text-[14px] font-semibold">
                  Read More
                </span>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <img
                  src="https://image-resource.creatie.ai/146256977394650/146256977394652/70adbcfb04a4defb2a640175250026bb.jpeg"
                  alt="author-avatar"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[#989898] text-[14px] font-semibold">
                    Harsha Vardhan
                  </p>
                  <p className="text-[#525252] opacity-50 text-[12px]">
                    Created on October 10, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstroResourceCards;
