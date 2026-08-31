type OutputProps = {
  r: number;
  g: number;
  b: number;
  onSaveColor: () => void;
};

export default function Output(props: OutputProps) {
  const rgb = `rgb(${props.r},${props.g},${props.b})`;
  const inverseColor = `rgb(${255 - props.r},${255 - props.g},${255 - props.b})`;

  return (
    <section className="output-section">
      <div className="output-heading">
        <div>
          <p className="section-label">Pré-visualização</p>
          <p className="section-hint">Sua cor em tempo real</p>
        </div>
        <span className="rgb-badge">rgb({props.r}, {props.g}, {props.b})</span>
      </div>
      <article className="color-output" style={{ backgroundColor: rgb }}>
        <p style={{ color: inverseColor }}>RGB</p>
      </article>
      <button className="save-color-btn" onClick={props.onSaveColor}>
         Salvar
      </button>
    </section>
  );
}
