import { RouteName } from './routes'

export const editableShoppingListName =
  'EditableShoppingList'
export const viewName = 'View'

export type ComponentName =
  | typeof editableShoppingListName
  | typeof viewName

export type UiNodeData = {
  componentName: ComponentName
  props: any
  children?: Array<UiNodeData>
}

export type UiTreeData = Array<UiNodeData>

export type NavLabel = string
export type NavItemData = {
  label: string
  routeName: RouteName
}
