import { useState as useReactState } from 'react'
import { UiTreeData } from '../shared/constants/entities'
import useState from './state/useState'
import type { Route } from '../shared/constants/routes'

export type Navigate = (
  route: Route
) => void

type Router = {
  navigate: Navigate
  uiData: UiTreeData
}

const basePath = 'route'

export default function useRouter(
  defaultRoute: Route
): Router {
  const [
    route,
    setRoute,
  ] = useReactState(defaultRoute)
  const [uiData] = useState<UiTreeData>(
    `${basePath}__${route}`,
    []
  )

  return {
    navigate: (route: Route) => {
      setRoute(route)
    },
    uiData,
  }
}
