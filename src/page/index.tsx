import { createSignal } from 'solid-js'
import Renderer from '~/component/Renderer'
import Footer from '~/component/Footer'
import type { TixyFnModule } from '~/type'

const tixyFnModules: TixyFnModule[] = []
for await (const module of Object.values(import.meta.glob<TixyFnModule>('~/fn/*.tsx')).map(i => i()))
  tixyFnModules.push(module)

const [idx, setIdx] = createSignal(0)
const module = () => tixyFnModules[idx() % tixyFnModules.length]
const fn = () => module().fn
const intro = () => module().intro

export default () => {
  return (
    <div
      space-y-12
      flex flex-col
      items-center
    >
      <div onClick={() => setIdx(idx() + 1)}>
        <Renderer
          tixyFn={fn()}
        />
      </div>
      <pre>
        { intro() }
      </pre>
      <Footer />
    </div>
  )
}
