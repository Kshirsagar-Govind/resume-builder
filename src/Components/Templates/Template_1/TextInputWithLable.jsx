 export const TextInputFieldWithLable = (id,lable, placeholder) => {
    let ele_id = id || 'abc';
    let lable_text = lable || 'Objective';
    let placeholder_text = placeholder || 'Enter Objective';
    const editThisElement=(id)=>{
        alert(id);
        }
    const parentDiv = document.createElement("div"); // parent div for the input
    parentDiv.setAttribute("id",ele_id); // setting the id
    // parentDiv.setAttribute("onClick",editThisElement(ele_id)); // setting the id

    const textInputElement = document.createElement("input"); // input element
    textInputElement.setAttribute("class", "px-2 py-1 outline-none rounded-md");
    textInputElement.setAttribute("placeholder", placeholder_text);

    const textInputLabel = document.createElement("label"); // label for the input
    textInputLabel.textContent = lable_text;
    textInputLabel.setAttribute("class", "p-2 inline-block min-w-fit w-[120px]");

    const editElementButton = document.createElement("button"); // input element
    editElementButton.textContent = "edit";
    editElementButton.setAttribute("class", "bg-gray-200 p-2");
    // editElementButton.setAttribute("onClick",'editThisElement(123)'); 

    
    const node = document.createTextNode("");
    parentDiv.appendChild(textInputLabel);
    parentDiv.appendChild(textInputElement);
    parentDiv.appendChild(editElementButton);
    parentDiv.appendChild(node);

    const resumeForm = document.getElementById("temp-1-form");
    resumeForm.appendChild(parentDiv);

      
 

    return resumeForm;
  };

