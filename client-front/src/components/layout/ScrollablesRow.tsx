/* eslint react/no-typos: 0 */
import 'react'
import {
  NativeElement,
  NativeStyle,
} from '../../constants/common'
import Row from './Row'

type Props = {
  children?: Array<NativeElement>
  style?: NativeStyle
}

const scrollStyle: React.CSSProperties = {
  overflowX: 'scroll',
}

export default function ScrollableRow({
  children,
  style,
}: Props) {
  return (
    <Row
      style={{
        ...style,
        ...scrollStyle,
      }}
      children={children}
    />
  )
}
