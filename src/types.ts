export type TixyFn = (t: number, i: number, x: number, y: number) => number

export interface TixyFnModule {
  fn: TixyFn
  intro: string
}
