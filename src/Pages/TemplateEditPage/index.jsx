import React from "react";
import Template_1 from "../../Components/Templates/Template_1";
import Template_2 from "../../Components/Templates/Template_2";
import Template_3 from "../../Components/Templates/Template_3";
import Template_4 from "../../Components/Templates/Template_4";
import Template_5 from "../../Components/Templates/Template_5";
import { useParams } from "react-router-dom";

export default ()=>{
    const params = useParams();
    return(
        <div className="">
        {
            params.id=='001'? <Template_1/>:
            params.id=='002'? <Template_2/>:
            params.id=='003'? <Template_3/>:
            params.id=='004'? <Template_4/>:
            params.id=='005'? <Template_5/>:
            // params.id=='001'? <Template_1/>:
            <Template_2/>

        }
        </div>
    )
}