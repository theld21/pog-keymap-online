export const matrixPositionToIndex = ({
  pos,
  matrixWidth
}: {
  pos: [number, number]
  matrixWidth: number
}) => {
  if (!pos) return 0
  return Number(pos[0]) * matrixWidth + Number(pos[1])
}
