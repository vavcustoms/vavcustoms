import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, ShoppingCart } from "lucide-react";
import miniLogo from "@/assets/images/mini-logo.svg";
import CartIcon from "@/components/CartIcon";

const Navbar = () => {
  const [isNavOpen, setIsOpen] = useState(false);

  const baseClasses = "transition-colors duration-150";
  const activeClasses = "text-brand-500";
  const inactiveClasses = "text-warmwhite hover:text-brand-500";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-dark-muted/30 z-50">
      <div className="px-6 py-4 h-16.5 mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link className="flex items-center gap-1" to="/">
            <img className="w-auto h-6 sm:h-7" src={miniLogo} alt="VAV Customs Logo" />
            <p className="font-heading font-bold">VAV Customs</p>
          </Link>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isNavOpen)}
              type="button"
              className="text-warmwhite hover:text-lightbrown focus:outline-none focus:text-lightbrown cursor-pointer transition duration-150 ease-in-out"
              aria-label="toggle menu"
            >
              {isNavOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div
          className={`absolute top-14 inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-darkbrown md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center font-light text-sm ${isNavOpen ? "translate-x-0 opacity-100 " : "opacity-0 translate-x-full"}`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:mx-6">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${isActive ? activeClasses : inactiveClasses} ${baseClasses}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/the-shop"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              prefetch="none"
            >
              The Shop
            </NavLink>
            <NavLink
              to="/custom-build"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              prefetch="none"
            >
              Custom Build
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              prefetch="none"
            >
              Services
            </NavLink>
            <NavLink
              to="/store"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              prefetch="none"
            >
              Store
            </NavLink>
            <CartIcon styles="flex md:hidden" />
          </div>
        </div>
        <CartIcon styles="hidden md:flex" />
      </div>
    </nav>
  );
};

export default Navbar;
