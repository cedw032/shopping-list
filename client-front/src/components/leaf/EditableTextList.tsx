/* eslint react/no-typos: 0 */
import 'react'
import Column from '../layout/Column'
import type { UserText } from './EditableText'
import EditableText from './EditableText'

type Props = {
  list: Array<UserText>
  setList: (l: Array<UserText>) => void
}

export default function EditableTextList({
  list,
  setList,
}: Props) {
  const existingChildren = list.map(
    (child, i) => (
      <EditableText
        key={i}
        text={child}
        onBlur={() =>
          setList(
            list.filter((t) => t !== '')
          )
        }
        setText={(t) => {
          const newList = [...list]
          newList[i] = t
          setList(newList)
        }}
      />
    )
  )

  return (
    <Column>
      {[
        ...existingChildren,
        <EditableText
          key={list.length}
          text=""
          onBlur={() => {}}
          setText={(t) =>
            setList([...list, t])
          }
        />,
      ]}
    </Column>
  )
}
