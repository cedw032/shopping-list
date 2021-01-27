import {
  render,
  screen,
} from '@testing-library/react'
import EditableTextList from './EditableTextList'

test('Empty list does not crash', () => {
  render(
    <EditableTextList list={[]} />
  )
  expect(true).toBeTruthy()
})
