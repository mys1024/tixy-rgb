import Renderer from '~/component/Renderer'
import type { TixyFn } from '~/type'

const fn: TixyFn = (t, i, x, y) => {
  const r = 128 + 128 * Math.sin(i + t / 100)
  const g = 128 + 128 * Math.sin(x + t / 100)
  const b = 128 + 128 * Math.sin(y + t / 100)
  const a = 255
  return [r, g, b, a]
}

export default () => {
  return (
    <div
      space-y-12
      flex flex-col
      items-center
    >
      <div>
        {'(t,i,x,y)=>[r,g,b,a]'}
      </div>
      <Renderer
        tixyFn={fn}
      />
    </div>
  )
}
