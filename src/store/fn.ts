import { createSignal } from 'solid-js'
import type { TixyFn } from '~/types'

const [fn, setFn] = createSignal<TixyFn>(() => 0xFFFFFF)

export function useTixyFn() {
  return {
    fn,
    setFn,
  }
}
