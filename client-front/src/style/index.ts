import { NativeStyle } from '../constants/common'

type FlexDirection = 'row' | 'column'
const row_: FlexDirection = 'row'
const column_: FlexDirection = 'column'

type Overflow = 'auto'
const auto_: Overflow = 'auto'

type FontWeight = 'bold'
const bold_: FontWeight = 'bold'

export type ClassName =
  | 'row'
  | 'column'
  | 'scrollHorizontal'
  | 'scrollVertical'
  | 'scrollingRow'
  | 'scrollingColumn'
  | 'editableText'
  | 'shoppingListTitle'
  | 'editableShoppingList'
  | 'editableShoppingListItems'
  | 'navBar'
  | 'navItem'

type StyleSheet = {
  [Key in ClassName]: NativeStyle
}

export function style(
  cs: Array<ClassName | false>
): NativeStyle {
  return cs.reduce((reduced, c) => {
    if (c === false) {
      return reduced
    }
    return {
      ...reduced,
      ...styles[c],
    }
  }, {})
}

const spacing = [
  '5px',
  '10px',
  '20px',
  '40px',
]

const row = {
  display: 'flex',
  flexDirection: row_,
}
const column = {
  display: 'flex',
  flexDirection: column_,
}
const scrollHorizontal = {
  overflowX: auto_,
}
const scrollVertical = {
  overflowY: auto_,
}
const scrollingRow = {
  ...row,
  ...scrollHorizontal,
}
const scrollingColumn = {
  ...column,
  ...scrollVertical,
}
const editableText = {
  border: 'none',
  outline: 'none',
  boxShadow: `0 0 ${spacing[0]} gray`,
  borderRadius: spacing[1],
  padding: spacing[1],
  margin: spacing[0],
}
const shoppingListTitle = {
  fontWeight: bold_,
  fontSize: '1.6rem',
  marginBottom: spacing[2],
}
const editableShoppingList: NativeStyle = {
  maxWidth: '400px',
  boxShadow: `0 0 ${spacing[0]} gray`,
  borderRadius: spacing[1],
  padding: spacing[1],
  margin: spacing[2],
}

const editableShoppingListItems: NativeStyle = {
  ...scrollingColumn,
  borderRadius: spacing[1],
  maxHeight: '500px',
}

const navBar: NativeStyle = {
  boxShadow: `0 0 ${spacing[0]} gray`,
  backgroundColor: 'black',
  padding: spacing[2],
}

const navItem: NativeStyle = {
  color: 'white',
  fontWeight: bold_,
  margin: spacing[0],
  padding: spacing[1],
  borderRadius: spacing[0],
  cursor: 'pointer',
}

const styles: StyleSheet = {
  row,
  column,
  scrollHorizontal,
  scrollVertical,
  scrollingRow,
  scrollingColumn,
  editableText,
  shoppingListTitle,
  editableShoppingList,
  editableShoppingListItems,
  navBar,
  navItem,
}
