import { Fragment } from 'react'
import type { UiTreeData } from '../../shared/constants/entities'
import UiNode from '../driven/UiNode'

type RouteRendererProps = {
  uiData: UiTreeData
}

export default function UiTree({
  uiData,
}: RouteRendererProps) {
  return (
    <Fragment>
      {uiData.map((UiNodeData, i) => (
        <UiNode
          {...{ key: i, key_: i, ...UiNodeData }}
        />
      ))}
    </Fragment>
  )
}
