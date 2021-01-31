import { ComponentName } from '../../shared/constants/entities'
import { NativeElement } from '../../constants/common'
import EditableShoppingList from '../container/EditableShoppingList'
import EditableShoppingListList from '../container/EditableShoppingListList'
import View from '../layout/View'

type ComponentSet = {
  [Key in ComponentName]: (
    a: any
  ) => NativeElement
}

const componentSet: ComponentSet = {
  EditableShoppingListList,
  EditableShoppingList,
  View,
}

export default componentSet
