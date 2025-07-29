import { useState } from "react";
import { NavLink } from "react-router";
import burger from "../assets/icons/burger.svg";
import GenreList from "./GenreList";
import Search from "./Search";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  }
  
  return (
    <nav className="relative">
      <div className="fixed w-full z-10 dark:bg-black dark:text-white">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-0 flex items-center justify-between">
          <div className="lg:hidden min-w-8">
            <img
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              src={burger}
              alt="Menu icon"
              className="w-8 h-8 cursor-pointer"
            />
          </div>

          <div className="hidden lg:flex px-0 gap-7">
            <NavLink to={"/popular"} onClick={handleCloseMenu}>Most popular movies</NavLink>
            <NavLink to={"/rated"} onClick={handleCloseMenu}>Highest rated movies</NavLink>
            <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse movies by genre</span>
          </div>

          <Search />
        </div>

        {isSubMenuOpen && (
          <div className="hidden lg:block w-full absolute pt-1 z-10">
            <GenreList />
          </div>
        )}
      </div>

      <div className="pt-16">
        {isMenuOpen && (
          <div className="fixed w-full flex flex-col gap-1 lg:hidden bg-gray-300 px-4 pt-3 z-20">
            <NavLink to={"/popular"} onClick={handleCloseMenu}>Most popular movies</NavLink>
            <NavLink to={"/rated"} onClick={handleCloseMenu}>Highest rated movies</NavLink>
            <span className="cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Browse movies by genre</span>

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
