/* eslint react/no-typos: 0 */
import 'react'
import {
  UiNode,
  Style,
} from '../constants/common'
import { row } from '../constants/common'

type Props = {
  children?: Array<UiNode>
  style?: Style
}

const listStyle = {
  display: 'flex',
  flexDirection: row,
  justifyContent: 'space-around',
}

export default function List({
  children,
  style,
}: Props) {
  return (
    <div
      style={{ ...style, ...listStyle }}
      children={children}
    />
  )
}
