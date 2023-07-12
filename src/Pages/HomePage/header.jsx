import React from "react";
import Template_1 from "../../Components/Templates/Template_1";

const Header = () => {
  return (
    <>
      <div className="z-50 fixed flex items-center px-10 justify-between w-screen h-[8vh] bg-gray-300 shadow-lg">
        <div className="brand-section items-center flex align-middle">
          <div className="logo rounded-[100%] bg-slate-600 w-[50px] h-[50px]"></div>
          <h1 className="text-2xl pl-4">My Brand</h1>
        </div>
        <div className="profile-section items-center flex ">
          <div className="mx-2 rounded-[100%] bg-slate-600 w-[50px] h-[50px]"></div>
          <div className="mx-2 rounded-[100%] bg-slate-600 w-[50px] h-[50px]"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Header;
