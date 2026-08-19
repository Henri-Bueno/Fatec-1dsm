type OutputProps = {
  r: number;
  g: number;
  b: number;
};

export default function Output(props: OutputProps) {
  const rgb = `rgb(${props.r},${props.g},${props.b})`;
  const inverseColor = `rgb(${255 - props.r},${255 - props.g},${255 - props.b})`;

  return (
    <section>
      <article className="color-output" style={{ backgroundColor: rgb }}>
        <p style={{ color: inverseColor }}>
          RGB({props.r},{props.g},{props.b})
        </p>
      </article>
    </section>
  );
}
