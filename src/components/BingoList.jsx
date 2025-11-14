import BingoCard from "./BingoCard";
import { generateBingoCards } from "../utils/generateBingo";
import { useState } from "react";

export default function BingoList() {
  const [cards, setCards] = useState(() => generateBingoCards(30));

  return (
    <div>
      <button className="generate-btn" onClick={() => setCards(generateBingoCards(30))}>
        Gerar novas 30 cartelas
      </button>

      <div className="cards-container">
        {cards.map((card, index) => (
          <BingoCard key={index} grid={card} />
        ))}
      </div>
    </div>
  );
}
