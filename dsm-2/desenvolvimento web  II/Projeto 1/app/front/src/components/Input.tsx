type InputProps = {
  red: number;
  green: number;
  blue: number;
  setRed: (value: number) => void;
  setGreen: (value: number) => void;
  setBlue: (value: number) => void;
};

export default function Input(props: InputProps) {
  return (
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
          value={props.red}
          onChange={(event) => props.setRed(Number(event.target.value))}
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
          value={props.green}
          onChange={(event) => props.setGreen(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="blue">B</label>
        <input
          id="blue"
          type="number"
          min={0}
          max={255}
          value={props.blue}
          onChange={(event) => props.setBlue(Number(event.target.value))}
        />
      </div>
    </section>
  );
}