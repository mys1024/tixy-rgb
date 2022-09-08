import { uint8 } from '~/util/plain'

export function rgb(r: number, g: number, b: number): number {
  let c = 0xFF & uint8(r)
  c = (c << 8) | 0xFF & uint8(g)
  c = (c << 8) | 0xFF & uint8(b)
  return c
}

export function rgb01(r: number, g: number, b: number): number {
  return rgb(256 * r, 256 * g, 256 * b)
}

export function rgbPm1(r: number, g: number, b: number): number {
  return rgb(128 + 128 * r, 128 + 128 * g, 128 + 128 * b)
}

const hexDigits = '0123456789ABCDEF'
export function toColorStr(rgbVal: number): string {
  let s = ''
  for (let i = 0; i < 6; i++) {
    s = hexDigits[(rgbVal & 0b1111)] + s
    rgbVal >>= 4
  }
  return `#${s}`
}
