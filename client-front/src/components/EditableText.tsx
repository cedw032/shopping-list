/* eslint react/no-typos: 0 */
import 'react'

export type UserText = string

type Props = {
  text: UserText
  setText: (t: UserText) => void
  onBlur: () => void
}

export default function EditableText({
  text,
  setText,
  onBlur,
}: Props) {
  return (
    <input
      type="text"
      value={text}
      onBlur={onBlur}
      onChange={(e) =>
        setText(e.target.value)
      }
    />
  )
}
