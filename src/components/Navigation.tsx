import { useState } from "react";
import { NavLink } from "react-router";
import burger from "../assets/icons/burger.svg";
import Search from "./Search";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="@container max-w-screen-xl mx-auto">
        <div className="flex flex-col px-4 gap-2 sm:flex-row sm:justify-between sm:px-0">
          <div className="w-full flex justify-end sm:hidden">
            <img 
              onClick={() => setIsOpen(!isOpen)} 
              src={burger} alt="Menu" 
              className="w-8 h-8" 
            />
          </div>

          {/* desktop mode */}
          <div className="hidden sm:flex sm:items-center px-4 gap-7">
            <NavLink to={"/trending"}>Trending</NavLink>
            <NavLink to={"/rated"}>Rated</NavLink>
          </div>

          {/* search field */}
          <Search />
        </div>

        {/* mobile mode */}
        {isOpen && (
          <div className="flex flex-col gap-1 sm:hidden bg-gray-300 px-4">
            <NavLink to={"/trending"}>Trending</NavLink>
            <NavLink to={"/rated"}>Rated</NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation;