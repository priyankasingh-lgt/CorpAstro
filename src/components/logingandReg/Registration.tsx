import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="relative w-[393px] h-[917px] bg-white overflow-hidden mx-auto">
      {/* Top Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[52px] bg-transparent">
        <div className="absolute top-0 left-0 right-0 h-4 bg-black rounded-b-lg"></div>
        <div className="absolute top-4 right-3 flex items-center gap-1">
          <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
          <div className="w-[20px] h-[6px] bg-gray-400 rounded-sm"></div>
        </div>
        <div className="absolute top-4 left-3 w-[54px] h-[21px] bg-gray-300"></div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex justify-center items-center bg-transparent">
        <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
      </div>

      {/* Form Section */}
      <div className="absolute top-[189px] left-[9px] w-[375px] bg-gray-50 p-6 rounded-md shadow-md flex flex-col gap-8">
        {/* Title */}
        <h1 className="text-xl font-medium text-black text-center">Register</h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-gray-300 rounded-lg p-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full text-sm text-gray-600 focus:outline-none"
            />
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-sm text-gray-600 focus:outline-none"
            />
          </div>
          <div className="bg-white border border-gray-300 rounded-lg p-3">
            <input
              type="password"
              placeholder="Password (min 8 characters)"
              className="w-full text-sm text-gray-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="privacy-policy"
            className="w-4 h-4 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-400"
          />
          <label
            htmlFor="privacy-policy"
            className="text-xs text-gray-600 leading-snug"
          >
            I have read and agree to the{" "}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-600"
            >
              privacy policy and terms
            </a>
            .
          </label>
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-3 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600">
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-4">
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-.64-.058-1.26-.162-1.856H12v3.515h5.645a4.828 4.828 0 01-2.096 3.168v2.64h3.39c1.98-1.832 3.12-4.536 3.12-7.467z" />
              <path d="M12 23c2.43 0 4.467-.81 5.956-2.181l-3.39-2.64c-.892.6-2.027.951-3.175.951-2.44 0-4.511-1.648-5.251-3.865H2.67v2.64A11.95 11.95 0 0012 23z" />
              <path d="M6.749 14.714a5.905 5.905 0 010-3.428V8.646H2.67a11.997 11.997 0 000 6.708h4.08zM12 4.488c1.327 0 2.521.456 3.462 1.34l2.562-2.562C16.465 1.81 14.428 1 12 1 7.853 1 4.303 3.489 2.67 6.646h4.079c.74-2.217 2.81-3.865 5.251-3.865z" />
              <path d="M22 4.605l-3.39 2.64A7.517 7.517 0 0012 4.488V8h10c.015-.33.022-.662.022-.995a11.95 11.95 0 00-.022-.4z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
            <span className="w-4 h-4 bg-gray-600 rounded"></span>
            <span className="text-sm font-medium text-gray-700">
              Continue with Mobile Number
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
