import { useState } from "react";
import { Link } from "react-router";
import miniLogo from "@/assets/images/mini-logo.png";

const Navbar = () => {
  const [isNavOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-darkbrown shadow z-50 text-white">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="w-auto h-6 sm:h-7" src={miniLogo} alt="VAV Customs Logo" />
          </Link>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isNavOpen)}
              type="button"
              className="text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 cursor-pointer"
              aria-label="toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${isNavOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 ${isNavOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-zinc-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isNavOpen ? "translate-x-0 opacity-100 " : "opacity-0 translate-x-full"}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:mx-6">
            <Link
              to="/"
              className="my-2 text-gray-200 transition-colors duration-300 transform hover:text-stone-300  md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              to="/the-shop"
              className="my-2 text-gray-200 transition-colors duration-300 transform hover:text-stone-300 md:mx-4 md:my-0"
            >
              The Shop
            </Link>
            <Link
              to="/custom-build"
              className="my-2 text-gray-200 transition-colors duration-300 transform hover:text-stone-300 md:mx-4 md:my-0"
            >
              Custom Build
            </Link>
            <Link
              to="/store"
              className="my-2 text-gray-200 transition-colors duration-300 transform hover:text-stone-200 md:mx-4 md:my-0"
            >
              Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
