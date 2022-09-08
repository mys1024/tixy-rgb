import { sum, uint8 } from '~/util/plain'
import { rgb, rgb01, rgbPm1 } from '~/util/color'

export function bindUsefulVariables(obj: any): void {
  // color
  obj.rgb = rgb
  obj.rgb01 = rgb01
  obj.rgbPm1 = rgbPm1
  // util
  obj.uint8 = uint8
  obj.sum = sum
  // Math
  for (const name of Object.getOwnPropertyNames(Math))
    obj[name] = Math[name]
}
