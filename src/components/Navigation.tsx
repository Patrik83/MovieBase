import { useState } from "react";
import { NavLink } from "react-router";
import burger from "../assets/icons/burger.svg";
import GenreList from "./GenreList";
import Search from "./Search";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="fixed w-full z-10 dark:bg-black dark:text-white">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-0 flex items-center justify-between">
          <div className="sm:hidden min-w-8">
            <img 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              src={burger} 
              alt="Menu icon" 
              className="w-8 h-8" 
            />
          </div>

          <div className="hidden sm:flex px-2 gap-7">
            <NavLink to={"/trending"}>Trending</NavLink>
            <NavLink to={"/rated"}>Rated</NavLink>
            <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse Genres</span>
          </div>

          <Search />
        </div>

        <div className="hidden sm:block max-w-screen-xl mx-auto px-2 pt-1">
          {isSubMenuOpen && <GenreList />}
        </div>
      </div>

      <div className="pt-16">
        {isMenuOpen && (
          <div className="fixed w-full flex flex-col gap-1 sm:hidden bg-gray-300 px-4 pt-3 z-20">
            <NavLink to={"/trending"}>Trending</NavLink>
            <NavLink to={"/rated"}>Rated</NavLink>
            <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse Genres</span>
            <div className="px-3 pt-1 pb-3">
              {isSubMenuOpen && <GenreList />}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
