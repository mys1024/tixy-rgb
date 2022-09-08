import type { TixyFn } from '~/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fn: TixyFn = (t, i, x, y) => rgb01(random(), random(), random())

export const code = '(t, i, x, y) => rgb01(random(), random(), random())'
