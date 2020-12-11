import React, { FC, ReactNode } from 'react'
import {
  Box,
  BoxProps,
  GridContainer,
  GridRow,
  GridColumn,
  Hidden,
} from '@island.is/island-ui/core'
import { Main, Sticky } from '../../components'

export interface StandardLayoutProps {
  sidebar: {
    position: 'left' | 'right'
    node: ReactNode
  }
  contentBoxProps?: BoxProps
}

export const StandardLayout: FC<StandardLayoutProps> = ({
  sidebar,
  children,
  contentBoxProps = {},
}) => {
  const columns = [
    <GridColumn
      key="sidebar"
      hiddenBelow="md"
      span={['0', '0', '4/12', '4/12', '3/12']}
    >
      <Sticky>{sidebar.node}</Sticky>
    </GridColumn>,
    <GridColumn key="content" span={['12/12', '12/12', '8/12', '8/12', '9/12']}>
      <Main>{children}</Main>
    </GridColumn>,
  ]

  if (sidebar.position === 'right') {
    columns.reverse()
  }

  return (
    <GridContainer>
      <Box paddingY={[2, 2, 10]} {...contentBoxProps}>
        <GridRow>{columns}</GridRow>
      </Box>
    </GridContainer>
  )
}

interface CategoryProps {
  sidebar: ReactNode
  belowContent?: ReactNode
}

export const CategoryLayout: FC<CategoryProps> = ({
  sidebar,
  belowContent,
  children,
}) => (
  <GridContainer>
    <Box paddingY={[2, 2, 10]}>
      <GridRow direction="rowReverse">
        <GridColumn
          span={['12/12', '12/12', '8/12']}
          offset={['0', '0', '0', '0', '1/12']}
        >
          <Main>
            <Box paddingBottom={[5, 5, 10]}>{children}</Box>
            {belowContent && belowContent}
          </Main>
        </GridColumn>
        <GridColumn span={['0', '0', '4/12', '4/12', '3/12']} hiddenBelow="md">
          <Sticky>{sidebar}</Sticky>
        </GridColumn>
      </GridRow>
    </Box>
  </GridContainer>
)

interface ArticleProps {
  sidebar: ReactNode
}

export const ArticleLayout: FC<ArticleProps> = ({ sidebar, children }) => (
  <GridContainer>
    <Box paddingY={[2, 2, 10]}>
      <GridRow>
        <GridColumn span={['12/12', '12/12', '8/12', '8/12', '9/12']}>
          {sidebar && <Main>{children}</Main>}
          {!sidebar && <Box>{children}</Box>}
        </GridColumn>
        <GridColumn hiddenBelow="md" span={['0', '0', '4/12', '4/12', '3/12']}>
          {sidebar && (
            <Box printHidden height="full">
              <Sticky>{sidebar}</Sticky>
            </Box>
          )}
        </GridColumn>
      </GridRow>
    </Box>
  </GridContainer>
)

interface NewsListProps {
  sidebar: ReactNode
}

export const NewsListLayout: FC<NewsListProps> = ({ sidebar, children }) => (
  <GridContainer>
    <Box paddingTop={[2, 2, 6]} paddingBottom={[5, 5, 10]}>
      <GridRow>
        <GridColumn span={['12/12', '12/12', '4/12', '3/12']} hiddenBelow="md">
          <Sticky>{sidebar}</Sticky>
        </GridColumn>
        <GridColumn
          span={['12/12', '12/12', '8/12', '6/12']}
          offset={['0', '0', '0', '1/12']}
        >
          <Main>
            <Box paddingBottom={[5, 5, 10]}>{children}</Box>
          </Main>
        </GridColumn>
      </GridRow>
    </Box>
  </GridContainer>
)

interface NewsItemProps {
  sidebar?: ReactNode
}

export const NewsItemLayout: FC<NewsItemProps> = ({ sidebar, children }) => (
  <GridContainer>
    <Box paddingY={[2, 2, 10]}>
      <GridRow>
        <GridColumn
          span={['12/12', '12/12', '8/12', '7/12']}
          offset={['0', '0', '0', '1/12']}
        >
          {children}
        </GridColumn>
        <GridColumn
          span={['12/12', '12/12', '4/12', '3/12']}
          offset={['0', '0', '0', '1/12']}
        >
          {sidebar && (
            <Sticky>
              <Box background="purple100" padding={4}>
                {sidebar}
              </Box>
            </Sticky>
          )}
        </GridColumn>
      </GridRow>
    </Box>
  </GridContainer>
)

interface SubpageProps {
  main: ReactNode
  details?: ReactNode
}

export const SubpageLayout: FC<SubpageProps> = ({ main, details }) => {
  return (
    <Box width="full" paddingTop={10}>
      <Box paddingBottom={6}>
        <GridContainer>{main}</GridContainer>
      </Box>
      {details && (
        <Box background="blue100" paddingTop={4}>
          <GridContainer>{details}</GridContainer>
        </Box>
      )}
    </Box>
  )
}

export default ArticleLayout
