import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import UserSettingsContext from 'context/userSettings'
import { Divider, IconButton } from '@material-ui/core'

import {
  Root,
  StyledPaper,
  StyledChevronLeftIcon,
  SideBar,
  SideBarContent,
  FiltersWrapper,
  SideBarFooter,
  SideBarActions,
  SidebarFilterActions,
  Main,
  MainContent,
  HeaderWrapper,
  ToolbarWrapper,
  ResultsWrapper,
  FooterWrapper
} from './styles'

const EntityLayout = ({
  stats,
  favorites,
  favoritesDialog,
  filters,
  filterActions,
  header,
  toolbar,
  results,
  footer
}) => {
  const { miniSideBar, toggleSideBarMode } = useContext(UserSettingsContext)
  const [offSet, setOffSet] = useState(null)
  const toolbarRef = React.createRef()

  useEffect(() => {
    setOffSet(toolbarRef.current.offsetTop)
  }, [toolbarRef])

  const handleResultsScroll = e => {
    const { target } = e

    target.classList.toggle(
      'scrolled-results',
      target.scrollTop > offSet - target.offsetTop
    )
  }

  return (
    <Root>
      {(stats || favorites || filters) && (
        <SideBar className={`${!miniSideBar ? 'expanded' : ''}`}>
          <SideBarContent>
            {stats && <div>{stats}</div>}

            {favorites && (
              <div>
                {favorites}
                {favoritesDialog}
              </div>
            )}

            {!miniSideBar && filters && (
              <FiltersWrapper>{filters}</FiltersWrapper>
            )}
          </SideBarContent>

          <SideBarFooter>
            {!miniSideBar && filters && filterActions && (
              <SidebarFilterActions>{filterActions}</SidebarFilterActions>
            )}

            <Divider />

            <SideBarActions>
              <IconButton
                aria-label="Toggle sidebar mode"
                onClick={toggleSideBarMode}
              >
                <StyledChevronLeftIcon />
              </IconButton>
            </SideBarActions>
          </SideBarFooter>
        </SideBar>
      )}
      <Main>
        <StyledPaper onScroll={handleResultsScroll}>
          <MainContent>
            <HeaderWrapper>{header}</HeaderWrapper>
            <ToolbarWrapper ref={toolbarRef}>{toolbar}</ToolbarWrapper>
            <ResultsWrapper>{results}</ResultsWrapper>
            {footer && <FooterWrapper>{footer}</FooterWrapper>}
          </MainContent>
        </StyledPaper>
      </Main>
    </Root>
  )
}

EntityLayout.defaultProps = {
  stats: null,
  favorites: null,
  favoritesDialog: null,
  filterActions: null,
  filters: null,
  footer: null
}

EntityLayout.propTypes = {
  favorites: PropTypes.node,
  favoritesDialog: PropTypes.node,
  filterActions: PropTypes.node,
  filters: PropTypes.node,
  footer: PropTypes.node,
  header: PropTypes.node.isRequired,
  results: PropTypes.node.isRequired,
  stats: PropTypes.node,
  toolbar: PropTypes.node.isRequired
}

export default React.memo(EntityLayout)
