import React, { useContext, Fragment, memo } from 'react'
import {
  Person as PersonIcon,
  Apps as AppIcon,
  SupervisedUserCircle as ProfileIcon,
  Lock as TokenIcon,
} from '@material-ui/icons'
import { Link, Tooltip } from '@material-ui/core'

import { Aside, NavBar, Brand, Logo, Label, MiniLink } from './styles'
import UserSettingContext from '../../../context/userSetting'
import TheNavBarExtended from './TheNavBarExtended'
import TheNavBarMini from './TheNavBarMini'

const pages = [
  {
    title: 'Systems',
    icon: AppIcon,
    link: '/systems/',
    enabled: true,
  },
  {
    title: 'Users',
    icon: PersonIcon,
    link: '/users/',
    enabled: true,
  },
  {
    title: 'Profiles',
    icon: ProfileIcon,
    link: '/profiles/',
    enabled: true,
  },
  {
    title: 'Tokens',
    icon: TokenIcon,
    link: '/tokens/',
    enabled: true,
  },
]

const TheNavBar = () => {
  const { miniNavBar } = useContext(UserSettingContext)
  return (
    <Aside isMini={miniNavBar}>
      <NavBar>
        <Brand>
          <Logo />
        </Brand>
        {pages.map(
          ({ link, icon: Icon, title, enabled }) =>
            enabled && (
              <Fragment key={title}>
                {miniNavBar ? (
                  <TheNavBarMini title={title} link={link} icon={Icon} />
                ) : (
                  <TheNavBarExtended title={title} link={link} icon={Icon} />
                )}
              </Fragment>
            )
        )}
      </NavBar>
    </Aside>
  )
}
export default memo(TheNavBar)
