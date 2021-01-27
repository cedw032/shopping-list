/* eslint react/no-typos: 0 */
import 'react'
import { UiNode, Style } from '../constants/common'
import {column} from '../constants/common'

type Props = {
  children?: Array<UiNode>
  style?: Style
}

const listStyle = {
  display: 'flex',
  flexDirection: column,
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
