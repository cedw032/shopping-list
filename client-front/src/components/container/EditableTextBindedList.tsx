import { useRef } from 'react'
import View from '../layout/View'
import type { ClassName } from '../../style'
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
  classNames: Array<ClassName>
  childClassNames: Array<ClassName>
  onChange?: () => void
}

type ChildList = Array<StateIndex>

export default function EditableTextBindedList({
  index,
  childType,
  classNames,
  childClassNames,
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
        classNames={childClassNames}
        defaultText={''}
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
    <View
      classNames={[
        ...classNames,
        'scrollingColumn',
      ]}
    >
      {[
        ...existingChildren,
        <EditableTextBinded
          key={indexToKey(
            newIndexRef.current
          )}
          defaultText={''}
          index={newIndexRef.current}
          classNames={childClassNames}
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
    </View>
  )
}
