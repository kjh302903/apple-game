export const isInside = (
  apple: { x: number; y: number },
  selection: { x: number; y: number; width: number; height: number },
  appleSize: number
) => {
  const centerX = apple.x + appleSize / 2;
  const centerY = apple.y + appleSize / 2;
  return (
    centerX >= selection.x &&
    centerX <= selection.x + selection.width &&
    centerY >= selection.y &&
    centerY <= selection.y + selection.height
  );
};
