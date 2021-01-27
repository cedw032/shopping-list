import type { NotFound } from './contracts'

export type ServerStateAccessPath = string

const stateUrl =
  'http://localhost:9898/state'

type ServerStateAccess<T> = {
  set: (
    path: ServerStateAccessPath,
    t: T
  ) => Promise<void>
  get: (
    path: ServerStateAccessPath
  ) => Promise<T | NotFound>
}

export function getServerStateAccess<
  T
>(): ServerStateAccess<T> {
  return {
    set: async (
      path: ServerStateAccessPath,
      v: T
    ) => {
      fetch(
        `${stateUrl}/${path}`,
        {
          method: 'PUT',
          headers: {
            'content-type':
              'application/json',
          },
          body: JSON.stringify(v),
        }
      )
    },
    get: async (
      path: ServerStateAccessPath
    ) => {
      const response = await fetch(
        `${stateUrl}/${path}`
      )
      return await response.json()
    },
  }
}
