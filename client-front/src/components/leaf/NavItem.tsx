import type { Navigate } from '../../hooks/useRouter'
import type { NavItemData } from '../../shared/constants/entities'

export type Props = NavItemData & {
  navigate: Navigate
}

export default function NavItem({
  label,
  route,
  navigate,
}: Props) {
  return (
    <button
      children={label}
      onClick={() => navigate(route)}
    />
  )
}
