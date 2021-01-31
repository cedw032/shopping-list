import { NativeStyle } from '../constants/common'

type FlexDirection = 'row' | 'column'
const row_: FlexDirection = 'row'
const column_: FlexDirection = 'column'

type Overflow = 'auto'
const auto_: Overflow = 'auto'

type FontWeight = 'bold'
const bold_: FontWeight = 'bold';

export type ClassName =
  | 'row'
  | 'column'
  | 'scrollHorizontal'
  | 'scrollVertical'
  | 'scrollingRow'
  | 'scrollingColumn'
  | 'editableText'
  | 'shoppingListTitle'

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
    borderBottom: '1px solid black'
}
const shoppingListTitle = {
    fontWeight: bold_,
    fontSize: '1.6rem'
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
}
