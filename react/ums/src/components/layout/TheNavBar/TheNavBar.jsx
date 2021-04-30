import React, { memo, useContext } from 'react'

import {
  PersonRounded as PersonIcon,
  AssignmentIndRounded as AssignmentIndIcon,
  WorkRounded as WorkIcon
} from '@material-ui/icons'

import UserSettingsContext from 'context/userSettings'
import { Tooltip, RippleButton } from 'components/ui'

import { Aside, NavBar, Link, MiniLink, Label, Logo, Brand } from './styles'

const pages = [
  { title: 'Systems', icon: PersonIcon, link: '/systems/' },
  { title: 'Users', icon: AssignmentIndIcon, link: '/users/' },
  { title: 'Profiles', icon: WorkIcon, link: '/profiles/' }
]

const TheNavBar = () => {
  const { miniNavBar } = useContext(UserSettingsContext)

  return (
    <Aside isMini={miniNavBar}>
      <NavBar>
        <Brand>
          <Logo />
        </Brand>
        {pages.map(({ link, icon: Icon, title }) =>
          miniNavBar ? (
            <Tooltip key={title} placement="right" title={title}>
              <div>
                <RippleButton>
                  <MiniLink to={link}>
                    <Icon />
                  </MiniLink>
                </RippleButton>
              </div>
            </Tooltip>
          ) : (
            <RippleButton key={title}>
              <Link to={link}>
                <Icon />
                <Label>{title}</Label>
              </Link>
            </RippleButton>
          )
        )}
      </NavBar>
    </Aside>
  )
}

export default memo(TheNavBar)
