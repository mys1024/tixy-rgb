import { createEffect, createSignal } from 'solid-js'
import type { TixyFnModule } from '~/types'
import { useFnStore } from '~/store/fn'
import Renderer from '~/component/Renderer'
import Editor from '~/component/Editor'
import Footer from '~/component/Footer'

const tixyFnModules = Object.values(import.meta.glob<TixyFnModule>('~/fn/*.ts', { eager: true }))
const [idx, setIdx] = createSignal(0)
const module = () => tixyFnModules[idx()]
const toggle = () => setIdx((idx() + 1) % tixyFnModules.length)

const { setActiveFn } = useFnStore()

export default () => {
  // eslint-disable-next-line solid/reactivity
  createEffect(() => setActiveFn(() => module().fn))
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
        <div cursor-pointer onClick={toggle}>
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
