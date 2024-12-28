
// const Services  = () => {
//     return (
//         <div className="w-full bg-white">
//             {/* Breadcrumb */}
//             <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)' }}>
//                 <div className="flex flex-col items-center justify-center h-full text-white">
//                     <h1 className="text-4xl font-bold">Services</h1>
//                     <div className="flex items-center space-x-2 text-lg mt-2">
//                         <span>Home</span>
//                         <span>&gt;</span>
//                         <span>Services</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Card Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
//                 {[
//                     { title: 'ASTRO-BRANDING', img: '16b8ed602622fc00c181632807718983.jpg' },
//                     { title: 'ASTRO-MANAGEMENT', img: '16b8ed602622fc00c181632807718983.jpg' },
//                     { title: 'ASTRO-STAFFING', img: '16b8ed602622fc00c181632807718983.jpg' },
//                     { title: 'VASTU & VIBRATIONS', img: '16b8ed602622fc00c181632807718983.jpg' },
//                     { title: 'PERSONAL CONSULTATION', img: '16b8ed602622fc00c181632807718983.jpg' },
//                 ].map((card, index) => (
//                     <div
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
//                         <img
//                             src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
//                             alt={card.title}
//                             className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
//                         <div className="absolute bottom-4 left-4 text-white">
//                             <h2 className="text-lg font-semibold">{card.title}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Footer */}
//             <footer className="bg-gray-50 py-10">
//                 <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
//                     <img src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png" alt="Logo" className="h-12" />
//                     <div className="flex flex-col space-y-2">
//                         <input
//                             type="text"
//                             placeholder="Enter your email to get the latest news..."
//                             className="w-full p-2 border border-gray-300 rounded"
//                         />
//                         <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//                 <div className="mt-10 text-center text-gray-600">
//                     Corpastro © 2025. All rights reserved.
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Services ;




import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="w-full bg-white">
            {/* Breadcrumb */}
            <div
                className="w-full h-64 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Services</h1>
                    <div className="flex items-center space-x-2 text-lg mt-2">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span>Services</span>
                    </div>
                </div>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
                {[
                    { title: "ASTRO-BRANDING", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-branding" },
                    { title: "ASTRO-MANAGEMENT", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-management" },
                    { title: "ASTRO-STAFFING", img: "16b8ed602622fc00c181632807718983.jpg", link: "/astro-staffing" },
                    { title: "VASTU & VIBRATIONS", img: "16b8ed602622fc00c181632807718983.jpg", link: "/vastu-vibrations" },
                    { title: "PERSONAL CONSULTATION", img: "16b8ed602622fc00c181632807718983.jpg", link: "/personal-consultation" },
                ].map((card, index) => (
                    <Link
                        to={card.link}
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
                    >
                        <img
                            src={`https://image-resource.creatie.ai/146256977394650/146256977394652/${card.img}`}
                            alt={card.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-lg font-semibold">{card.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 py-10">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
                    <img
                        src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
                        alt="Logo"
                        className="h-12"
                    />
                    <div className="flex flex-col space-y-2">
                        <input
                            type="text"
                            placeholder="Enter your email to get the latest news..."
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="mt-10 text-center text-gray-600">
                    Corpastro © 2025. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Services;
