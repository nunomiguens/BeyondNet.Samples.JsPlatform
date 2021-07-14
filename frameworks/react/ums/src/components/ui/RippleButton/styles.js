import styled, { css } from 'styled-components'
import { ButtonBase } from '@material-ui/core/'

const RippleButton = styled(ButtonBase)`
  width: 100%;
  transition: ${({ theme }) =>
    theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut
    })};

  &:hover {
    background-color: ${props => props.theme.palette.action.hover};
    text-decoration: none;
  }
  ${props =>
    props.selected &&
    css`
      background-color: ${props => props.theme.palette.action.selected};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.palette.action.disabled};
    `}
`

export default RippleButton
