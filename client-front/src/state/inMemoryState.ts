import type { StateProvider } from './index'
import {
  success,
  notFound,
} from '../shared/constants/results'
const state = {}

type InMemoryState = StateProvider

export const inMemoryState: InMemoryState = {
  get: async (path) => {
    // @ts-ignore
    const v = state[path]
    return v === undefined
      ? notFound
      : v
  },
  put: async (path, v) => {
    // @ts-ignore
    state[path] = v
    return success
  },
}
