import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  > * {
    width: 100%;
  }
`

export const DetailsSection = styled.div`
  padding-right: ${props => `${props.theme.spacing(2)}px`};
`

export const FieldsGrid = styled(Grid)`
  padding: ${props => props.theme.spacing(1, 0, 0, 2)};
`
