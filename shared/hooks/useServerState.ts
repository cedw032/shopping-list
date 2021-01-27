import {
  useRef,
  useEffect,
  useState,
} from 'react'
import type { ServerStateAccessPath } from '../serverStateAccess'
import { notFound } from '../contracts'
import { getServerStateAccess } from '../serverStateAccess'

type ReturnType<T> = [T, (t: T) => void]

export default function useServerState<
  T
>(
  path: ServerStateAccessPath,
  defaultState: T
): ReturnType<T> {
  const stateAccessRef = useRef(
    getServerStateAccess<T>()
  )

  const [
    localState,
    setLocalState,
  ] = useState(defaultState)

  useEffect(() => {
    async function onPathChange() {
      stateAccessRef.current = getServerStateAccess<T>()
      try {
        const fromServer = await stateAccessRef.current.get(
          path
        )
        fromServer !== notFound &&
          setLocalState(fromServer)
      } catch (e) {
        console.error(e)
      }
    }

    onPathChange()
  }, [path])

  function setState(t: T) {
    setLocalState(t as any) // Uhh... WTF?
    stateAccessRef.current.set(
      path,
      t as any
    ) // Not sure why TS isn't handling this correctly
  }

  return [localState, setState]
}
