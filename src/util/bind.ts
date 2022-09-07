import { rgb, rgb01, rgbPm1 } from '~/util'

export function bindUsefulVariables(obj: any) {
  obj.PI = Math.PI
  obj.E = Math.E
  obj.rgb = rgb
  obj.rgb01 = rgb01
  obj.rgbPm1 = rgbPm1
  obj.sin = Math.sin
  obj.cos = Math.cos
  obj.tan = Math.tan
  obj.exp = Math.exp
  obj.pow = Math.pow
  obj.sqrt = Math.sqrt
  obj.hypot = Math.hypot
  obj.log = Math.log
  obj.abs = Math.abs
  obj.floor = Math.floor
  obj.ceil = Math.ceil
  obj.round = Math.round
  obj.random = Math.random
}
