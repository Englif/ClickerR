import React from "react";
import MyButton from "./UI/Buttons/MyButton";

const PosItem = function(props,{pos}) {
  function buy (){
    pos.map(pos =>
      console.log(pos.body) )
  }
    return(
      <div className="pos">
        <div className="Content__position">
          <p>
            {props.pos.id}.{props.pos.title}
          </p>
        <div>{props.pos.body}
        <MyButton onclick ={buy} >купить</MyButton>
        </div>
      </div>
  
      </div>
        
      )
  }
  

export default PosItem