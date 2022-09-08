import type { TixyFn } from '~/types'

export function isTixyFn(fn: unknown): fn is TixyFn {
  if (!(fn instanceof Function))
    return false
  try {
    if (
      typeof fn(1, 17, 1, 2) !== 'number'
        || typeof fn(255, 6, 6, 0) !== 'number'
        || typeof fn(0, 8, 0, 1) !== 'number'
    )
      return false
  }
  catch (err) {
    return false
  }
  return true
}
