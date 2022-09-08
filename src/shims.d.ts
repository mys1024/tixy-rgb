import type { AttributifyAttributes } from '@unocss/preset-attributify'
import type { sum as _sum } from '~/util/plain'
import type { rgb as _rgb, rgb01 as _rgb01, rgbPm1 as _rgbPm1 } from '~/util/color'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}

declare global {
  // color
  const rgb: typeof _rgb
  const rgb01: typeof _rgb01
  const rgbPm1: typeof _rgbPm1
  // custom math function
  const sum: typeof _sum
  // Math API
  const E: typeof Math.E
  const LN2: typeof Math.LN2
  const LN10: typeof Math.LN10
  const LOG2E: typeof Math.LOG2E
  const LOG10E: typeof Math.LOG10E
  const PI: typeof Math.PI
  const SQRT1_2: typeof Math.SQRT1_2
  const SQRT2: typeof Math.SQRT2
  const abs: typeof Math.abs
  const acos: typeof Math.acos
  const acosh: typeof Math.acosh
  const asin: typeof Math.asin
  const asinh: typeof Math.asinh
  const atan: typeof Math.atan
  const atan2: typeof Math.atan2
  const atanh: typeof Math.atanh
  const cbrt: typeof Math.cbrt
  const ceil: typeof Math.ceil
  const clz32: typeof Math.clz32
  const cos: typeof Math.cos
  const cosh: typeof Math.cosh
  const exp: typeof Math.exp
  const expm1: typeof Math.expm1
  const floor: typeof Math.floor
  const fround: typeof Math.fround
  const hypot: typeof Math.hypot
  const imul: typeof Math.imul
  const log: typeof Math.log
  const log1p: typeof Math.log1p
  const log2: typeof Math.log2
  const log10: typeof Math.log10
  const max: typeof Math.max
  const min: typeof Math.min
  const pow: typeof Math.pow
  const random: typeof Math.random
  const round: typeof Math.round
  const sign: typeof Math.sign
  const sin: typeof Math.sin
  const sinh: typeof Math.sinh
  const sqrt: typeof Math.sqrt
  const tan: typeof Math.tan
  const tanh: typeof Math.tanh
  const trunc: typeof Math.trunc
}
