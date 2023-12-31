import React from "react";
import template_1 from "../../Assets/Template_1.png";
import template_2 from "../../Assets/Template_2.png";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="static w-full h-screen flex bg-zinc-100 p-10">
      <div className="static menu-cards flex flex-wrap gap-20 justify-center p-[20px] w-full h-fit">
        <Link to="/templates">
          <div
            id="menu-card-1"
            className="relative menu-card bg-blue-300 w-[15vw] h-[45vh] hover:shadow-md hover:-translate-y-1 eas-in duration-100"
          >
            <button className="absolute bottom-0 p-5 text-white font-bold text-[14px] w-full bg-blue-400">
              Create My Resume
            </button>
          </div>
        </Link>
        <Link to="#">
          <div
            id="menu-card-1"
            className="relative menu-card bg-blue-300 w-[15vw] h-[45vh] hover:shadow-md hover:-translate-y-1 eas-in duration-100"
          >
            <button className="absolute bottom-0 p-5 text-white font-bold text-[14px] w-full bg-blue-400">
              View My Documents (Working on)
            </button>
          </div>
        </Link>
        <Link to="#">
          <div
            id="menu-card-1"
            className="relative menu-card bg-blue-300 w-[15vw] h-[45vh] hover:shadow-md hover:-translate-y-1 eas-in duration-100"
          >
            <button className="absolute bottom-0 p-5 text-white font-bold text-[14px] w-full bg-blue-400">
              Create Some Notes (Working on)
            </button>
          </div>
        </Link>
        {/* <Link to="#">
          <div
            id="menu-card-1"
            className="relative menu-card bg-blue-300 w-[15vw] h-[45vh] hover:shadow-md hover:-translate-y-1 eas-in duration-100"
          >
            <button className="absolute bottom-0 p-5 text-white font-bold text-[14px] w-full bg-blue-400">
              Nothing (Working on)
            </button>
          </div>
        </Link> */}
      </div>
    </div>
  );
};
