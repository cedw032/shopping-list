import type { NotFound } from './shared/contracts'
import { notFound } from './shared/contracts'
const mockState = {} as any

export type StateAccessPath = string

type StateAccess<T> = {
  set: (
    path: StateAccessPath,
    t: T
  ) => Promise<void>
  get: (
    path: StateAccessPath
  ) => Promise<T | NotFound>
}

export function getStateAccess<
  T
>(): StateAccess<T> {
  return {
    set: async (
      path: StateAccessPath,
      t: T
    ) => (mockState[path] = t as any),
    get: async (
      path: StateAccessPath
    ) =>
      mockState[path] !== undefined
        ? mockState[path]
        : notFound,
  }
}
