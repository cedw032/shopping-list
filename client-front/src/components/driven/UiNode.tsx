import type { UiNodeData } from '../../shared/constants/entities'
import componentSet from '../driveable'

type Props = UiNodeData & {
  key_: string | number
}

export default function UiNode({
  componentName,
  props,
  key_,
  children,
}: Props) {
  const component =
    // @ts-ignore
    componentSet[componentName]
  if (component === undefined) {
    console.error(
      `Unsupported Component: ${componentName} ${JSON.stringify(componentSet)}`
    )
    return null
  }
  return component({
    ...props,
    key_,
    children:
      children &&
      children.map((child, i) => (
        <UiNode
          {...{ key: i, key_: i, ...child }}
        />
      )),
  })
}
