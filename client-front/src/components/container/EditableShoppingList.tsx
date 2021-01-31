/* eslint react/no-typos: 0 */
import 'react'
import type { StateId } from '../../state'
import View from '../layout/View'
import EditableTextBindedList from './EditableTextBindedList'
import EditableTextBinded from './EditableTextBinded'

export type ShoppingListId = StateId

type Props = {
  id: ShoppingListId
  onChange?: () => void
  onEmpty?: () => void
}

export default function EditableShoppingList({
  id,
  onChange,
  onEmpty,
}: Props) {
  return (
    <View
      classNames={[
        'editableShoppingList',
      ]}
    >
      <EditableTextBinded
        defaultText={
          'New Shopping List'
        }
        index={{
          type: 'shoppingListTitle',
          id,
        }}
        classNames={[
          'shoppingListTitle',
        ]}
      />
      <EditableTextBindedList
        index={{
          type: 'ShoppingList',
          id,
        }}
        classNames={[
          'editableShoppingListItems',
        ]}
        onChange={() => {
          onChange && onChange()
        }}
        onEmpty={() => onEmpty && onEmpty()}
        childClassNames={[]}
        childType="ShoppingListItem"
      />
    </View>
  )
}
