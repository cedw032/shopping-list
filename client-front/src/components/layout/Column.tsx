/* eslint react/no-typos: 0 */
import 'react'
import { NativeElement, NativeStyle } from '../../constants/common'
import {column} from '../../constants/common'

type Props = {
  children?: Array<NativeElement>
  style?: NativeStyle
}

const listStyle = {
  display: 'flex',
  flexDirection: column,
}

export default function Column({
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
