import { useState } from "react";
import "./App.css";
import Output from "./components/Outpur";
import Input from "./components/Input";


export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);


  return (
    <main>
      <Input red = {red} green = {green} blue = {blue} setRed = {setRed} setGreen = {setGreen} setBlue = {setBlue} /> 
      <Output r={red} g={green} b={blue} />
    </main>
  );
}
 