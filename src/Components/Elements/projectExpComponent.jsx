import React from "react";
import { Tick } from "../../Assets/symbols";

const ProjectExpComponent = ({ section_id }) => {
  const [list_styles, setListStyle] = React.useState();

  const [input, setInputs] = React.useState({
    input_id: 1,
    section_header: "Section Name",
    section_sub_header_1: "sub header",
    sub_header_detail_1: "header",
  });

  const [section_header, setSection_header] = React.useState("Section Name");

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
    <div id="project-exp" className="p-3">
      <div className="">
        <label htmlFor="name" className="p-2 inline-block min-w-fit w-[120px]">
          Section Header
        </label>
        <input
          type="text"
          className="px-2 py-1 outline-none rounded-md"
          name="section_header"
          onChange={(e) => setSection_header(e.target.value)}
        />
      </div>

      {inputTagsArray.map((item, idx) => {
        return (
          <>
            <div className="" key={idx}>
              <label
                htmlFor="name"
                className="p-2 inline-block min-w-fit w-[120px]"
              >
                Section Sub Header
              </label>
              <input
                type="text"
                className="px-2 py-1 outline-none rounded-md"
                name={`${section_id}_section_sub_header_${idx + 1}`}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>

            <div className="flex items-start">
              <label
                htmlFor="name"
                className="p-2 inline-block min-w-fit w-[120px]"
              >
                Sub Header Details
              </label>
              <textarea
                type="text"
                className="px-2 py-1 outline-none rounded-md"
                name={`${section_id}_sub_header_detail_${idx + 1}`}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
          </>
        );
      })}
      <div className="flex mt-4">
        <button
          className="mr-4 bg-blue-200 p-3 font-semibold rounded-lg shadow-sm hover:shadow-md"
          onClick={() => AddNewInputs()}
        >
          Add New Input +
        </button>

        <button
          className="bg-red-200 p-3 font-semibold rounded-lg shadow-sm hover:shadow-md disabled:hidden"
          disabled={inputTagsArray.length < 2}
          onClick={() => DeleteLastInput()}
        >
          Delete Input -
        </button>
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
export default ProjectExpComponent;

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
    parentDiv.setAttribute("class", "relative w-auto");
    const node = document.createTextNode("");
    parentDiv.appendChild(node);
  } else {
    parentDiv = document.getElementById(`${section_id}_ProjectExpComponent`);
  }

  if (!document.getElementById(`${section_id}_HeaderElement`)) {
    const HeaderElement = document.createElement("h1");
    HeaderElement.setAttribute(
      "class",
      "text-2xl font-bold underline capitalize"
    );
    HeaderElement.setAttribute("id", `${section_id}_HeaderElement`);
    HeaderElement.textContent = `${header}`;
    parentDiv.appendChild(HeaderElement);
  } else {
    document.getElementById(
      `${section_id}_HeaderElement`
    ).textContent = `${header}`;
  }

  if (!document.getElementById(section_id + "_subHeaderElement_" + tag_id)) {
    const subHeaderElement = document.createElement("p");
    subHeaderElement.setAttribute(
      "class",
      "pt-2 text-xl font-medium capitalize list-inside"
    );
    subHeaderElement.setAttribute(
      "id",
      section_id + "_subHeaderElement_" + tag_id
    );
    subHeaderElement.innerHTML = Tick();
    subHeaderElement.textContent = `${sub_header}`;
    parentDiv.appendChild(subHeaderElement);
  } else {
    document.getElementById(
      section_id + "_subHeaderElement_" + tag_id
    ).textContent = `${sub_header}`;
  }

  if (!document.getElementById(section_id + "_detailsElement_" + tag_id)) {
    const headerDetail = document.createElement("p");
    headerDetail.setAttribute(
      "class",
      "pb-2 relative capitalize justify text-gray-400"
    );
    headerDetail.setAttribute("id", section_id + "_detailsElement_" + tag_id);
    headerDetail.textContent = `${details}`;
    parentDiv.appendChild(headerDetail);
  } else {
    document.getElementById(
      section_id + "_detailsElement_" + tag_id
    ).textContent = `${details}`;
  }

  if (
    resumeForm &&
    !document.getElementById(`${section_id}_ProjectExpComponent`)
  ) {
    resumeForm.appendChild(parentDiv);
  }
};
