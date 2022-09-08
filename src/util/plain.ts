export async function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

export function uint8(num: number) {
  num = Math.floor(num) % 256
  return num < 0 ? num + 256 : num
}

export function ignoreError<T>(fn: () => T): T | undefined {
  try {
    return fn()
  }
  catch (err) {
    return undefined
  }
}
