import { createEffect, createSignal } from 'solid-js'
import Renderer from '~/component/Renderer'
import Editor from '~/component/Editor'
import Footer from '~/component/Footer'
import type { TixyFnModule } from '~/types'
import { useTixyFn } from '~/store/fn'

const tixyFnModules: TixyFnModule[] = []
for await (const module of Object.values(import.meta.glob<TixyFnModule>('~/fn/*.ts')).map(i => i()))
  tixyFnModules.push(module)

const [idx, setIdx] = createSignal(0)
const toggle = () => setIdx((idx() + 1) % tixyFnModules.length)
const module = () => tixyFnModules[idx()]

const { setFn } = useTixyFn()

export default () => {
  // eslint-disable-next-line solid/reactivity
  createEffect(() => setFn(() => module().fn))
  return (
    <div
      min-h-100vh
      bg-black
      text-white
    >
      <div
        p-4 pt-12
        space-y-12
        flex flex-col
        items-center
      >
        <div onClick={toggle}>
          <Renderer />
        </div>
        <div>
          <Editor code={module().code} />
        </div>
        <div pt-12>
          <Footer />
        </div>
      </div>
    </div>
  )
}
