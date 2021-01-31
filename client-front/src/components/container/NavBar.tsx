/* eslint react/no-typos: 0 */
import 'react'
import type { Navigate } from '../../hooks/useRouter'
import useState from '../../hooks/useState'
import NavItem from '../leaf/NavItem'
import type { NavItemData } from '../../shared/constants/entities'
import View from '../layout/View'
import React from 'react'

type NavBarProps = {
  navigate: Navigate
}

export default function NavBar({
  navigate,
}: NavBarProps) {
  const [navItemProps] = useState(
    { type: 'navItems', id: '0' }, // This will ultimately need to work like a container when that is pulled out
    [] as Array<NavItemData>
  )

  return (
    <View classNames={['navBar']}>
      {navItemProps.map((props, i) => (
        <NavItem
          {...{
            key: i,
            ...props,
            navigate,
          }}
        />
      ))}
    </View>
  )
}
