import { useEffect, useState } from "react";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://image-resource.creatie.ai/146256977394649/146256977394651/b6dd8af070a44c78af12f389af43ff63.jpg",
    "https://image-resource.creatie.ai/146256977394649/146256977394651/db7de46dd940ab7f5671bd4faa41a3d7.webp",
    "https://image-resource.creatie.ai/146256977394649/146256977394651/af03b6a761835a1af1b30d1cb2630ff4.webp",
    "https://image-resource.creatie.ai/146256977394649/146256977394651/354124840b1c469a07216e44cd4d0a94.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 mix-blend-soft-light"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-16">
        <h1 className="text-5xl font-bold text-white">
          Unlock your business potential with Astrology & vastu insights
        </h1>
        <p className="text-xl text-white mt-4">
          Enhence decsion-making, improve workforce compatibility, and boost business success with personalized astrological consultation tailored for you corporat needs.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200">
            Our Services
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full ${
              currentSlide === i ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
