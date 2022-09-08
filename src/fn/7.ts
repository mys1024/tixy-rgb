import type { TixyFn } from '~/types'

export const fn: TixyFn = (t, i, x, y) =>
  [0, 1, 2].reduce((a, c) => a | (x > c * 5 && x < c * 5 + 5 && (y + t / 100) % 8 < 4 ? 0xFF << 16 - 8 * c : 0), 0)

export const code = `(t, i, x, y) =>
[0,1,2].reduce((a,c)=>a|(x>c*5&x<c*5+5&(y+t/100)%8<4?0xff<<16-8*c:0),0)`
