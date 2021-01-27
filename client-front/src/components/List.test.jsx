import {
  render,
  screen,
} from '@testing-library/react'
import List from './List'

test('Empty list does not crash', () => {
  render(<List />)
  expect(true).toBeTruthy()
})

test('List renders children', () => {
  const children = ['one', 'two', 'three']

  render(
    <List>
      {children.map((child, i) => <p key={i}>{child}</p>)}
    </List>
  )
  
  children.forEach((child) => {
    expect(screen.getByText(child)).toBeInTheDocument()
  })
})
