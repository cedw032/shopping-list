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

const rowStyle = {
  display: 'flex',
  flexDirection: row,
}

export default function Row({
  children,
  style,
}: Props) {
  return (
    <div
      style={{ ...style, ...rowStyle }}
      children={children}
    />
  )
}
