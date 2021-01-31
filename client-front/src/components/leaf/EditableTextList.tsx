/* eslint react/no-typos: 0 */
import 'react'
import { ClassName } from '../../style'
import View from '../layout/View'
import type { UserText } from './EditableText'
import EditableText from './EditableText'

type Props = {
  classNames: Array<ClassName>
  childClassNames: Array<ClassName>
  placeholder: string
  list: Array<UserText>
  setList: (l: Array<UserText>) => void
}

export default function EditableTextList({
  classNames,
  childClassNames,
  placeholder,
  list,
  setList,
}: Props) {
  const existingChildren = list.map(
    (child, i) => (
      <EditableText
        classNames={childClassNames}
        key={i}
        text={child}
        placeholder={placeholder}
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
    <View classNames={classNames}>
      {[
        ...existingChildren,
        <EditableText
          key={list.length}
          classNames={childClassNames}
          text=""
          placeholder={placeholder}
          onBlur={() => {}}
          setText={(t) =>
            setList([...list, t])
          }
        />,
      ]}
    </View>
  )
}
