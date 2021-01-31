import { useState as useReactState } from 'react'
import { UiTreeData } from '../shared/constants/entities'
import useState from './useState'
import type { RouteName } from '../shared/constants/routes'

export type Navigate = (
  routeName: RouteName
) => void

type Router = {
  navigate: Navigate
  uiData: UiTreeData
}

export default function useRouter(
  defaultRouteName: RouteName
): Router {
  const [
    routeName,
    setRouteName,
  ] = useReactState(defaultRouteName)
  const [uiData] = useState<UiTreeData>(
    { type: 'route', id: routeName },
    []
  )

  return {
    navigate: (
      routeName: RouteName
    ) => {
      setRouteName(routeName)
    },
    uiData,
  }
}
