import type { AttributifyAttributes } from '@unocss/preset-attributify'
import type { rgba as _rgba} from '~/util'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}

declare global {
  const PI: typeof Math.PI
  const E: typeof Math.E
  const rgba: typeof _rgba
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
