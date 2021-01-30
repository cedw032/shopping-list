import { StateProvider } from './index'
import {
  notFound,
  success,
} from '../shared/constants/results'

type LocalPersistedState = StateProvider

export const localPersistedState: LocalPersistedState = {
  get: async (index) => {
    const v = localStorage.getItem(
      index
    )
    return v === null
      ? notFound
      : JSON.parse(v)
  },
  put: async (index, v) => {
    localStorage.setItem(
      index,
      JSON.stringify(v)
    )
    return success
  },
}
