export default function BingoCard({ grid }) {
  return (
    <div className="card">
      {grid.flat().map((img, i) => (
        <img key={i} src={img} alt="" className="cell" />
      ))}
    </div>
  );
}
