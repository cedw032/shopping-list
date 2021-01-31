import {
  useMemo,
  useEffect,
  useRef,
  useState as useReactState,
} from 'react'
import type {
  Entity,
  StateIndex,
} from '../state'
import { indexToKey } from '../state'
import { notFound } from '../shared/constants/results'
import { cloudState } from '../state/cloudState'
import { inMemoryState } from '../state/inMemoryState'
import { localPersistedState } from '../state/localPersistedState'
import type { Success } from '../shared/constants/results'
import { success } from '../shared/constants/results'

type StateAccess<T> = [
  T,
  (t: T) => Success
]

export default function useState<
  T extends Entity
>(
  index: StateIndex,
  defaultState: T
): StateAccess<T> {
  const key = indexToKey(index)

  const [
    reactState,
    setReactState,
  ] = useReactState(defaultState)

  const reactStateRef = useRef(
    reactState
  )
  reactStateRef.current = reactState

  const getState = useMemo(() => {
    async function getState() {
      const inMemory = await inMemoryState.get<T>(
        key
      )
      inMemory !==
        reactStateRef.current &&
        inMemory !== notFound &&
        setReactState(inMemory)

      const cloud = await cloudState.get<T>(
        key
      )

      if (cloud !== notFound) {
        setReactState(cloud)
        inMemoryState.put(key, cloud)
        localPersistedState.put(
          key,
          cloud
        )
      } else {
        const localPersisted = await localPersistedState.get<T>(
          key
        )
        if (
          localPersisted !== notFound
        ) {
          localPersisted !==
            reactStateRef.current &&
            setReactState(
              localPersisted
            )
          inMemoryState.put(
            key,
            localPersisted
          )
        }
      }
    }
    return getState
  }, [
    key,
    setReactState,
    reactStateRef,
  ])

  useEffect(() => {
    getState()
  }, [key, getState])

  function setState(t: T) {
    setReactState(t)
    inMemoryState.put(key, t)
    cloudState.put(key, t)
    return success
  }

  return [reactState, setState]
}
