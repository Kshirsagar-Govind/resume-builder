import React from "react";
import Logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="z-50 fixed flex items-center px-10 justify-between w-screen h-[8vh] bg-gray-300 shadow-lg">
        <a href="/">
          <div className="brand-section items-center flex ">
            <div className="mx-2 rounded-[100%] bg-gray-200 p-2 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-file-text"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
              </svg>
            </div>
            <h1 className="text-2xl ">Resume Builder</h1>
          </div>
        </a>
        {/* <div className="profile-section items-center flex ">
          <div className="mx-2 rounded-[100%] bg-gray-200 p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bell-ringing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
              <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
            </svg>
          </div>
          <div className="mx-2 rounded-[100%] bg-gray-200 p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user-circle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </div>
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Header;
