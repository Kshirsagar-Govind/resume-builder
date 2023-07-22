import React from "react";
import { Tick, Symbol, Point } from "../../../Assets/symbols";
import {
  AddFields,
  DeleteFields,
  PositionSwitch,
} from "../../../Assets/SVG/svgLogos";
import Tooltip from "@mui/material/Tooltip";
import { HoverEffectToggle } from "../../../Helpers/constants";

const ProjectExpComponent = ({ section_id }) => {

  const [input, setInputs] = React.useState({
    input_id: 1,
    section_header: "Section Name",
    section_sub_header_1: "sub header",
    sub_header_detail_1: "header",
  });

  const [section_header, setSection_header] = React.useState("Section Name");
  const [section_align, setSection_Alignment] = React.useState("left");

  const [inputTagsArray, setInputTagsArray] = React.useState([
    {
      input_id: 1,
      section_sub_header_1: "sub header",
      sub_header_detail_1: "header",
    },
  ]);

  const handleInputChange = (name, value) => {
    setInputs({ ...input, [name]: value });
  };

  React.useEffect(() => {}, [input, section_header, inputTagsArray]);

  const AddNewInputs = () => {
    let input_no = inputTagsArray.length + 1;
    let obj = {
      input_id: input_no,
      ["section_sub_header_" + input_no]: "sub header",
      ["sub_header_detail_" + input_no]: "header",
    };
    setInputTagsArray([...inputTagsArray, obj]);
  };

  const DeleteLastInput = () => {
    let newArray = inputTagsArray;
    let updatedArray = [];
    const deleted = newArray.pop();
    updatedArray = inputTagsArray.filter(
      (it) => it.input_id != deleted.input_id
    );
    document
      .getElementById(`${section_id}_subHeaderElement_${deleted.input_id}`)
      .remove();
    document
      .getElementById(`${section_id}_detailsElement_${deleted.input_id}`)
      .remove();
    setInputs({
      ...input,
      [`${section_id}_section_sub_header_${deleted.input_id}`]: "",
      [`${section_id}_sub_header_detail_${deleted.input_id}`]: "",
    });

    setInputTagsArray(updatedArray);
    const resumeForm = document.getElementById("template-body-left");
    console.log(resumeForm);
  };

  return (
    <div id={`${section_id}-project-exp`} className="p-3 w-full"
    onMouseEnter={()=>HoverEffectToggle(`${section_id}_ProjectExpComponent`)}
    onMouseLeave={()=>HoverEffectToggle(`${section_id}_ProjectExpComponent`)}
    >
      <div className=" w-full inline-flex mb-3">
        <label htmlFor="name" className="p-2 inline-block min-w-fit w-1/2">
          Section Header
        </label>
        <input
          type="text"
          className="px-2 w-full py-1 outline-none rounded-md"
          name="section_header"
          placeholder="enter section header"
          onChange={(e) => setSection_header(e.target.value)}
        />
      </div>

      {inputTagsArray.map((item, idx) => {
        return (
          <>
            <div className="w-full inline-flex mb-3" key={idx}>
              <label
                htmlFor="name"
                className="p-2 inline-block min-w-fit w-1/2"
              >
                Section Sub Header
              </label>
              <input
                type="text"
                className="px-2 w-full py-1 outline-none rounded-md"
                name={`${section_id}_section_sub_header_${idx + 1}`}
                placeholder="enter header"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>

            <div className=" w-full inline-flex mb-3">
              <label
                htmlFor="name"
                className="p-2 inline-block min-w-fit w-1/2"
              >
                Sub Header Details
              </label>
              <textarea
                type="text"
                className="px-2 w-full py-1 outline-none rounded-md"
                name={`${section_id}_sub_header_detail_${idx + 1}`}
                placeholder="enter details"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
            <hr className="mb-3" />
          </>
        );
      })}
      <div className="flex mt-4">
        <Tooltip title="Add More Fields">
          <button
            className="mr-4 bg-blue-400 p-2 hover:bg-blue-500  hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg"
            onClick={() => AddNewInputs()}
          >
            <AddFields />
          </button>
        </Tooltip>
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
        <Tooltip title="Delete Fields">
          <button
            className="bg-red-400 p-2 disabled:hidden hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg"
            disabled={inputTagsArray.length < 2}
            onClick={() => DeleteLastInput()}
          >
            <DeleteFields />
          </button>
        </Tooltip>
      </div>

      {inputTagsArray.map((item, idx) => {
        let section_sub_header =
          input[`${section_id}_section_sub_header_${idx + 1}`];
        let sub_header_detail =
          input[`${section_id}_sub_header_detail_${idx + 1}`];

        return ProjectExpViewElement(
          section_header,
          section_sub_header,
          sub_header_detail,
          item.input_id,
          section_id
        );
      })}
    </div>
  );
};

