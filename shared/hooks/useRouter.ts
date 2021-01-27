import { useState } from 'react'
import { DataDrivenComponentProps } from '../components/DataDrivenComponent'
import useServerState from './useServerState'
import type { Route } from '../contracts'

export type RouteStructure = Array<DataDrivenComponentProps>
export type Navigate = (
  route: Route
) => void

type Router = {
  navigate: Navigate
  routeStructure: RouteStructure
}

const basePath = 'route'

export default function useRouter(
  defaultRoute: Route
): Router {
  const [route, setRoute] = useState(
    defaultRoute
  )
  const [
    routeStructure,
  ] = useServerState(
    `${basePath}__${route}`,
    [] as RouteStructure
  )

  return {
    navigate: (route: Route) => {
      setRoute(route)
    },
    routeStructure,
  }
}
