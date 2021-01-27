/* eslint react/no-typos: 0 */
import 'react'
import type {Style} from '../constants/style'
import { column } from '../constants/style'

type Props = {
  children?: Array<JSX.Element>
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
