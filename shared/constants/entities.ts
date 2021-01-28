import { Route } from './routes'

export const editableShoppingListName =
  'EditableShoppingList'
export const ColumnName = 'Column'
export const RowName = 'Row'

export type ComponentName =
  | typeof editableShoppingListName
  | typeof ColumnName
  | typeof RowName

export type UiNodeData = {
  componentName: ComponentName
  props: any
  children?: Array<UiNodeData>
}

export type UiTreeData = Array<UiNodeData>

export type NavLabel = string
export type NavItemData = {
  label: string
  route: Route
}
