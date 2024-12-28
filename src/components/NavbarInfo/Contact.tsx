import React from "react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../HomePages/Footer";

const Contact = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Breadcrumb */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg)' }}>
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Services</h1>
                    <div className="flex items-center space-x-2 text-lg mt-2">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span>Services</span>
                    </div>
                </div>
        </div>

      {/* Contact Form Section */}
      <div className="contact-us max-w-screen-lg mx-auto p-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-orange-600 text-xl font-medium mb-4">Have A Question?</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
            rows={5}
          ></textarea>
          <button className="w-full bg-yellow-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-yellow-600">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-screen-lg mx-auto p-8 text-gray-700">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-orange-600 text-xl font-medium">Call Us</h3>
            <p className="text-lg">+91 9000090000</p>
          </div>
          <div>
            <h3 className="text-orange-600 text-xl font-medium">Mail Us</h3>
            <p className="text-lg">Corpastro@gmail.com</p>
          </div>
          <div>
            <h3 className="text-orange-600 text-xl font-medium">Address</h3>
            <p className="text-lg">
              502, Lalithanjali Apartment, 6-3-347/11, Dwarakapuri Colony,
              Punjagutta, Hyderabad, Telangana, India - 500082.
            </p>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h3 className="text-orange-600 text-xl font-medium mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6 text-gray-700">
            <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-4">Corporate Info</h4>
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

export default Contact;
