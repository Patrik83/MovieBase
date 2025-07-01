import { useState } from "react";
import { NavLink } from "react-router";
import burger from "../assets/icons/burger.svg";
import Search from "./Search";
import GenreList from "./GenreList";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav>
      <div className="@container max-w-screen-xl mx-auto">
        <div className="px-2 sm:px-0">
          <div className="w-full flex items-center justify-between">
            <div className="sm:hidden min-w-8">
            <img 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              src={burger} alt="Menu" 
              className="w-8 h-8" 
            />
            </div>
    
            {/* desktop view */}
            <div className="hidden sm:flex px-2 gap-7">
              <NavLink to={"/trending"}>Trending</NavLink>
              <NavLink to={"/rated"}>Rated</NavLink>
              <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse Genres</span>
            </div>

            <Search />
          </div>

          {/* show this submenu in desktop */}
          <div className="hidden sm:block px-2 pt-1">
            {isSubMenuOpen && <GenreList />}
          </div>
        </div>

        {/* mobile view */}
        {isMenuOpen && (
          <div className="flex flex-col gap-1 sm:hidden bg-gray-300 px-4">
            <NavLink to={"/trending"}>Trending</NavLink>
            <NavLink to={"/rated"}>Rated</NavLink>
            <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse Genres</span>

            {/* show this submenu in mobile */}
            <div className="px-2 pt-1">
              {isSubMenuOpen && <GenreList />}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation;