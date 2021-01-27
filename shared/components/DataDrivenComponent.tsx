import type { UiNode } from '../constants/common'
import EditableShoppingList from './EditableShoppingList'
import SplitView from './SplitView'

export type DataDrivenComponentName =
  | 'EditableShoppingList'
  | 'SplitView'
export type DataDrivenComponentSet = {
  [Key in DataDrivenComponentName]: (
    a: any
  ) => UiNode
}

export type DataDrivenComponentProps = {
  componentName: DataDrivenComponentName
  props: any
  children?: Array<DataDrivenComponentProps>
}

const componentSet: DataDrivenComponentSet = {
  EditableShoppingList,
  SplitView,
}

type WithKey<T> = T & {
  key: string | number
}

export default function DataDrivenComponent({
  componentName,
  props,
  key,
  children,
}: WithKey<DataDrivenComponentProps>) {
  const component =
    componentSet[componentName]
  if (component === undefined) {
    console.error(
      'Unsupported Component'
    )
    return null
  }
  return component({
    ...props,
    key,
    children:
      children &&
      children.map((child, i) => (
        <DataDrivenComponent
          {...{ key: i, ...child }}
        />
      )),
  })
}
