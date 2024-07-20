import React from "react";

const Navbar = () => {
  return (
    <div className="py-3 w-full bg-black text-white flex items-center px-4">
      <div className="flex items-center">
        <h2 className="font-bold text-3xl">FNAXIOM</h2>
        <ul className="flex gap-2 ml-4">
          <li><button>HOME</button></li>
          <li><button>ABOUT</button></li>
        </ul>
      </div>
      <div className="mx-auto flex gap-4 items-center">
        <div>
          <h2 className="text-3xl font-bold">FULL STACK INTERNSHIP ASSESSMENT</h2>
        </div>
      </div>

      <div className="flex gap-2 ml-auto">
        <button className="border border-white rounded-full px-2 py-1">
          Home
        </button>
        <button className="border border-white rounded-full px-2 py-1">
          Explore
        </button>
        <button className="rounded-full px-2 py-1 bg-orange-600">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Navbar;