const ProjectExpViewElement = (
  header_para,
  sub_header_para,
  details_para,
  tag_id,
  section_id
) => {
  let header = header_para || "Section Header";
  let sub_header = sub_header_para || "Sub Header";
  let details = details_para || "some details";

  const resumeForm = document.getElementById("template-body-left");
  let parentDiv;
  if (!document.getElementById(`${section_id}_ProjectExpComponent`)) {
    parentDiv = document.createElement("div"); // parent div for the input
    parentDiv.setAttribute("id", `${section_id}_ProjectExpComponent`); // setting the id
    parentDiv.setAttribute("class", "relative w-auto pb-5");
    const node = document.createTextNode("");
    parentDiv.appendChild(node);
  } else {
    parentDiv = document.getElementById(`${section_id}_ProjectExpComponent`);
  }

  if (!document.getElementById(`${section_id}_XpHeaderElement`)) {
    const HeaderElement = document.createElement("h1");
    HeaderElement.setAttribute(
      "class",
      "text-[20px] font-bold text-white capitalize"
    );
    HeaderElement.setAttribute("id", `${section_id}_XpHeaderElement`);
    HeaderElement.textContent = `${header}`;
    parentDiv.appendChild(HeaderElement);
  } else {
    document.getElementById(
      `${section_id}_XpHeaderElement`
    ).textContent = `${header}`;
  }

  if (!document.getElementById(section_id + "_subHeaderElement_" + tag_id)) {
    const subHeaderElement = document.createElement("p");
    subHeaderElement.setAttribute(
      "class",
      "pt-2 text-[18px] font-medium text-gray-500 capitalize"
    );
    subHeaderElement.setAttribute(
      "id",
      section_id + "_subHeaderElement_" + tag_id
    );
    subHeaderElement.innerHTML = Point('gray') + `${sub_header}`;
    parentDiv.appendChild(subHeaderElement);
  } else {
    document.getElementById(
      section_id + "_subHeaderElement_" + tag_id
    ).innerHTML = Point('gray') + `${sub_header}`;
  }

  if (!document.getElementById(section_id + "_detailsElement_" + tag_id)) {
    const headerDetail = document.createElement("p");
    headerDetail.setAttribute(
      "class",
      "pb-2 relative text-[14px] capitalize text-justify text-gray-400 pl-1"
    );
    headerDetail.setAttribute("id", section_id + "_detailsElement_" + tag_id);
    headerDetail.innerHTML = Symbol("para_space") + `${details}`;
    parentDiv.appendChild(headerDetail);
  } else {
    document.getElementById(
      section_id + "_detailsElement_" + tag_id
    ).innerHTML = Symbol("para_space") + `${details}`;
  }

  if (
    resumeForm &&
    !document.getElementById(`${section_id}_ProjectExpComponent`)
  ) {
    resumeForm.appendChild(parentDiv);
  }
};

export default ProjectExpComponent;

const ChangePosition = (align, section_id) => {
  const resumeForm_L = document.getElementById(`template-body-left`);
  const resumeForm_R = document.getElementById(`template-body-right`);
  const parentDiv = document.getElementById(
    `${section_id}_ProjectExpComponent`
  );
  if (align == "left") {
    const XpHeaderElement = document.getElementById(`${section_id}_XpHeaderElement`)
    XpHeaderElement.classList.replace('text-indigo-900','text-white')
    resumeForm_L.appendChild(parentDiv);
  } else {
    const XpHeaderElement = document.getElementById(`${section_id}_XpHeaderElement`)
    XpHeaderElement.classList.replace('text-white', 'text-indigo-900')
    resumeForm_R.appendChild(parentDiv);
  }
};
