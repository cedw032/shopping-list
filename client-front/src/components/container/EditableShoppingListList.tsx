/* eslint react/no-typos: 0 */
import { useRef } from 'react'
import View from '../layout/View'
import useState from '../../hooks/useState'
import React from 'react'
import type { ShoppingListId } from './EditableShoppingList'
import EditableShoppingList from './EditableShoppingList'
import { newStateId } from '../../state'

type Props = {}

export default function EditableShoppingListList({}: Props) {
  const [
    shoppingLists,
    setShoppingLists,
  ] = useState<Array<ShoppingListId>>(
    {
      type: 'ShoppingListList',
      id: '0',
    },
    []
  )

  const newShoppingListIdRef = useRef(
    newStateId()
  )

  const existingShoppingLists = shoppingLists.map(
    (id) => (
      <EditableShoppingList
        key={`ShoppingList_${id}`}
        id={id}
        onEmpty={() => {
          setShoppingLists(
            shoppingLists.filter(
              (i) => i !== id
            )
          )
        }}
      />
    )
  )

  return (
    <View classNames={['scrollingWrappedRow', 'spaceAround']}>
      {[
        ...existingShoppingLists,
        <EditableShoppingList
          key={`ShoppingList_${newShoppingListIdRef.current}`}
          id={
            newShoppingListIdRef.current
          }
          onChange={() => {
            setShoppingLists([
              ...shoppingLists,
              newShoppingListIdRef.current,
            ])
            newShoppingListIdRef.current = newStateId()
          }}
        />,
      ]}
    </View>
  )
}
