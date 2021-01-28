import type { NotFound } from '../shared/constants/results'
import type { StateIndex } from './index'

const stateUrl =
  'http://localhost:9090/state'

type CloudState = {
  set: <T>(
    path: StateIndex,
    t: T
  ) => Promise<void>
  get: <T>(
    path: StateIndex
  ) => Promise<T | NotFound>
}

export const cloudState: CloudState = {
  set: async (path, v) => {
    fetch(`${stateUrl}/${path}`, {
      method: 'PUT',
      headers: {
        'content-type':
          'application/json',
      },
      body: JSON.stringify(v),
    })
  },
  get: async (path) => {
    const response = await fetch(
      `${stateUrl}/${path}`
    )
    return await response.json()
  },
}
