import type {
  Success,
  NotFound,
} from '../shared/constants/results'
import { guid } from '../shared/lib/guid'

export type StateId = string
export type StateType = string // Gotta lock these down at some point
export type StateKey = string //`${StateType}__${StateId}` Figure out why this isn't working

export type StateIndex = {
  type: StateType
  id: StateId
}

export type Value<
  T extends string | number | boolean
> = T
export type Entity = object // Come back here to add id and type once we get decoders working
export type ValueEntity<
  Value
> = Entity & {
  v: Value
}

export type StateReadProvider = {
  get: <T>(
    k: StateKey
  ) => Promise<T | NotFound>
}
export type StateWriteProvider = {
  put: <T>(
    k: StateKey,
    v: T
  ) => Promise<Success>
}
export type StateProvider = StateReadProvider &
  StateWriteProvider

export function indexToKey({
  type,
  id,
}: StateIndex): StateKey {
  return `${type}__${id}` as StateKey
}

export function valueToEntity<Value>(
  v: Value
): ValueEntity<Value> {
  return { v }
}

export function newEntityIndex(
  type: StateType
): StateIndex {
  return {
    type,
    id: guid(),
  }
}

export function newStateId(): StateId {
  return guid()
}
