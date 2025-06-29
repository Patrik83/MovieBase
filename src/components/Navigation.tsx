import { useState } from "react";
import { NavLink } from "react-router";
import burger from "../assets/icons/burger.svg";
import Search from "./Search";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="@container max-w-screen-xl mx-auto">
        <div className="h-16 items-center flex justify-between text-black">
          <div className="px-4 w-full flex justify-end sm:hidden">
            <img 
              onClick={() => setIsOpen(!isOpen)} 
              src={burger} alt="Menu" 
              className="w-8 h-8" 
            />
          </div>

          {/* desktop mode */}
          <div className="hidden sm:block">
            <NavLink to={"/trending"} className="px-4">Trending</NavLink>
            <NavLink to={"/rated"} className="px-4">Rated</NavLink>
          </div>

          {/* search field */}
          <Search />
        </div>

        {/* mobile mode */}
        {isOpen && (
          <div className="block sm:hidden bg-gray-400">
            <NavLink to={"/trending"} className="px-4 block">Trending</NavLink>
            <NavLink to={"/rated"} className="px-4 block">Rated</NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation;