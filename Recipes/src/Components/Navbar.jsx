import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleCreateClick = (e) => {
    if (!currentUser) {
      e.preventDefault();
      toast.error("Please login first");
      navigate("/login");
    }
    setisOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-3 py-3 relative">

      {/* LOGO */}
      <h1 className="text-[#F7A725] text-[29px] md:text-[20px] font-semibold">
        FLAVORIZ
      </h1>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-7 text-[15px]">
        <NavLink to="/" end className={({ isActive }) =>
          isActive ? "text-[#F7A725] font-bold" : "text-black"
        }>Home</NavLink>

        <NavLink to="/recipes" className={({ isActive }) =>
          isActive ? "text-[#F7A725] font-bold" : "text-black"
        }>Recipes</NavLink>

        <NavLink to="/create"
          onClick={handleCreateClick}
          className={({ isActive }) =>
            isActive ? "text-[#F7A725] font-bold" : "text-black"
          }>
          Create Recipes
        </NavLink>

        <NavLink to="/fav" className={({ isActive }) =>
          isActive ? "text-[#F7A725] font-bold" : "text-black"
        }>
          Favorite Recipes
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "text-[#F7A725] font-bold" : "text-black"
        }>Contact Us</NavLink>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2">

        {/* DESKTOP LOGIN / LOGOUT */}
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="hidden md:flex bg-[#F7A725] text-white px-3 py-1.5 rounded-[5px]"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:flex bg-[#F7A725] text-white px-3 py-1.5 rounded-[5px]"
          >
            Login
          </button>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setisOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-14 right-2 w-[200px] bg-white shadow-lg rounded-xl p-4 flex flex-col items-end gap-4 md:hidden z-50">

          <NavLink to="/" onClick={() => setisOpen(false)}>Home</NavLink>
          <NavLink to="/recipes" onClick={() => setisOpen(false)}>Recipes</NavLink>

          <NavLink to="/create" onClick={handleCreateClick}>
            Create Recipe
          </NavLink>

          <NavLink to="/fav" onClick={() => setisOpen(false)}>
            Favorite Recipes
          </NavLink>
                    <NavLink to="/contact" onClick={() => setisOpen(false)}>Contact Us</NavLink>

          {/* MOBILE LOGIN / LOGOUT */}
          {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                setisOpen(false);
              }}
              className="bg-[#F7A725] text-white px-3 py-1.5 rounded-[5px]"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setisOpen(false);
              }}
              className="bg-[#F7A725] text-white px-2.5 py-1.5 rounded-[5px]"
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;