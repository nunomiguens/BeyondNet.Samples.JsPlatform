import React, { useContext, Fragment, memo } from 'react'
import { Aside, NavBar, Link as CustomLink, MiniLink, Label, Logo, Brand } from './styles'
import { Button, Tooltip } from '@material-ui/core'

import {UserSettingContext} from '../../../context/userSetting'
import { ISystemData } from '../../../context/auth'

const TheNavBar: React.FC<{pages:ISystemData[]}> = ({pages}) => {
  const { MiniNavBar } = useContext(UserSettingContext)
  return (
    <Aside isMini={MiniNavBar}>
      <NavBar>
        <Brand>
          <Logo />
        </Brand>
        {pages.map(
          ({ Link, Icon, Title, Enabled }) =>
            Enabled && (
              <Fragment key={Title}>
                {MiniNavBar ? (
                  <Tooltip key={Title} title={Title}>
                    <div>
                      <Button disabled={!Enabled}>
                        <MiniLink to={Link}>
                          <Icon /> 
                        </MiniLink>
                      </Button>
                    </div>
                  </Tooltip>
                ) : (
                  <Button key={Title}>
                    <CustomLink to={Link}>
                        <Icon /> 
                      <Label>{Title}</Label>
                    </CustomLink>
                  </Button>
                )}
              </Fragment>
            )
        )}
      </NavBar>
    </Aside>
  )
}
export default memo(TheNavBar)
