export async function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), time))
}

export function ignoreError<T>(fn: () => T): T | undefined {
  try {
    return fn()
  }
  catch (err) {
    return undefined
  }
}

export function sum(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur)
}
