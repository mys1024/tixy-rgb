import type { Accessor } from 'solid-js'
import { For, createMemo, createSignal } from 'solid-js'
import { delay } from '~/util/plain'
import { toColorStr } from '~/util/color'
import { useFnStore } from '~/store/fn'

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

function useColors(row = 16, col = 16) {
  const { activeFn } = useFnStore()
  const { start, now } = useTimestamp(40)
  const t = () => now() - start
  const count = row * col
  const colors: Accessor<string>[] = new Array(count)
  for (let i = 0; i < count; i++) {
    const x = i % col
    const y = Math.floor(i / col)
    const color = () => activeFn()(t(), i, x, y)
    colors[i] = createMemo(() => toColorStr(color()))
  }
  return colors
}

export default () => (
  <div grid gap-2px grid-rows-16 grid-cols-16>
    <For each={useColors()}>
      {color => <div w-4 h-4 rounded-full style={{ 'background-color': color() }} />}
    </For>
  </div>
)
