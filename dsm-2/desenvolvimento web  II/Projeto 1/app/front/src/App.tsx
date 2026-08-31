import { useState } from "react";
import "./App.css";
import Output from "./components/Outpur";
import Input from "./components/Input";
import SavedColors from "./components/SavedColors";

type SavedColor = {
  id: string;
  r: number;
  g: number;
  b: number;
};

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [savedColors, setSavedColors] = useState<SavedColor[]>([]);

  const handleSaveColor = () => {
    const newColor: SavedColor = {
      id: Date.now().toString(),
      r: red,
      g: green,
      b: blue,
    };
    setSavedColors([newColor, ...savedColors]);
  };

  const handleDeleteColor = (id: string) => {
    setSavedColors(savedColors.filter((color) => color.id !== id));
  };

  return (
    <main className="app-shell">
      <div className="rgb-card">
        <header className="app-header">
          
          <h1>Seletor <span className="rgb-title"><span>R</span><span>G</span><span>B</span></span></h1>
          <p className="subtitle">Ajuste os canais para criar sua cor perfeita.</p>
        </header>
      <Input red = {red} green = {green} blue = {blue} setRed = {setRed} setGreen = {setGreen} setBlue = {setBlue} /> 
      <Output r={red} g={green} b={blue} onSaveColor={handleSaveColor} />
      {savedColors.length > 0 && <SavedColors colors={savedColors} onDeleteColor={handleDeleteColor} />}
      </div>
    </main>
  );
}
 