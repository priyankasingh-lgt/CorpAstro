"use client";
import React from "react";

const ClientSuccessCards = () => {
  return (
    <div className="flex overflow-x-auto gap-4 px-4 pb-4 max-w-full justify-center items-center">
      {/* Card 1 */}
      <div className="min-w-[300px] h-[350px] shadow-md rounded-lg bg-white relative">
        <div className="absolute top-[100px] left-[20px] w-[260px] text-center text-black font-['Lato'] text-[20px] leading-[25px] font-bold">
          It was a very good experience
        </div>
        <div className="absolute top-[150px] left-[10px] w-[280px] text-center text-black font-['Lato'] text-[14px] leading-[18px] font-normal">
          Working with CORP ASTRO helped us reduce employee turnover and improve
          team collaboration through employee compatibility assessments. Highly recommend.
        </div>
        <div className="absolute top-[20px] left-[15px] w-[260px] h-[50px]">
          <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
          <div className="absolute top-[7px] left-[60px] w-[40px] text-center text-black font-['Lato'] text-[18px] leading-[20px] font-bold">
            Leo
          </div>
          <div className="absolute top-[30px] left-[60px] w-[100px] text-center text-black font-['Lato'] text-[12px] leading-[16px] font-normal">
            Lead Designer
          </div>
          {/* Star Ratings */}
          <div className="absolute top-[30px] left-[180px] flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-500 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="min-w-[300px] h-[350px] shadow-md rounded-lg bg-white relative">
        <div className="absolute top-[100px] left-[20px] w-[260px] text-center text-black font-['Lato'] text-[20px] leading-[25px] font-bold">
          Outstanding Service Quality
        </div>
        <div className="absolute top-[150px] left-[10px] w-[280px] text-center text-black font-['Lato'] text-[14px] leading-[18px] font-normal">
          CORP ASTRO's insights transformed our hiring process. Their compatibility assessments helped us build stronger teams and create a more positive workplace culture.
        </div>
        <div className="absolute top-[20px] left-[15px] w-[260px] h-[50px]">
          <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
          <div className="absolute top-[7px] left-[60px] w-[40px] text-center text-black font-['Lato'] text-[18px] leading-[20px] font-bold">
            Sarah
          </div>
          <div className="absolute top-[30px] left-[60px] w-[100px] text-center text-black font-['Lato'] text-[12px] leading-[16px] font-normal">
            HR Director
          </div>
          {/* Star Ratings */}
          <div className="absolute top-[30px] left-[180px] flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-500 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="min-w-[300px] h-[350px] shadow-md rounded-lg bg-white relative">
        <div className="absolute top-[100px] left-[20px] w-[260px] text-center text-black font-['Lato'] text-[20px] leading-[25px] font-bold">
          Game-Changing Results
        </div>
        <div className="absolute top-[150px] left-[10px] w-[280px] text-center text-black font-['Lato'] text-[14px] leading-[18px] font-normal">
          Implementing CORP ASTRO's recommendations led to a 40% reduction in turnover within six months. Their data-driven approach to team building has been invaluable.
        </div>
        <div className="absolute top-[20px] left-[15px] w-[260px] h-[50px]">
          <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
          <div className="absolute top-[7px] left-[60px] w-[40px] text-center text-black font-['Lato'] text-[18px] leading-[20px] font-bold">
            Mike
          </div>
          <div className="absolute top-[30px] left-[60px] w-[100px] text-center text-black font-['Lato'] text-[12px] leading-[16px] font-normal">
            CEO
          </div>
          {/* Star Ratings */}
          <div className="absolute top-[30px] left-[180px] flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-500 text-sm">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessCards;
