import { useRef } from 'react'
import Column from '../layout/Column'
import { NativeStyle } from '../../constants/common'
import {
  StateIndex,
  StateType,
} from '../../state'
import useState from '../../hooks/useState'
import EditableTextBinded from './EditableTextBinded'
import {
  indexToKey,
  newEntityIndex,
} from '../../state'

type Props = {
  index: StateIndex
  childType: StateType
  style?: NativeStyle
  childStyle?: NativeStyle
  onChange?: () => void
}

type ChildList = Array<StateIndex>

export default function EditableTextBindedList({
  index,
  childType,
  style,
  childStyle,
  onChange,
}: Props) {
  const [
    children,
    setChildren,
  ] = useState<ChildList>(index, [])

  const existingChildren = children.map(
    (child) => (
      <EditableTextBinded
        key={indexToKey(child)}
        style={childStyle}
        index={child}
        onBlur={(t) => {
          t === '' &&
            setChildren(
              children.filter(
                (c) => c !== child
              )
            )
        }}
        onChange={onChange}
      />
    )
  )

  const newIndexRef = useRef<StateIndex>(
    newEntityIndex(childType)
  )

  return (
    <Column {...{ style }}>
      {[
        ...existingChildren,
        <EditableTextBinded
          key={indexToKey(
            newIndexRef.current
          )}
          index={newIndexRef.current}
          onChange={() => {
            setChildren([
              ...children,
              newIndexRef.current,
            ])
            onChange && onChange()
            newIndexRef.current = newEntityIndex(
              childType
            )
          }}
        />,
      ]}
    </Column>
  )
}
