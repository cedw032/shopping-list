import { Fragment } from 'react'
import type { RouteStructure } from '../hooks/useRouter'
import DataDrivenComponent from './DataDrivenComponent'


type RouteRendererProps = {
  routeStructure: RouteStructure
}

export default function RouteRenderer({
  routeStructure,
}: RouteRendererProps) {
  return (
    <Fragment>
      {routeStructure.map(
        (props, i) => (
          <DataDrivenComponent
            {...{ key: i, ...props }}
          />
        )
      )}
    </Fragment>
  )
}
