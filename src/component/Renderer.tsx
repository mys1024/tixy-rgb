import type { Accessor, Component } from 'solid-js'
import { For, createMemo, createSignal } from 'solid-js'

import type { TixyFn } from '~/type'

function uint8(num: number) {
  num %= 256
  return num < 0 ? num + 256 : num
}

function useTimestamp(interval = 13) {
  const start = Date.now()
  const [now, setNow] = createSignal(start)
  setInterval(() => {
    setNow(Date.now())
  }, interval)
  return { start, now, setNow }
}

function useColors(tixyFn: Accessor<TixyFn>, row = 16, col = 16) {
  const { start, now } = useTimestamp()
  const t = () => now() - start
  const count = row * col
  const colors: Accessor<string>[] = new Array(count)
  for (let i = 0; i < count; i++) {
    const x = i % col
    const y = Math.floor(i / col)
    colors[i] = createMemo(
      () => {
        const [r, g, b, a] = tixyFn()(t(), i, x, y)
        return `rgba(${uint8(r)},${uint8(g)},${uint8(b)},${uint8(a) / 255})`
      },
    )
  }
  return colors
}

const Renderer: Component<{ tixyFn: TixyFn }> = (props) => {
  const tixyFn = () => props.tixyFn
  const colors = useColors(tixyFn)
  return (
    <div grid gap-2px grid-rows-16 grid-cols-16>
      <For each={colors}>
        {color => <div w-4 h-4 rounded-full style={{ 'background-color': color() }} />}
      </For>
    </div>
  )
}

export default Renderer
