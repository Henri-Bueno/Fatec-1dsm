import { useState } from "react";
import "./App.css";

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const rgb = `rgb(${red},${green},${blue})`;
  const inverseColor = `rgb(${255-red},${255-green},${255-blue})`;

  return (
    <main>
      <section className="color-container">
        <div>
          <label htmlFor="red" className="label-color">
            R
          </label>
          <input
            id="red"
            type="number"
            min={0}
            max={255}
            value={red}
            onChange={(event) => setRed(Number(event.target.value))}
          />
          <div>olá</div>
        </div>
        <div>
          <label htmlFor="green">G</label>
          <input
            id="green"
            type="number"
            min={0}
            max={255}
            value={green}
            onChange={(event) => setGreen(Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="blue">B</label>
          <input
            id="blue"
            type="number"
            min={0}
            max={255}
            value={blue}
            onChange={(event) => setBlue(Number(event.target.value))}
          />
        </div>
      </section>
      <section>
        <article className="color-output" style={{backgroundColor:rgb}}>
          <p style={{color:inverseColor}}>RGB({red},{green},{blue})</p>
        </article>
      </section>
    </main>
  );
}
 