import React from "react";
import Footer from "../HomePages/Footer";

const About = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* About Us Header */}
      <div className="w-full h-48 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://image-resource.creatie.ai/145721118291381/145721118291383/66ea4685e864e08f190bd9ac09179cf6.jpg')" }}>
        <div className="text-white text-xl md:text-2xl font-medium flex items-center gap-4">
          <span>Home</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>About Us</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-12 items-start">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img src="https://image-resource.creatie.ai/146256977394650/146256977394652/799f87b7b858138e22480b8d6fb642c1.png" alt="Astro" className="w-full max-w-sm" />
            <img src="https://image-resource.creatie.ai/146256977394650/146256977394652/707af02e68e6faf61f4bf2c2c92a4ea6.png" alt="Sun" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="text-gray-800 text-lg  mt-20 leading-7">
            At Corp Astro, we specialize in leveraging the power of the cosmos to enhance your business success through astro-branding, astro staffing, and Vastu services. Led by renowned astrologers Dr. Tumul Raathi and Aanchal Rathi, we align your business strategies with astrological insights to boost profits, optimize sales, and improve employee dynamics. Our expert team provides personalized, holistic solutions that harmonize your brand, team, and workspace with cosmic energies, ensuring growth and prosperity. Partner with Corp Astro to unlock the celestial potential of your business.
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="w-full bg-gray-100 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-6">
          <img src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png" alt="Corp Astro Logo" className="w-40" />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="border rounded-md px-4 py-2 w-full md:w-72 text-gray-600"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md">Submit</button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 py-4 text-center text-sm text-gray-500">
          Corpastro © 2025. All rights reserved.
        </div>
      </footer> */}

       {/* Footer Section */}
       <footer className="bg-white text-black py-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between ml-40 items-center">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="Logo"
            className="w-48 mb-4 md:mb-0"
          />
          <form className="flex space-x-4 mr-64">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-lg">Submit</button>
          </form>
        </div>

        <div className="max-w-screen-lg mx-auto mt-16">
          <div className="grid grid-cols-3 gap-8 mb-8 ">
            <div>
              <h4 className="font-semibold text-lg mb-4 ">Corporate Info</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Astro-Branding</li>
                <li>Astro-Management</li>
                <li>Astro-Staffing</li>
                <li>Vastu & Vibrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm">Corpastro © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default About;
