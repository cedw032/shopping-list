import type { NotFound } from './shared/contracts'
import { notFound } from './shared/contracts'
import type {
  RouteStructure,
} from './shared/hooks/useRouter'
import type {NavItemProps} from './shared/contracts'

const mockNavItems: Array<NavItemProps> = [
  {label: 'Home', route: 'home'},
  {label: 'Double List', route: 'doubleList'},
]

const mockHomeRoute: RouteStructure = [
  {
    componentName:
      'EditableShoppingList',
    props: {
      id: 'test',
    },
  },
]

const mockDoubleListRoute: RouteStructure = [
  {
    componentName: 'SplitView',
    props: {},
    children: [
      {
        componentName:
          'EditableShoppingList',
        props: {
          id: 'test',
        },
      },
      {
        componentName:
          'EditableShoppingList',
        props: {
          id: 'test2',
        },
      },
    ],
  },
]

const mockState = {
  navItems: mockNavItems,
  route__home: mockHomeRoute,
  route__doubleList: mockDoubleListRoute,
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
