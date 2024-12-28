import React from 'react';
import Footer from './Footer';
// Removed SCSS imports since we're using Tailwind CSS
// import "./global.scss";
// import "./index.scss";

const AstroTransform = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {}
  }, []);

  return (

    <>
    <div className="mt-8 flex justify-center"> {/* Added top gap */}
      <div
        className="
          relative 
          w-[900px] 
          h-[400px] 
          rounded-[50px] 
          flex 
          flex-col 
          justify-center 
          items-start 
          gap-[20px] 
          pt-[60px] 
          pr-[200px] 
          pb-[70px] 
          pl-[70px] 
          bg-[linear-gradient(144deg,_#c75807_0%,_#811313_100%)]
        "
      >
        <div
          className="
            w-[500px] 
            h-[100px] 
            text-white 
            font-inter 
            font-bold 
            text-[48px] 
            leading-[55px]
          "
        >
          Ready to Transform Your Business?
        </div>
        <div
          className="
            w-[450px] 
            h-[70px] 
            text-white 
            font-inter 
            font-normal 
            text-[18px] 
            leading-[28px]
          "
        >
          Start your journey to success with personalized astrological services from CORP ASTRO. Get started now and see the difference astrology can make.
        </div>
        <button
          className="
            w-[350px] 
            h-[70px] 
            rounded-[50px] 
            flex 
            justify-center 
            items-center 
            bg-[#FF9110] 
            hover:bg-[#e07c0e] 
            transition 
            duration-300
          "
        >
          <span
            className="
              w-[280px] 
              h-[25px] 
              text-white 
              font-inter 
              font-semibold 
              text-[20px] 
              leading-[30px] 
              whitespace-nowrap
            "
          >
            Contact Us for Consultation
          </span>
        </button>
        <img
          src="https://image-resource.creatie.ai/146256977394650/146256977394652/662e16b441fd879ff5cab7f9298bbd5a.webp"
          alt="Service Circle"
          className="
            absolute 
            top-0 
            left-[500px] 
            w-[500px] 
            h-[400px] 
            object-cover
          "
        />
      </div>

    </div>

    
 {/* Top Section */}
   
    <Footer />

   

    </>    
  );
};

export default AstroTransform;
