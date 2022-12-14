// Made by The Misfits, Powered by React.
import "./App.css";
import { FactArray } from "./components/factArray";
import { useState } from "react";

function App() {
  const [newFact, setNewFact] = useState("Could not Autogenerate.");
  
  window.addEventListener("load", (event) => {
let factNumber = Math.floor(Math.random() * FactArray.length);
    setNewFact(FactArray[factNumber]);
  });
    
  function handleClick() {
   let factNumber = Math.floor(Math.random() * FactArray.length);
    setNewFact(FactArray[factNumber]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div class="content">
        <p class="dyk">DID YOU KNOW?</p>
        <p class="fact">{newFact}</p>
        <p class="refresh" onClick={handleClick}>&#x21bb;</p>
    </div> 
      </header>
    </div>
  );
}

export default App;
