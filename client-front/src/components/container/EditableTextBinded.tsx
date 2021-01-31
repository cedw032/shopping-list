/* eslint react/no-typos: 0 */
import 'react'
import {
  indexToKey,
  StateIndex,
} from '../../state'
import { valueToEntity } from '../../state'
import useState from '../../hooks/useState'
import type { ClassName } from '../../style'
import EditableText from '../leaf/EditableText'
import type { UserText } from '../leaf/EditableText'

type Props = {
  index: StateIndex
  classNames: Array<ClassName>
  defaultText: string
  placeholder: string
  onBlur?: (v: UserText) => void
  onChange?: () => void
}

export default function EditableTextBinded({
  index,
  classNames,
  defaultText,
  placeholder,
  onBlur,
  onChange,
}: Props) {
  const [text, setText] = useState(
    index,
    valueToEntity(defaultText)
  )

  return (
    <EditableText
      {...{
        text: text.v,
        defaultText,
        placeholder,
        key: indexToKey(index),
        classNames,
        setText: (t) => {
          setText(valueToEntity(t))
          onChange && onChange()
        },
        onBlur,
      }}
    />
  )
}
