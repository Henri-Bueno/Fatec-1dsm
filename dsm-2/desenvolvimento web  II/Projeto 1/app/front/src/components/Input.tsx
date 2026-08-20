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
      <div className="channel-card channel-red">
        <label htmlFor="red" className="label-color">
          <span className="channel-dot" />
          Vermelho <strong>R</strong>
        </label>
        <output className="channel-value">{props.red}</output>
        <input
          id="red"
          type="range"
          min={0}
          max={255}
          value={props.red}
          onChange={(event) => props.setRed(Number(event.target.value))}
        />
        <div className="range-scale"><span>0</span><span>255</span></div>
      </div>
      <div className="channel-card channel-green">
        <label htmlFor="green"><span className="channel-dot" />Verde <strong>G</strong></label>
        <output className="channel-value">{props.green}</output>
        <input
          id="green"
          type="range"
          min={0}
          max={255}
          value={props.green}
          onChange={(event) => props.setGreen(Number(event.target.value))}
        />
        <div className="range-scale"><span>0</span><span>255</span></div>
      </div>
      <div className="channel-card channel-blue">
        <label htmlFor="blue"><span className="channel-dot" />Azul <strong>B</strong></label>
        <output className="channel-value">{props.blue}</output>
        <input
          id="blue"
          type="range"
          min={0}
          max={255}
          value={props.blue}
          onChange={(event) => props.setBlue(Number(event.target.value))}
        />
        <div className="range-scale"><span>0</span><span>255</span></div>
      </div>
    </section>
  );
}