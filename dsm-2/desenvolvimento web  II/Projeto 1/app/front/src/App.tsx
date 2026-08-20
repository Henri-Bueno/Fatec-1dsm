import { useState } from "react";
import "./App.css";
import Output from "./components/Outpur";
import Input from "./components/Input";


export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);


  return (
    <main className="app-shell">
      <div className="rgb-card">
        <header className="app-header">
          
          <h1>Seletor <span className="rgb-title"><span>R</span><span>G</span><span>B</span></span></h1>
          <p className="subtitle">Ajuste os canais para criar sua cor perfeita.</p>
        </header>
      <Input red = {red} green = {green} blue = {blue} setRed = {setRed} setGreen = {setGreen} setBlue = {setBlue} /> 
      <Output r={red} g={green} b={blue} />
      </div>
    </main>
  );
}
 