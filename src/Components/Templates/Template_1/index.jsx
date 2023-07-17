import React, { useRef } from "react";
import ProjectExpComponent from "./projectExpComponent";
import ListCompnent from "./listCompnent";
import HeaderDetailsComponent from "./headerDetailComponent";
import ContactComponent from "./contactComponent";
import {
  AddSection,
  ContactsSectionLogo,
  DeleteSection,
  ListSectionLogo,
  ObjectiveSectionLogo,
  XpSectionLogo,
} from "../../../Assets/SVG/svgLogos";
import Tooltip from "@mui/material/Tooltip";
import ReactToPrint from "react-to-print";
import ListTwoComponent from "./listTwoComponent";
export default () => {
  const [templateInputs, setTemplateInputs] = React.useState({
    name: "your name here",
    designation: "your role",
  });

  const handleInputChange = (name, value) => {
    setTemplateInputs({ ...templateInputs, [name]: value });
  };

  const [allSections, setAllSection] = React.useState([]);
  const [contactSection, setContactSection] = React.useState([]);
  const [projectsSection, setProjectsSection] = React.useState([]);
  const [listSection, setListSection] = React.useState([]);
  const [listTwoSection, setListTwoSection] = React.useState([]);
  const [objectiveSection, setObjectiveSection] = React.useState([]);

  const addSection = (section_type_id) => {
    let newSection = {
      section_type_id: section_type_id,
      section_id: allSections.length,
    };
    setAllSection([...contactSection, newSection]);
  };

  const addContactSection = () => {
    let newSection = { section_id: contactSection.length };
    setContactSection([...contactSection, newSection]);
  };

  const deleteContactSection = () => {
    let newArray = contactSection;
    let updatedArray = [];
    const deleted = newArray.pop();
    updatedArray = contactSection.filter(
      (it) => it.section_id != deleted.section_id
    );
    document.getElementById(`${deleted.section_id}_ContactComponent`).remove();
    setContactSection(updatedArray);
  };

  const addProjectsSection = () => {
    let newSection = { section_id: projectsSection.length };
    setProjectsSection([...projectsSection, newSection]);
  };

  const deleteProjectsSection = () => {
    let newArray = projectsSection;
    let updatedArray = [];
    const deleted = newArray.pop();
    updatedArray = projectsSection.filter(
      (it) => it.section_id != deleted.section_id
    );
    document
      .getElementById(`${deleted.section_id}_ProjectExpComponent`)
      .remove();
    setContactSection(updatedArray);
  };

  const addListSection = () => {
    let newSection = { section_id: listSection.length };
    setListSection([...listSection, newSection]);
  };

  const deleteListSection = () => {
    let newArray = listSection;
    let updatedArray = [];
    const deleted = newArray.pop();
    updatedArray = listSection.filter(
      (it) => it.section_id != deleted.section_id
    );
    document.getElementById(`${deleted.section_id}_ListItemComponent`).remove();
    setContactSection(updatedArray);
  };

  const addListTwoSection = () => {
    let newSection = { section_id: listTwoSection.length };
    setListTwoSection([...listTwoSection, newSection]);
  };

  const deleteListTwoSection = () => {
    let newArray = listTwoSection;
    let updatedArray = [];
    const deleted = newArray.pop();
    updatedArray = listTwoSection.filter(
      (it) => it.section_id != deleted.section_id
    );
    document
      .getElementById(`${deleted.section_id}_ListItemTwoComponent`)
      .remove();
    setListTwoSection(updatedArray);
  };

  const addObjectiveSection = () => {
    let newSection = { section_id: objectiveSection.length };
    setObjectiveSection([...objectiveSection, newSection]);
  };

  const deleteObjectiveSection = (to_be_deleted_section_id) => {
    // let newArray = objectiveSection;
    let updatedArray = objectiveSection.filter(
      (it) => it.section_id != to_be_deleted_section_id
    );
    document
      .getElementById(`${to_be_deleted_section_id}_HeaderDetailComponent`)
      .remove();
    setObjectiveSection(updatedArray);
    console.log(to_be_deleted_section_id, "+_+_+_+");
  };

  React.useEffect(() => {
    if (objectiveSection) {
      console.log(objectiveSection);
    }
  }, [contactSection, objectiveSection]);

  return (
    <div className="flex max-w-full  h-screen">
      <div
        id="temp-1-form-section"
        // className="w-1/2 h-auto"
        className="bg-gray-100 w-1/2 h-auto pl-2"
      >
        <header className="text-center text-2xl p-3 font-medium">
          Resume Details
        </header>

        <div id="temp-1-form" className="p-2 ">
          <div className="w-auto ">
            <div className="my-3 px-4 w-full">
              <h1 className="text-[16px] font-bold pb-3">
                Section For Name and Role
              </h1>
              <div className="w-full inline-flex pb-3">
                <label
                  htmlFor="name"
                  className="py-2 mb-2 inline-block min-w-fit w-1/2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="px-2 w-full py-1 outline-none rounded-md"
                  name="name"
                  placeholder="enter your name"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                />
              </div>
              <div className="w-full inline-flex ">
                <label
                  htmlFor="name"
                  className="py-2 mb-2 inline-block min-w-fit w-1/2"
                >
                  Your Designation
                </label>
                <input
                  type="text"
                  className="px-2 w-full py-1 outline-none rounded-md"
                  name="designation"
                  placeholder="enter disgnation/role"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                />
              </div>
            </div>
            <hr className="mt-3" />
            <div className="mt-3 w-full">
              <div className="ml-3">
                <h1 className=" text-[16px]  font-bold">
                  Section For Objective/Details etc..
                </h1>
                <div className="flex mt-2 mb-4">
                    <button
                      className="inline-flex justify-center  bg-blue-400 px-4 py-2 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg mr-4"
                      onClick={() => addObjectiveSection()}
                    >
                      <p className="text-[14px] mr-2 text-white">
                        Add Section{" "}
                      </p>
                      <ObjectiveSectionLogo />
                    </button>
                  {objectiveSection.length > 0 && (
                      <button
                        className="inline-flex justify-center bg-red-400 px-4 py-2 hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-100  rounded-lg mr-3"
                        onClick={() =>
                          deleteObjectiveSection(objectiveSection.length - 1)
                        }
                      >
                        <p className="text-[14px] mr-2 text-white">
                        Delete Section{" "}
                      </p>
                        <DeleteSection />
                      </button>
                  )}
                </div>
              </div>
              {objectiveSection.map((item, idx) => {
                let id = item.section_id;
                return (
                  <div className="py-3 rounded-[5px] hover:-translate-y-1 hover:bg-slate-300 hover:shadow-lg ease-in duration-100">
                    <HeaderDetailsComponent
                      deleteMe={(v) => deleteObjectiveSection(v)}
                      section_id={id}
                    />
                  </div>
                );
              })}
            </div>
            <hr className="mt-3" />
            <div className="mt-3 w-full">
              <div className="mt-2 mb-4 ml-3">
                <h1 className=" text-[16px] font-bold">
                  Section For Projects/Experience etc..
                </h1>
                <div className="flex mt-2">
                  <Tooltip title="Add New Section">
                    <button
                      className="bg-blue-400 p-2 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg mr-4"
                      onClick={() => addProjectsSection()}
                    >
                      <XpSectionLogo />
                    </button>
                  </Tooltip>
                  {projectsSection.length > 0 && (
                    <Tooltip title="Delete Last Section">
                      <button
                        className="bg-red-400 p-2 hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-100  rounded-lg mr-3"
                        onClick={() => deleteProjectsSection()}
                      >
                        <DeleteSection />
                      </button>{" "}
                    </Tooltip>
                  )}
                </div>
              </div>

              {projectsSection.map((item, idx) => {
                let id = item.section_id;
                return (
                  <div className="py-3 rounded-[5px] hover:-translate-y-1 hover:bg-slate-300 hover:shadow-lg ease-in duration-100">
                    <ProjectExpComponent section_id={id} />
                  </div>
                );
              })}
            </div>
            <hr className="mt-3" />
            <div className="mt-3 w-full">
              <div className="ml-3 mt-2 mb-4">
                <h1 className=" text-[16px] font-bold">
                  Section For Interest/Hobbies/Skills etc..
                </h1>
                <div className="flex mt-2">
                  <Tooltip title="Add New Section">
                    <button
                      className="bg-blue-400 p-2 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg mr-4"
                      onClick={() => addListSection()}
                    >
                      <ListSectionLogo />
                    </button>{" "}
                  </Tooltip>
                  {listSection.length > 0 && (
                    <Tooltip title="Delete Last Section">
                      <button
                        className="bg-red-400 p-2 hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-100  rounded-lg mr-3"
                        onClick={() => deleteListSection()}
                      >
                        <DeleteSection />
                      </button>{" "}
                    </Tooltip>
                  )}
                </div>
              </div>
              {listSection.map((item, idx) => {
                let id = item.section_id;
                return (
                  <div className="py-3 rounded-[5px] hover:-translate-y-1 hover:bg-slate-300 hover:shadow-lg ease-in duration-100">
                    <ListCompnent section_id={id} />{" "}
                  </div>
                );
              })}
            </div>
            <hr className="mt-3" />
            <div className="mt-3 w-full">
              <div className="ml-3 mt-2 mb-4">
                <h1 className=" text-[16px] font-bold">
                  Section2 For Interest/Hobbies/Skills etc..
                </h1>
                <div className="flex mt-2">
                  <Tooltip title="Add New Section">
                    <button
                      className="bg-blue-400 p-2 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg mr-4"
                      onClick={() => addListTwoSection()}
                    >
                      <ListSectionLogo />
                    </button>{" "}
                  </Tooltip>
                  {listTwoSection.length > 0 && (
                    <Tooltip title="Delete Last Section">
                      <button
                        className="bg-red-400 p-2 hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-100  rounded-lg mr-3"
                        onClick={() => deleteListTwoSection()}
                      >
                        <DeleteSection />
                      </button>{" "}
                    </Tooltip>
                  )}
                </div>
              </div>
              {listTwoSection.map((item, idx) => {
                let id = item.section_id;
                return (
                  <div className="py-3 rounded-[5px] hover:-translate-y-1 hover:bg-slate-300 hover:shadow-lg ease-in duration-100">
                    {" "}
                    <ListTwoComponent section_id={id} />{" "}
                  </div>
                );
              })}
            </div>

            <hr className="mt-3" />
            <div className="mt-3  w-full">
              <div className="ml-3 mt-2 mb-4">
                <h1 className=" text-[16px] capitalize font-bold">
                  Section For Contact/bullet points etc..
                </h1>
                <div className="flex mt-2">
                  <Tooltip title="Add New Section">
                    {" "}
                    <button
                      className="bg-blue-400 p-2 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-75  rounded-lg mr-4"
                      onClick={() => addContactSection()}
                    >
                      <ContactsSectionLogo />
                    </button>{" "}
                  </Tooltip>
                  {contactSection.length > 0 && (
                    <Tooltip title="Delete Last Section">
                      {" "}
                      <button
                        className="bg-red-400 p-2 hover:bg-red-500 hover:shadow-lg hover:-translate-y-0.5 ease-in duration-100  rounded-lg mr-3"
                        onClick={() => deleteContactSection()}
                      >
                        <DeleteSection />
                      </button>{" "}
                    </Tooltip>
                  )}
                </div>
              </div>
              {contactSection.map((item, idx) => {
                let id = item.section_id;
                return (
                  <div className="py-3 rounded-[5px] hover:-translate-y-1 hover:bg-slate-300 hover:shadow-lg ease-in duration-100">
                    {" "}
                    <ContactComponent section_id={id} />{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="resume-section w-2/3">
        <Page templateInputs={templateInputs} />
      </div>
    </div>
  );
};

const Page = ({ templateInputs }) => {
  const componentRef = useRef();

  return (
    <div className="relative px-[50px] py-[26px] bg-gray-300">
      <div className="fixed p-3 px-5 rounded-md bg-black shadow-lg right-[5vw] bottom-10 text-white text-xl">

      <ReactToPrint
        trigger={() => <button>Downloada My Resume</button>}
        content={() => componentRef.current}
        />
        </div>
      <div className="page">
        <div ref={componentRef} className="subpage flex">
          <div
            id="temp-1-view-section"
            className="printhis realtive w-full h-full"
          >
            <div className="bg-pink-800 h-[13%] px-10 py-14">
              <div className="relative card">
                <h1 className="text-[32px] text-white capitalize">
                  {templateInputs.name || "Your Name"}
                </h1>
                <h1 className="text-[18px] font-light text-white capitalize">
                  {templateInputs.designation || "Role or Designation here"}
                </h1>
              </div>
            </div>
            <hr />
            <div
              id="template-body"
              // style={{ border: "2px solid black" }}
              className="realtive flex justify-between w-full h-[87%]"
            >
              <div
                id="template-body-left"
                className="w-[70%] p-5 h-full bg-slate-100 px-10"
              ></div>
              <div id="template-body-right" className="w-full p-5 ml-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
