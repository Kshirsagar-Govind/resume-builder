import React from "react";
import template_1 from "../../Assets/Template_1.png";
import template_2 from "../../Assets/Template_2.png";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="static w-full h-screen flex bg-zinc-100 p-10">
      <div className="static template-shocase flex flex-wrap gap-20 justify-center p-[20px] bg-gray-300 w-full h-fit">
       <Link
          to="/template/edit"
       
       >
        <div
          id="template-1"
          className="relative template-card bg-white w-[15vw] h-fit hover:shadow-md  eas-in duration-100"
          >
          <img src={template_1} alt="" />
          {/* <button
          className="cursor-pointer absolute bottom-0 right-0 m-5 text-[14px] hover:-translate-y-1 eas-in duration-100 rounded-md bg-sky-600 text-white font-bold px-6 py-2 h-fit w-fit">
            Use This
          </button> */}
        </div>
            </Link>
        
      </div>
    </div>
  );
};
