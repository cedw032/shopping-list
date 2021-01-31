/* eslint react/no-typos: 0 */
import 'react'
import { NativeStyle } from '../../constants/common'

export type UserText = string

type Props = {
  text: UserText
  style?: NativeStyle
  setText: (t: UserText) => void
  onBlur?: (t: UserText) => void
}

export default function EditableText({
  text,
  style,
  setText,
  onBlur,
}: Props) {
  return (
    <input
      type="text"
      value={text}
      style={style}
      onBlur={() =>
        onBlur && onBlur(text)
      }
      onChange={(e) =>
        setText(e.target.value)
      }
    />
  )
}
