import {
  render,
  screen,
} from '@testing-library/react'
import EditableText from './EditableText'

test('EditableText does not crash', () => {
  render(
    <EditableText
      value={''}
      setText={() => {}}
    />
  )
  expect(true).toBeTruthy()
})
