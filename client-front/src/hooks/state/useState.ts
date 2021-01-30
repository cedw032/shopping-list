import {
  useMemo,
  useEffect,
  useRef,
  useState as useReactState,
} from 'react'
import type { StateIndex } from '../../state/index'
import { notFound } from '../../shared/constants/results'
import { cloudState } from '../../state/cloudState'
import { inMemoryState } from '../../state/inMemoryState'
import { localPersistedState } from '../../state/localPersistedState'
import type { Success } from '../../shared/constants/results'
import { success } from '../../shared/constants/results'

type StateAccess<T> = [
  T,
  (t: T) => Success
]

export default function useState<T>(
  path: StateIndex,
  defaultState: T
): StateAccess<T> {
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
        path
      )
      inMemory !== reactStateRef.current &&
        inMemory !== notFound &&
        setReactState(inMemory)

      const cloud = await cloudState.get<T>(
        path
      )

      if (cloud !== notFound) {
        setReactState(cloud)
        inMemoryState.put(path, cloud)
        localPersistedState.put(
          path,
          cloud
        )
      } else {
        const localPersisted = await localPersistedState.get<T>(
          path
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
            path,
            localPersisted
          )
        }
      }
    }
    return getState
  }, [
    path,
    setReactState,
    reactStateRef,
  ])

  useEffect(() => {
    getState()
  }, [path, getState])

  function setState(t: T) {
    setReactState(t)
    inMemoryState.put(path, t)
    cloudState.put(path, t)
    return success
  }

  return [reactState, setState]
}
