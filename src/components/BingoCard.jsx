export default function BingoCard({ grid }) {
  return (
    <div className="card">
      <h2 className="card-title">Bingo</h2>

      <div className="card-grid">
        {grid.flat().map((img, i) => (
          <img key={i} src={img} alt="" className="cell" />
        ))}
      </div>
    </div>
  );
}
