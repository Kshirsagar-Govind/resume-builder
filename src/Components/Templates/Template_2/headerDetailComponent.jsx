import React from "react";

import Tooltip from "@mui/material/Tooltip";
import { hover } from "@testing-library/user-event/dist/hover";
import { HoverEffectToggle } from "../../../Helpers/constants";
import { PositionSwitch } from "../../../Assets/SVG/svgLogos";

const HeaderDetailsComponent = ({ section_id, deleteMe }) => {
  const [header, setHeader] = React.useState("");
  const [para, setPara] = React.useState("");
  const [section_align, setSection_Alignment] = React.useState("left");

  React.useEffect(() => {}, [header, para]);


  return (
    <div
      id={`${section_id}_para-component`}
      onMouseEnter={()=>HoverEffectToggle(`${section_id}_HeaderDetailComponent`)}
      onMouseLeave={()=>HoverEffectToggle(`${section_id}_HeaderDetailComponent`)}
      className="p-5 ml-2"
    >
      <div className="w-full">
        <div className=" w-full inline-flex mb-3">
          <label htmlFor="name" className="inline-block min-w-fit w-1/2">
            Section Header
          </label>
          <input
            type="text"
            className="px-2 w-full py-1 outline-none rounded-md"
            name={`${section_id}_section_header`}
            placeholder={"enter section header " + section_id}
            onChange={(e) => setHeader(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full inline-flex mb-3">
        <label htmlFor="name" className="inline-block min-w-fit w-1/2">
          Sub Header Details
        </label>
        <textarea
          type="text"
          rows={5}
          className="px-2 w-full py-1 outline-none rounded-md"
          name={`${section_id}_header_detail`}
          placeholder="enter details"
          onChange={(e) => setPara(e.target.value)}
        />
      </div>
      <div className="">
        <Tooltip title="Change Position">
          <button
            className="mr-4 p-2 bg-gray-500 hover:bg-gray-600 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg"
            onClick={() => {
              setSection_Alignment(section_align == "left" ? "right" : "left");
              ChangePosition(
                section_align == "left" ? "right" : "left",
                section_id
              );
            }}
          >
            <PositionSwitch />
          </button>
        </Tooltip>

        {/* <button
          className="mr-4 p-2 bg-red-400 hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg"
          onClick={() => deleteMe(section_id)}
        >
          <DeleteSection />
        </button> */}
      </div>
      {HeaderDetailView(header, para, section_id)}
    </div>
  );
};

const HeaderDetailView = (header_para, details_para, section_id) => {
  let header = header_para || "Section Header " + (section_id + 1);
  let para = details_para || "write something " + (section_id + 1);

  const resumeForm = document.getElementById("template-body-left");
  let parentDiv;
  if (!document.getElementById(`${section_id}_HeaderDetailComponent`)) {
    parentDiv = document.createElement("div"); // parent div for the input
    parentDiv.setAttribute("id", `${section_id}_HeaderDetailComponent`); // setting the id
    parentDiv.setAttribute("class", "relative w-full my-3 h-auto pb-5");
    const node = document.createTextNode("");
    parentDiv.appendChild(node);
  } else {
    parentDiv = document.getElementById(`${section_id}_HeaderDetailComponent`);
  }

  if (!document.getElementById(`${section_id}_ParaHeaderElement`)) {
    const HeaderElement = document.createElement("h1");
    HeaderElement.setAttribute(
      "class",
      "text-[20px] font-bold text-cyan-800 capitalize underline"
    );
    HeaderElement.setAttribute("id", `${section_id}_ParaHeaderElement`);
    HeaderElement.textContent = `${header}`;
    parentDiv.appendChild(HeaderElement);
  } else {
    document.getElementById(
      `${section_id}_ParaHeaderElement`
    ).textContent = `${header}`;
  }

  if (!document.getElementById(section_id + "_parDetailElement")) {
    const headerDetail = document.createElement("p");
    headerDetail.setAttribute(
      "class",
      "pb-2  text-[14px] relative capitalize text-justify text-gray-700"
    );
    headerDetail.setAttribute("id", section_id + "_parDetailElement");
    headerDetail.innerHTML = `${para}`;
    parentDiv.appendChild(headerDetail);
  } else {
    document.getElementById(
      section_id + "_parDetailElement"
    ).innerHTML = `${para}`;
  }

  if (
    resumeForm &&
    !document.getElementById(`${section_id}_HeaderDetailComponent`)
  ) {
    resumeForm.appendChild(parentDiv);
  }
};

const ChangePosition = (align, section_id) => {
  const resumeForm_L = document.getElementById(`template-body-left`);
  const resumeForm_R = document.getElementById(`template-body-right`);
  const parentDiv = document.getElementById(
    `${section_id}_HeaderDetailComponent`
  );
  if (align == "left") {
    resumeForm_L.appendChild(parentDiv);
  } else {
    resumeForm_R.appendChild(parentDiv);
  }
};

export default HeaderDetailsComponent;
