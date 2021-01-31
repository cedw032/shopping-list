/* eslint react/no-typos: 0 */
import 'react'
import Column from '../layout/Column'
import EditableTextBindedList from './EditableTextBindedList'

type ShoppingListId = string

type Props = {
  id: ShoppingListId
}

export default function EditableShoppingList({
  id,
}: Props) {
  return (
    <Column
      style={{
        alignItems: 'flex-start',
      }}
    >
      <h1>Shopping List</h1>
      <EditableTextBindedList
        index={{
          type: 'ShoppingList',
          id,
        }}
        childType="ShoppingListItem"
      />
    </Column>
  )
}
