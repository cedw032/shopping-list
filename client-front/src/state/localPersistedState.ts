import { StateProvider } from './index'
import {
  notFound,
  success,
} from '../shared/constants/results'

type LocalPersistedState = StateProvider

export const localPersistedState: LocalPersistedState = {
  get: async (k) => {
    const v = localStorage.getItem(k)
    return v === null
      ? notFound
      : JSON.parse(v)
  },
  put: async (k, v) => {
    localStorage.setItem(
      k,
      JSON.stringify(v)
    )
    return success
  },
}
