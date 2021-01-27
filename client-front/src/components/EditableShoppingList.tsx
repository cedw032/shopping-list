import { Fragment } from 'react'
import useServerState from '../hooks/useServerState'
import type { UserText } from './EditableText'
import EditableTextList from './EditableTextList'

type ShoppingListId = string
type ShoppingListItem = UserText
const basePath = 'shoppingList'

type Props = {
  id: ShoppingListId
}

export default function EditableShoppingList({id}: Props) {

  const path = `${basePath}--${id}`

  const [
    shoppingList,
    setShoppingList,
  ] = useServerState(
    path,
    [] as Array<ShoppingListItem>
  )

  return (
    <Fragment>
      <h1>Shopping List</h1>
      <EditableTextList
        list={shoppingList}
        setList={setShoppingList}
      />
    </Fragment>
  )
}
