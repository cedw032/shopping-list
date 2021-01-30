import { StateProvider } from './index'
import { success } from '../shared/constants/results'

const stateUrl =
  'http://localhost:9090/state'

type CloudState = StateProvider

export const cloudState: CloudState = {
  put: async (path, v) => {
    fetch(`${stateUrl}/${path}`, {
      method: 'PUT',
      headers: {
        'content-type':
          'application/json',
      },
      body: JSON.stringify(v),
    })
    return success
  },
  get: async (path) => {
    const response = await fetch(
      `${stateUrl}/${path}`
    )
    return await response.json()
  },
}
