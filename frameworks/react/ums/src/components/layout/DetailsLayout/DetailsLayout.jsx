import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'

import { TabPanel } from 'components/ui'
import { Tabs, Tab, Typography, Grid } from '@material-ui/core'
import Loader from './loader'
import ContentLoader from './contentLoader'

import {
  RootGrid,
  MainGrid,
  SidebarGrid,
  Header,
  HeadGrid,
  NoOverflowGrid,
  Title,
  ContentGrid,
  TabsWrapper,
  StyledAvatar,
  Actions
} from './styles'

function getInitials(fullName) {
  const [name, lastName] = fullName.split(' ')
  return `${name[0]}${lastName && lastName[0]}`.toUpperCase()
}

const DetailsLayout = ({
  tabs,
  loading,
  showAvatar,
  title,
  subtitle,
  headSubtitleContent,
  sidebarContent,
  headActionsContent
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <RootGrid container wrap="nowrap">
      <MainGrid container item direction="column" wrap="nowrap">
        <Grid item>
          {loading ? (
            <Loader />
          ) : (
            <Header>
              <HeadGrid container alignItems="center" wrap="nowrap">
                <NoOverflowGrid container item wrap="nowrap">
                  {showAvatar && (
                    <Grid item>
                      <StyledAvatar>{getInitials(title)}</StyledAvatar>
                    </Grid>
                  )}
                  <NoOverflowGrid container item alignItems="center">
                    <Title>
                      <Typography variant="h5">{title}</Typography>

                      {!headSubtitleContent ? (
                        <Typography color="textSecondary" variant="body2">
                          {subtitle}
                        </Typography>
                      ) : (
                        headSubtitleContent
                      )}
                    </Title>
                  </NoOverflowGrid>
                </NoOverflowGrid>
                {headActionsContent && <Actions>{headActionsContent}</Actions>}
              </HeadGrid>
              {tabs && (
                <TabsWrapper>
                  <Tabs
                    aria-label="details tabs"
                    indicatorColor="primary"
                    value={value}
                    variant="fullWidth"
                    onChange={handleChange}
                  >
                    {tabs.map(({ label }, index) => (
                      <Tab key={`tab-${label}`} label={label} value={index} />
                    ))}
                  </Tabs>
                </TabsWrapper>
              )}
            </Header>
          )}
        </Grid>
        <ContentGrid item xs={12}>
          {loading ? (
            <ContentLoader />
          ) : (
            tabs && (
              <SwipeableViews
                axis="x"
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                {tabs.map(({ content, label }, index) => (
                  <TabPanel
                    key={`tab-content-${label}`}
                    index={index}
                    value={value}
                  >
                    {content}
                  </TabPanel>
                ))}
              </SwipeableViews>
            )
          )}
        </ContentGrid>
      </MainGrid>

      {sidebarContent && <SidebarGrid item>{sidebarContent}</SidebarGrid>}
    </RootGrid>
  )
}

DetailsLayout.defaultProps = {
  sidebarContent: null,
  headActionsContent: null,
  headSubtitleContent: null,
  showAvatar: false,
  subtitle: null,
  loading: false,
  tabs: null
}

DetailsLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showAvatar: PropTypes.bool,
  loading: PropTypes.bool,
  headSubtitleContent: PropTypes.node,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node
    })
  ),
  sidebarContent: PropTypes.node,
  headActionsContent: PropTypes.node
}

export default DetailsLayout
