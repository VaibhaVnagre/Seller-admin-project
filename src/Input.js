import React from "react";

const Input = (props)=>{
   return(
    <div>
          <label>{props.label}</label>
          <input type={props.type} id={props.id} onChange={props.onChange} />
        </div>
   )
}
export default Input;