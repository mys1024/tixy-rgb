import { uint8 } from '~/util/plain'
import { rgb, rgb01, rgbPm1 } from '~/util/color'

export function bindUsefulVariables(obj: any) {
  // color
  obj.uint8 = uint8
  obj.rgb = rgb
  obj.rgb01 = rgb01
  obj.rgbPm1 = rgbPm1
  // Math
  for (const name of Object.getOwnPropertyNames(Math))
    obj[name] = Math[name]
}
