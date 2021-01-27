import type { Navigate } from '../hooks/useRouter'
import type { NavItemProps } from '../contracts'

type WithNavigate<T> = T & {
  navigate: Navigate
}

export default function NavItem({
  label,
  route,
  navigate
}: WithNavigate<NavItemProps>) {
  return <button children={label} onClick={() => navigate(route)}/>
}
