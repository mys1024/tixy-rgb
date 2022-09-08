export function rgb(r: number, g: number, b: number): number {
  return [r, g, b].reduce((acc, cur) => (acc << 8) | 0xFF & cur, 0)
}

export function rgb01(r: number, g: number, b: number): number {
  return rgb(255 * r, 255 * g, 255 * b)
}

export function rgbPm1(r: number, g: number, b: number): number {
  return rgb01((r + 1) / 2, (g + 1) / 2, (b + 1) / 2)
}

const hexDigits = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70]
const textDecoder = new TextDecoder()
const textBuffer = new Uint8Array([35, 0, 0, 0, 0, 0, 0])
export function toColorStr(rgb: number): string {
  for (let i = 6; i >= 1; i--, rgb >>= 4)
    textBuffer[i] = hexDigits[rgb & 0xF]
  return textDecoder.decode(textBuffer)
}
