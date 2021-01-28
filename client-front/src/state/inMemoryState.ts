import type { StateIndex } from './index'
import type { NotFound } from '../shared/constants/results'
import { notFound } from '../shared/constants/results'
const state = {}

type InMemoryState = {
  get: <T>(
    path: StateIndex
  ) => T | NotFound
  set: <T>(
    path: StateIndex,
    v: T
  ) => void
}

export const inMemoryState: InMemoryState = {
  // @ts-ignore
  get: (path): T =>
    // @ts-ignore
    state[path] === undefined
      ? notFound
      : // @ts-ignore
        state[path],
  // @ts-ignore
  set: (path, v): void => (state[path] = v),
}
