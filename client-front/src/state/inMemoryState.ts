import type { StateProvider } from './index'
import {
  success,
  notFound,
} from '../shared/constants/results'
const state = {}

type InMemoryState = StateProvider

export const inMemoryState: InMemoryState = {
  get: async (k) => {
    // @ts-ignore
    const v = state[k]
    return v === undefined
      ? notFound
      : v
  },
  put: async (k, v) => {
    // @ts-ignore
    state[k] = v
    return success
  },
}
