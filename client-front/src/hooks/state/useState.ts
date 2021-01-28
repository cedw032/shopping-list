import {
  useEffect,
  useState as useReactState,
} from 'react'
import type { StateIndex } from '../../state/index'
import { notFound } from '../../shared/constants/results'
import { cloudState } from '../../state/cloudState'
import { inMemoryState } from '../../state/inMemoryState'
import { localPersistedState } from '../../state/localPersistedState'

type StateAccess<T> = [
  T,
  (t: T) => void
]

export default function useState<T>(
  path: StateIndex,
  defaultState: T
): StateAccess<T> {
  const [
    reactState,
    setReactState,
  ] = useReactState(defaultState)

  function setState(t: T) {
    setReactState(t)
    inMemoryState.set(path, t)
    cloudState.set(path, t)
  }

  useEffect(() => {
    getState()
  }, [path])

  async function getState() {
    const inMemory = inMemoryState.get<T>(
      path
    )
    inMemory !== reactState &&
      inMemory !== notFound &&
      setReactState(inMemory)

    const cloud = await cloudState.get<T>(
      path
    )

    if (cloud !== notFound) {
      setReactState(cloud)
      inMemoryState.set(path, cloud)
      localPersistedState.set(
        path,
        cloud
      )
    } else {
      const localPersisted = localPersistedState.get<T>(path)
      if (localPersisted !== notFound) {
        inMemory !== reactState &&
          setReactState(localPersisted)
        inMemoryState.set(
          path,
          localPersisted
        )
      }
    }
  }

  return [reactState, setState]
}
