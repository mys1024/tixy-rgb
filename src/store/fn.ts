import { createSignal } from 'solid-js'
import type { TixyFn } from '~/types'

const [activeFn, setActiveFn] = createSignal<TixyFn>(() => 0xFFFFFF)

export function useFnStore() {
  return { activeFn, setActiveFn }
}
