import React from "react";
import { TextInputFieldWithLable } from "../Elements/TextInputWithLable";
import ProjectExpComponent from "../Elements/projectExpComponent";
import { Tick } from "../../Assets/symbols";

export default () => {
  const [templateInputs, setTemplateInputs] = React.useState({
    name: "Govind Kshirsagar",
    designation: "Software Developer",
  });

  const handleInputChange = (name, value) => {
    setTemplateInputs({ ...templateInputs, [name]: value });
  };

  React.useEffect(() => {}, [templateInputs]);


  return (
    <div className="flex max-w-full  h-screen">
      <div id="temp-1-form-section" className="bg-gray-300 w-1/2 h-auto">
        <header>Form Section</header>
        <div id="temp-1-form" className="p-2">
          <div className="">
            <label
              htmlFor="name"
              className="p-2 inline-block min-w-fit w-[120px]"
            >
              Your Name
            </label>
            <input
              type="text"
              className="px-2 py-1 outline-none rounded-md"
              name="name"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="name"
              className="p-2 inline-block min-w-fit w-[120px]"
            >
              Your Designation
            </label>
            <input
              type="text"
              className="px-2 py-1 outline-none rounded-md"
              name="designation"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="">
            <ProjectExpComponent section_id={Math.round(Math.random())}/>
            <ProjectExpComponent section_id={Math.round(Math.random())}/>
          </div>
          {/* <button
            className="bg-gray-200 p-3"
            onClick={() =>
              TextInputFieldWithLable(
                Math.random(),
                "Hobbies",
                "Enter Your Hobbies"
              )
            }
          >
            Add New Input +
          </button> */}
        </div>
      </div>
      <div className="resume-section w-2/3">
        <Page templateInputs={templateInputs} />
      </div>
      
    </div>
  );
};

const Page = ({ templateInputs }) => {

  const Print = () => {
    let printContents = document.getElementById(
      "temp-1-view-section"
    ).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <div className="page">
      <div className="subpage flex justify-center">
        <div id="temp-1-view-section" className="bg-white w-11/12">
          <div className="">
            <div className="card p-4">
              <h1 className="text-[32px] text-pink-800">
                {templateInputs.name}
              </h1>
              <h1 className="text-[14px] font-light">
                {templateInputs.designation}
              </h1>
            </div>
          </div>
          <hr />
          <div id="template-body" className="flex justify-between">
            <div id="template-body-left" className="w-2/5 p-5 bg-slate-50">
              {/* <div id="section-name" className="">
                <p className="text-2xl font-bold underline">Objective</p>
                <p className="text-justify px-4 py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro officia minima praesentium consectetur at esse nulla
                  asperiores quos quisquam consequatur sit, maiores optio,
                  dolore modi nemo sunt neque nostrum provident nisi! Molestias
                  id, mollitia possimus nihil est iusto dolores libero.
                </p>
              </div> */}
              <br />
              <div id="section-name" className="">
                <p className="text-2xl font-bold underline">Education</p>
                <p className="text-justify py-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro officia minima praesentium consectetur at esse nulla
                  asperiores quos quisquam consequatur sit, maiores opt 
                </p>
              </div>
            </div>
            <div id="template-body-right" className="w-1/2 p-5">
              <div id="section-name" className="">
                <p className="text-2xl font-bold underline">
                  Projects  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
