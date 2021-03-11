import React, { FC } from 'react'
import cn from 'classnames'
import { Box, BoxProps } from '../../Box/Box'
import * as styles from './GridRow.treat'
import { ResponsiveProp } from '../../../utils/responsiveProp'
import { flexDirection, justifyContent } from '../../Box/useBoxStyles.treat'

interface Props {
  className?: string
  direction?: ResponsiveProp<keyof typeof flexDirection>
  align?: ResponsiveProp<keyof typeof justifyContent>
  alignItems?: BoxProps['alignItems']
  marginTop?: BoxProps['marginTop']
  marginBottom?: BoxProps['marginBottom']
}

export const GridRow: FC<Props> = ({
  children,
  className,
  direction = 'row',
  align,
  alignItems,
  ...props
}) => {
  return (
    <Box
      flexDirection={direction}
      justifyContent={align}
      alignItems={alignItems}
      className={cn(className, styles.gridRow)}
      {...props}
    >
      {children}
    </Box>
  )
}
