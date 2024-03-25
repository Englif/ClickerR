import React from "react";
import PosItem from "./PosItem"
import MyButton from "./UI/Buttons/MyButton";

const ShopMenu = ({pos}) =>{
  return(
  <div>
    <h1>магазин</h1>
      {pos.map(pos=>
        <PosItem pos = {pos} key ={pos.id}/>
        )}

     </div>
  )
}

export default ShopMenu
