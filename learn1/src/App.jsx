import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css"
import ShopMenu from "./components/ShopMenu"
import PosItem from "./components/PosItem";
import MyButton from "./components/UI/Buttons/MyButton";
import MyInput from "./components/UI/Input/Myinput";

function App() {
  const [pos, setPos] = useState([
    {id:1, title: 'upgrade', body:'+ 1',func:'+1' },
    {id:2, title: 'upgrade', body:'+ 2', func:'+2'},
  ])
   return (
    <div className="App">
      <div className="main__window">
        <div className="click__window">
        <Counter/>
        </div>
      </div>
      <ShopMenu pos={pos}/>
    </div>
   )

}

export default App;