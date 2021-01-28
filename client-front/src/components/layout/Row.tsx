/* eslint react/no-typos: 0 */
import 'react'
import {
  NativeElement,
  NativeStyle,
} from '../../constants/common'
import { row } from '../../constants/common'

type Props = {
  children?: Array<NativeElement>
  style?: NativeStyle
}

const listStyle = {
  display: 'flex',
  flexDirection: row,
  justifyContent: 'space-around',
}

export default function Row({
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
