import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}

declare global {
  const PI: typeof Math.PI
  const E: typeof Math.E
  const sin: typeof Math.sin
  const cos: typeof Math.cos
  const tan: typeof Math.tan
  const exp: typeof Math.exp
  const pow: typeof Math.pow
  const sqrt: typeof Math.sqrt
  const log: typeof Math.log
  const abs: typeof Math.abs
  const floor: typeof Math.floor
  const ceil: typeof Math.ceil
  const round: typeof Math.round
  const random: typeof Math.random
}
