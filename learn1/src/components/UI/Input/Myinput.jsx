import React from "react";
import classes from "./Myinput.module.css"

const MyInput = (props) =>{
  return(
    <input{...props} className={classes.myInput}>
      {props.children}
    </input>
  )
}

export default MyInput
