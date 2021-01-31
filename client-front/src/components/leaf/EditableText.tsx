/* eslint react/no-typos: 0 */
import 'react'
import type { ClassName } from '../../style'
import { style } from '../../style'

export type UserText = string

type Props = {
  text: UserText
  classNames: Array<ClassName>
  setText: (t: UserText) => void
  onBlur?: (t: UserText) => void
}

export default function EditableText({
  text,
  classNames,
  setText,
  onBlur,
}: Props) {
  return (
    <input
      type="text"
      value={text}
      style={style(['editableText', ...classNames])}
      onBlur={() =>
        onBlur && onBlur(text)
      }
      onChange={(e) =>
        setText(e.target.value)
      }
    />
  )
}
