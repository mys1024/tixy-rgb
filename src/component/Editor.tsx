import { ignoreError } from '~/util/plain'
import { isTixyFn } from '~/util/type'
import { useTixyFn } from '~/store/fn'

const { setFn } = useTixyFn()

function handleKeyDown(event: KeyboardEvent) {
  switch (event.key) {
    case 'Tab':
      event.preventDefault()
      break
  }
}

function handleInput(event: InputEvent) {
  const editor = event.target as HTMLDivElement
  const code = editor.textContent
  // eslint-disable-next-line no-eval
  const fn = ignoreError(() => eval(code))
  if (!isTixyFn(fn))
    return
  setFn(() => fn)
}

export default (props: { code: string }) => (
  <div
    max-w-full min-h-1em p-4
    font-mono whitespace-pre overflow-auto
    outline="none hover:none"
    contenteditable
    onKeyDown={handleKeyDown}
    onInput={handleInput}
  >
    {props.code}
  </div>
)
