import type { Accessor, Component } from 'solid-js'
import { For, createMemo, createSignal } from 'solid-js'

import type { TixyFn } from '~/types'
import { delay, toColorStr } from '~/util'

function useTimestamp(updateInterval = 0) {
  const start = Date.now()
  const [now, setNow] = createSignal(start)
  const update = async () => {
    setNow(Date.now())
    await delay(updateInterval)
    requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
  return { start, now, setNow }
}

function useColors(tixyFn: Accessor<TixyFn>, row = 16, col = 16) {
  const { start, now } = useTimestamp(40)
  const t = () => now() - start
  const count = row * col
  const colors: Accessor<string>[] = new Array(count)
  for (let i = 0; i < count; i++) {
    const x = i % col
    const y = Math.floor(i / col)
    const colorNum = createMemo(() => tixyFn()(t(), i, x, y))
    colors[i] = createMemo(() => toColorStr(colorNum()))
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
