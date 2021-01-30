/* eslint react/no-typos: 0 */
import 'react'
import List from '../layout/Column'
import useState from '../../hooks/useState'
import type { UserText } from '../leaf/EditableText'
import EditableTextList from '../leaf/EditableTextList'

type ShoppingListId = string
type ShoppingListItem = UserText
const basePath = 'shoppingList'

type Props = {
  id: ShoppingListId
  key?: string | number
}

export default function EditableShoppingList({
  id,
  key,
}: Props) {
  const path = `${basePath}--${id}`

  const [
    shoppingList,
    setShoppingList,
  ] = useState(
    path,
    [] as Array<ShoppingListItem>
  )

  return (
    <List
      key={key}
      style={{
        alignItems: 'flex-start',
      }}
    >
      <h1>Shopping List</h1>
      <EditableTextList
        list={shoppingList}
        setList={setShoppingList}
      />
    </List>
  )
}
