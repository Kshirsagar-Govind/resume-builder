import React from "react";
import template_1 from "../../Assets/Template_1.png";
import template_2 from "../../Assets/Template_2.png";
import template_3 from "../../Assets/Template_3.png";
import template_4 from "../../Assets/Template_4.png";
import template_5 from "../../Assets/Template_5.png";
import { Link } from "react-router-dom";

const templates = [
  {
    id: "template-1",
    temp_id: '001',
    img: template_1,
  },
  {
    id: "template-2",
    temp_id: '002',
    img: template_2,
  },
  {
    id: "template-3",
    temp_id: '003',
    img: template_3,
  },
  {
    id: "template-4",
    temp_id: '004',
    img: template_4,
  },
  {
    id: "template-5",
    temp_id: '005',
    img: template_5,
  },
];

export default () => {
  return (
    <div className="static w-full h-screen p-10">
      <div className="static template-shocase flex flex-wrap gap-10  justify-center p-[20px] w-full h-fit">
      {
          templates.map(temp=>{
            return(
              <Link to={`/template/edit/${temp.temp_id}`}>
                <div
                  id={temp.id}
                  className="relative template-card bg-zinc-300 p-5 w-[15vw] h-fit hover:shadow-md  eas-in duration-100"
                >
                  <img src={temp.img} alt="" />
                </div>
              </Link>
              )
            })
            
          }
          </div>   
     
    </div>
  );
};
