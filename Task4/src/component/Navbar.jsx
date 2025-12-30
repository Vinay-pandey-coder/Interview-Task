import React from "react";
import Home from "./Home";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-center gap-10 mt-5 bg-black text-white mx-auto w-150 p-4 rounded-2xl">
          <div>
            <h1 className="font-bold text-2xl">Logo</h1>
          </div>
          <ul className="flex gap-6 font-bold text-sm cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
          </ul>
          <button className="bg-white text-black h-10 w-[20%] rounded-2xl cursor-pointer hover:bg-amber-500 hover:text-white">
            What to task
          </button>
        </nav>
        <Home />
      </div>
    </>
  );
};

export default Navbar;
