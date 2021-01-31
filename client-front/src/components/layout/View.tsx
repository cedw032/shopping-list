/* eslint react/no-typos: 0 */
import 'react'

import type { NativeElement } from '../../constants/common'
import type { ClassName } from '../../style'
import { style } from '../../style'

type Props = {
  classNames: Array<ClassName>
  children: Array<NativeElement>
}

export default function View({
  classNames,
  children,
}: Props): NativeElement {
  return (
    <div
      style={style(classNames)}
      children={children}
    />
  )
}
