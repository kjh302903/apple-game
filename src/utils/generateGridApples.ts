export const generateGridApples = (
  count: number,
  cols: number,
  cellSize: number,
  offsetX = 0,
  offsetY = 0
) => {
  const apples = [];

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const value = Math.floor(Math.random() * 9) + 1;

    apples.push({
      id: i,
      x: offsetX + col * cellSize,
      y: offsetY + row * cellSize,
      value: value,
    });
  }

  return apples;
};
