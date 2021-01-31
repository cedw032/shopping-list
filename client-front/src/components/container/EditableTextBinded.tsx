/* eslint react/no-typos: 0 */
import 'react'
import {
  indexToKey,
  StateIndex,
} from '../../state'
import { valueToEntity } from '../../state'
import useState from '../../hooks/useState'
import { NativeStyle } from '../../constants/common'
import EditableText from '../leaf/EditableText'
import type { UserText } from '../leaf/EditableText'

type Props = {
  index: StateIndex
  style?: NativeStyle
  onBlur?: (v: UserText) => void
  onChange?: () => void
}

export default function EditableTextBinded({
  index,
  style,
  onBlur,
  onChange,
}: Props) {
  const [text, setText] = useState(
    index,
    valueToEntity('')
  )

  return (
    <EditableText
      {...{
        text: text.v,
        key: indexToKey(index),
        style,
        setText: (t) => {
          setText(valueToEntity(t))
          onChange && onChange()
        },
        onBlur,
      }}
    />
  )
}
