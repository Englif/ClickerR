import React, { useState } from "react";
import "./Counter.css"
import MyButton from "./UI/Buttons/MyButton";
import MyInput from "./UI/Input/Myinput";
import { open } from "../App";
const Counter = function() {
  const[value,setValue] = useState('')
  const [count,setCount] = useState(0)
  const[active,setActve] = useState(false)
  let FinalCheck = true
  function addNum(){
    setCount(count + 1)

  }
  const Cheat =(e) =>{
    e.preventDefault()
    setCount(+value)}
    function open(){
      setActve(!active)
    
    }
  // const Cheat =(e) =>{
  //   e.preventDefault()
  //   setCount(+value)
  // }
  // const openCheatMenu = event => {
  //   event.currentTarget.classList.toggle('Cheat__menu--opened');
  // }; Меняет состояние конкретного объекта удобненько
  //  style ={{marginBottom: "30px"}} инлайн стиль
  return(  
<div className="count__block">
  <MyButton onClick={open}>openCheatmenu</MyButton>
  <div className="count__num">
    {count}
  </div>
  <div className={active ? 'menu active' : 'menu'}>
        <MyInput
        placeholder = 'введите число'
        value = {value}
        onChange ={e => setValue(e.target.value)}
        type = 'number'
        >
        </MyInput>
        { <MyButton onClick={Cheat}>
          Cheat
        </MyButton> }
      </div>
  <div className="button__block">
    <MyButton className="main__button" onClick={addNum}>
      Click
    </MyButton>
      </div>
</div>
    )
}
export default Counter 