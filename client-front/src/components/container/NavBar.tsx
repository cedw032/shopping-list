/* eslint react/no-typos: 0 */
import 'react'
import type { Navigate } from '../../hooks/useRouter'
import useState from '../../hooks/state/useState'
import NavItem from '../leaf/NavItem'
import type { NavItemData } from '../../shared/constants/entities'
import React, { Fragment } from 'react'

type NavBarProps = {
  navigate: Navigate
}

export default function NavBar({
  navigate,
}: NavBarProps) {
  const [navItemProps] = useState(
    'navItems',
    [] as Array<NavItemData>
  )

  return (
    <Fragment>
      {navItemProps.map((props, i) => (
        <NavItem
          {...{ key: i, ...props, navigate }}
        />
      ))}
    </Fragment>
  )
}
