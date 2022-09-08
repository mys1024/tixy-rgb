import type { AttributifyAttributes } from '@unocss/preset-attributify'
import type { rgb as _rgb, rgb01 as _rgb01, rgbPm1 as _rgbPm1} from '~/util/color'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}

declare global {
  const PI: typeof Math.PI
  const E: typeof Math.E
  const rgb: typeof _rgb
  const rgb01: typeof _rgb01
  const rgbPm1: typeof _rgbPm1
  const sin: typeof Math.sin
  const cos: typeof Math.cos
  const tan: typeof Math.tan
  const exp: typeof Math.exp
  const pow: typeof Math.pow
  const sqrt: typeof Math.sqrt
  const hypot: typeof Math.hypot
  const log: typeof Math.log
  const abs: typeof Math.abs
  const floor: typeof Math.floor
  const ceil: typeof Math.ceil
  const round: typeof Math.round
  const random: typeof Math.random
}
