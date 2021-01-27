/* eslint react/no-typos: 0 */
import 'react'
import type { Navigate } from '../hooks/useRouter'
import useServerState from '../hooks/useServerState'
import NavItem from '../components/NavItem'
import type { NavItemProps } from '../contracts'
import React, { Fragment } from 'react'

type NavBarProps = {
  navigate: Navigate
}

export default function NavBar({
  navigate,
}: NavBarProps) {
  const [navItemProps] = useServerState(
    'navItems',
    [] as Array<NavItemProps>
  )

  return (
    <Fragment>
      {navItemProps.map((props) => (
        <NavItem
          {...{ ...props, navigate }}
        />
      ))}
    </Fragment>
  )
}
