/* eslint react/no-typos: 0 */
import 'react'
import View from '../layout/View'
import EditableTextBindedList from './EditableTextBindedList'
import EditableTextBinded from './EditableTextBinded'

type ShoppingListId = string

type Props = {
  id: ShoppingListId
}

export default function EditableShoppingList({
  id,
}: Props) {
  return (
    <View
      classNames={['scrollingColumn']}
    >
      <EditableTextBinded
        defaultText={'New Shopping List'}
        index={{
          type: 'shoppingListTitle',
          id,
        }}
        classNames={['shoppingListTitle']}
      />
      <EditableTextBindedList
        index={{
          type: 'ShoppingList',
          id,
        }}
        classNames={[]}
        childClassNames={[]}
        childType="ShoppingListItem"
      />
    </View>
  )
}
