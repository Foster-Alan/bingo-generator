import { shuffleArray } from "./shuffle";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img8.png",
  "/images/img9.png"
];

export function generateBingoCards(qtd = 30) {
  const cards = [];

  for (let i = 0; i < qtd; i++) {
    const shuffled = shuffleArray(images);

    const grid = [];
    for (let r = 0; r < 3; r++) {
      grid.push(shuffled.slice(r * 3, r * 3 + 3));
    }

    cards.push(grid);
  }

  return cards;
}
