import { useState } from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="@container max-w-screen-xl mx-auto">
        <div className="h-16 items-center flex text-white">
          <div className="px-4 w-full text-right">
            <p className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>Menu</p>
          </div>

          {/* desktop mode */}
          <div className="hidden sm:block">
            <NavLink to={"/trending"} className="px-4">Trending</NavLink>
            <NavLink to={"/rated"} className="px-4">Rated</NavLink>
          </div>
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