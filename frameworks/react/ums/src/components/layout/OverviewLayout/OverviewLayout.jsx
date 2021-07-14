import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
  Typography,
  ListSubheader,
  Grid,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import { Root, DetailsSection, FieldsGrid } from './styles'

const OverviewLayout = ({ sections, details }) => {
  const hasDetails = details && !!details.length

  return (
    <Root>
      <div>
        {sections.map(({ name, fields }, index) => (
          <React.Fragment key={`section-${name}`}>
            <List
              dense
              aria-labelledby={`${name}-overview-section`}
              subheader={
                <ListSubheader id={`${name}-overview-section`}>
                  {name}
                </ListSubheader>
              }
            >
              {fields.map(
                ({
                  id,
                  primary,
                  secondary = null,
                  grouped = false,
                  icon: Icon
                }) => (
                  <ListItem key={`section-field-${id}`}>
                    {Icon && (
                      <ListItemIcon>
                        <Icon color="primary" />
                      </ListItemIcon>
                    )}
                    <ListItemText
                      inset={grouped}
                      primary={primary}
                      secondary={secondary}
                    />
                  </ListItem>
                )
              )}
            </List>

            {(hasDetails || index < sections.length - 1) && (
              <Divider variant="inset" />
            )}
          </React.Fragment>
        ))}
      </div>

      {hasDetails && (
        <DetailsSection>
          <ListSubheader component="div">More Details</ListSubheader>
          <FieldsGrid container spacing={2}>
            {details.map(({ key, value, width }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid key={`field-${key}-${index}`} item xs={width}>
                <Typography
                  color="textSecondary"
                  component="div"
                  variant="caption"
                >
                  {key}
                </Typography>
                <Typography color="textPrimary" component="div" variant="body2">
                  {value}
                </Typography>
              </Grid>
            ))}
          </FieldsGrid>
        </DetailsSection>
      )}
    </Root>
  )
}

OverviewLayout.defaultProps = {
  details: []
}

OverviewLayout.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.any,
      width: PropTypes.number
    })
  )
}

export default OverviewLayout
