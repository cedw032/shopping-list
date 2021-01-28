import { ComponentName } from '../../shared/constants/entities'
import { NativeElement } from '../../constants/common'
import EditableShoppingList from '../container/EditableShoppingList'
import Row from '../layout/Row'
import Column from '../layout/Column'

type ComponentSet = {
  [Key in ComponentName]: (a: any) => NativeElement
}

const componentSet: ComponentSet = {
  EditableShoppingList,
  Row,
  Column,
}

export default componentSet