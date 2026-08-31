type SavedColorsProps = {
  colors: Array<{
    id: string;
    r: number;
    g: number;
    b: number;
  }>;
  onDeleteColor: (id: string) => void;
};

export default function SavedColors(props: SavedColorsProps) {
  return (
    <section className="saved-colors-section">
      <div className="saved-colors-heading">
        <p className="section-label">Cores Salvas</p>
        <p className="section-hint">Suas cores para futuras criações</p>
      </div>
      <div className="saved-colors-grid">
        {props.colors.map((color) => (
          <div key={color.id} className="saved-color-card">
            <div
              className="saved-color-preview"
              style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
            />
            <div className="saved-color-code-box">
              <code className="saved-color-rgb">
                rgb({color.r}, {color.g}, {color.b})
              </code>
            </div>
            <button
              className="delete-color-btn"
              onClick={() => props.onDeleteColor(color.id)}
              title="Remover cor"
              aria-label="Remover cor"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
