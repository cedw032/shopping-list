/* eslint react/no-typos: 0 */
import 'react'
import List from './List'
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
    <List>
      {[...existingChildren,
      <EditableText
        key={list.length}
        text=""
        onBlur={() => {}}
        setText={(t) =>
          setList([...list, t])
        }
      />]}
    </List>
  )
}
