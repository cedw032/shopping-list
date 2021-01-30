import type {
  Success,
  NotFound,
} from '../shared/constants/results'

export type StateIndex = string
export type StateReadProvider = {
  get: <T>(
    i: StateIndex
  ) => Promise<T | NotFound>
}
export type StateWriteProvider = {
  put: <T>(
    i: StateIndex,
    v: T
  ) => Promise<Success>
}
export type StateProvider = StateReadProvider &
  StateWriteProvider
