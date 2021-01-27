export type NotFound = '__{NotFound}'
export type Success = '__{Success}'

export const success: Success =
  '__{Success}'
export const notFound: NotFound =
  '__{NotFound}'

type NavLabel = string

export type NavItemProps = {
  label: NavLabel
  route: Route
}

export type Route =
  | 'home'
  | 'doubleList'
