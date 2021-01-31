import type { Navigate } from '../../hooks/useRouter'
import type { NavItemData } from '../../shared/constants/entities'
import { style } from '../../style'

export type Props = NavItemData & {
  navigate: Navigate
}

export default function NavItem({
  label,
  routeName,
  navigate,
}: Props) {
  return (
    <a
      style={style(['navItem'])}
      children={label}
      onClick={() =>
        navigate(routeName)
      }
    />
  )
}
