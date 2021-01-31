import type { StateProvider } from './index'
import { success } from '../shared/constants/results'

const stateUrl =
  'http://localhost:9090/state'

type CloudState = StateProvider

export const cloudState: CloudState = {
  put: async (k, v) => {
    fetch(`${stateUrl}/${k}`, {
      method: 'PUT',
      headers: {
        'content-type':
          'application/json',
      },
      body: JSON.stringify(v),
    })
    return success
  },
  get: async (k) => {
    const response = await fetch(
      `${stateUrl}/${k}`
    )
    return await response.json()
  },
}
