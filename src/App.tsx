import { createSignal } from 'solid-js'
import Renderer from '~/component/Renderer'
import Footer from '~/component/Footer'
import type { TixyFnModule } from '~/type'

const tixyFnModules: TixyFnModule[] = []
for await (const module of Object.values(import.meta.glob<TixyFnModule>('~/fn/*.tsx')).map(i => i()))
  tixyFnModules.push(module)

const [idx, setIdx] = createSignal(0)
const toggle = () => setIdx((idx() + 1) % tixyFnModules.length)
const module = () => tixyFnModules[idx()]
const fn = () => module().fn
const intro = () => module().intro

export default () => {
  return (
    <div
      min-h-100vh
      bg="#282c34"
      text-white
    >
      <div
        p-4 pt-12
        space-y-12
        flex flex-col
        items-center
      >
        <div onClick={toggle}>
          <Renderer
            tixyFn={fn()}
          />
        </div>
        <pre
          max-w-full
          p-4
          overflow-auto
          font-mono
        >
          { intro() }
        </pre>
        <div pt-12>
          <Footer />
        </div>
      </div>
    </div>
  )
}
