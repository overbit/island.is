import { theme } from '@island.is/island-ui/theme'
import { style } from 'treat'

export const footerContainer = style({
  borderTop: `${theme.border.width.large}px solid ${theme.color.purple100}`,
  paddingTop: theme.spacing[5],
})
