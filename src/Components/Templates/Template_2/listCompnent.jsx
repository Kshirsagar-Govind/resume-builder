import React from "react";
import { Cross, Symbol, Tick } from "../../../Assets/symbols";
import {
  AddFields,
  DeleteFields,
  PositionSwitch,
} from "../../../Assets/SVG/svgLogos";
import Tooltip from "@mui/material/Tooltip";
import { HoverEffectToggle } from "../../../Helpers/constants";

const ListComponent = ({ section_id }) => {
  const [section_header, setSection_header] = React.useState("Section Name");
  const [section_align, setSection_Alignment] = React.useState("left");

  const [listItems, setListItems] = React.useState([1]);
  const [listItemsInput, setListItemsInputs] = React.useState({
    list_item_1: "item details",
  });

  const handleListItemInput = (name, value) => {
    setListItemsInputs({ ...listItemsInput, [name]: value });
  };

  const AddNewInputs = () => {
    const arr = [listItems.length + 1];
    setListItems([...listItems, arr]);
  };
  const DeleteLastInput = () => {
    let newArr = [];
    const len = listItems.length;
    newArr = listItems.filter((it, idx) => idx + 1 != len);
    setListItems(newArr);
    document
      .getElementById(`${section_id}_listItemElement_${len - 1}`)
      .remove();
  };

  React.useEffect(() => {}, [listItems, listItemsInput]);
  return (
    <div id={`${section_id}_list_component`} className="p-3 w-full"
    onMouseEnter={()=>HoverEffectToggle(`${section_id}_ListItemComponent`)}
    onMouseLeave={()=>HoverEffectToggle(`${section_id}_ListItemComponent`)}
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
      <div className=" w-full inline-flex mb-3">
        <label htmlFor="" className="p-2 inline-block min-w-fit w-1/2">
          List Items
        </label>
        <div className="w-full grid grid-cols-2 gap-x-3">
          {listItems.map((item, idx) => {
            return (
              <input
                type="text"
                className="px-2 py-1 outline-none rounded-md mr-1 mb-3 "
                name={`list_item_${idx + 1}`}
                placeholder="enter item details"
                onChange={(e) =>
                  handleListItemInput(e.target.name, e.target.value)
                }
              />
            );
          })}
        </div>
      </div>

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
            disabled={listItems.length < 2}
            onClick={() => DeleteLastInput()}
          >
            <DeleteFields />
          </button>
        </Tooltip>
      </div>

      {listItems.map((item, idx) => {
        let listItem = listItemsInput[`list_item_${idx + 1}`];
        return ListViewComponent(section_header, listItem, idx, section_id);
      })}
    </div>
  );
};

const ListViewComponent = (header_para, details_para, tag_id, section_id) => {
  let header = header_para || "Section Header";
  let item = details_para || "item details";

  const resumeForm = document.getElementById("template-body-left");
  let parentDiv;
  if (!document.getElementById(`${section_id}_ListItemComponent`)) {
    parentDiv = document.createElement("div"); // parent div for the input
    parentDiv.setAttribute("id", `${section_id}_ListItemComponent`); // setting the id
    parentDiv.setAttribute("class", "relative w-auto pb-5");
    const node = document.createTextNode("");
    parentDiv.appendChild(node);
  } else {
    parentDiv = document.getElementById(`${section_id}_ListItemComponent`);
  }

  if (!document.getElementById(`${section_id}_ListHeaderElement`)) {
    const HeaderElement = document.createElement("h1");
    HeaderElement.setAttribute(
      "class",
      "text-[20px] font-bold text-cyan-800 capitalize underline"
    );
    HeaderElement.setAttribute("id", `${section_id}_ListHeaderElement`);
    HeaderElement.textContent = `${header}`;
    parentDiv.appendChild(HeaderElement);
  } else {
    document.getElementById(
      `${section_id}_ListHeaderElement`
    ).textContent = `${header}`;
  }
  let listContainer;
  if (!document.getElementById(`${section_id}_ListItemContainer`)) {
    listContainer = document.createElement("div"); // parent div for the input
    listContainer.setAttribute("id", `${section_id}_ListItemContainer`); // setting the id
    listContainer.setAttribute("class", "grid grid-cols-2");
    const node = document.createTextNode("");
    listContainer.appendChild(node);
  } else {
    listContainer = document.getElementById(`${section_id}_ListItemContainer`);
  }

  if (!document.getElementById(section_id + "_listItemElement_" + tag_id)) {
    const listItemElement = document.createElement("p");
    listItemElement.setAttribute(
      "class",
      "pt-2 text-[14px] font-light capitalize "
    );
    listItemElement.setAttribute(
      "id",
      section_id + "_listItemElement_" + tag_id
    );
    listItemElement.innerHTML = `${item}`;
    listContainer.appendChild(listItemElement);
    parentDiv.appendChild(listContainer);
  } else {
    document.getElementById(
      section_id + "_listItemElement_" + tag_id
    ).innerHTML = Tick('#155E75') + `${item}`;
  }

  if (
    resumeForm &&
    !document.getElementById(`${section_id}_ListItemComponent`)
  ) {
    resumeForm.appendChild(parentDiv);
  }
};

const ChangePosition = (align, section_id) => {
  const resumeForm_L = document.getElementById(`template-body-left`);
  const resumeForm_R = document.getElementById(`template-body-right`);
  const parentDiv = document.getElementById(`${section_id}_ListItemComponent`);
  if (align == "left") {
    resumeForm_L.appendChild(parentDiv);
  } else {
    resumeForm_R.appendChild(parentDiv);
  }
};

export default ListComponent;
