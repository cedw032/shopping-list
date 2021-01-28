import type { StateIndex } from './index'
import type { NotFound } from '../shared/constants/results'
import { notFound } from '../shared/constants/results'

type LocalPersistedState = {
  get: <T>(
    index: StateIndex
  ) => T | NotFound
  set: <T>(
    index: StateIndex,
    v: T
  ) => void
}

export const localPersistedState: LocalPersistedState = {
  // @ts-ignore
  get: (index): T => {
    const v = localStorage.getItem(
      index
    )
    return v === null
      ? notFound
      : JSON.parse(v)
  },
  set: (index, v): void =>
    localStorage.setItem(
      index,
      JSON.stringify(v)
    ),
}
