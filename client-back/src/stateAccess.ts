import type { NotFound } from './shared/constants/results'
import { notFound } from './shared/constants/results'
import type {
  UiTreeData,
  NavItemData,
} from './shared/constants/entities'

const mockNavItems: Array<NavItemData> = [
  { label: 'Home', routeName: 'home' },
]

const mockHomeRoute: UiTreeData = [
  {
    componentName:
      'EditableShoppingListList',
    props: {
      id: 'test2',
    },
  },
]

const mockState = {
  navItems__0: mockNavItems,
  route__home: mockHomeRoute,
} as any

export type StateAccessPath = string

type StateAccess<T> = {
  set: (
    path: StateAccessPath,
    t: T
  ) => Promise<void>
  get: (
    path: StateAccessPath
  ) => Promise<T | NotFound>
}

export function getStateAccess<
  T
>(): StateAccess<T> {
  return {
    set: async (
      path: StateAccessPath,
      t: T
    ) => (mockState[path] = t as any),
    get: async (
      path: StateAccessPath
    ) =>
      mockState[path] !== undefined
        ? mockState[path]
        : notFound,
  }
}
