export type TixyFn = (r: number, g: number, b: number, a: number) => number

export interface TixyFnModule {
  fn: TixyFn
  intro: string
}
