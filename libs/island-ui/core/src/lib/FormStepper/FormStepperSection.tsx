import React, { FC, useRef, useState, useEffect } from 'react'
import useComponentSize from '@rehooks/component-size'
import cn from 'classnames'

import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { SectionNumber } from './SectionNumber/SectionNumber'
import { SubSections } from './SubSections/SubSections'
import { theme as islandUITheme } from '@island.is/island-ui/theme'
import * as styles from './FormStepperSection.treat'
import * as types from './types'

function getSubSectionsInSection(
  section: types.FormStepperSection,
  subSection: string,
): types.FormStepperSection[] {
  return (section.children ?? []).filter((child) => child.type === subSection)
}

export const FormStepperSection: FC<{
  theme?: types.FormStepperThemes
  section: types.FormStepperSection
  subSection: string
  sectionIndex: number
  isActive: boolean
  isComplete: boolean
  isLastSection: boolean
  activeSubSection: number
  showSubSectionIcon?: boolean
}> = ({
  theme = types.FormStepperThemes.PURPLE,
  section,
  subSection,
  sectionIndex,
  isActive,
  isComplete,
  isLastSection,
  activeSubSection,
  showSubSectionIcon = false,
}) => {
  const subSections = getSubSectionsInSection(section, subSection)
  const hasSubSections = subSections.length > 0
  const containerRef = useRef<HTMLDivElement>(null)
  const { height: activeHeight, width: activeWidth } = useComponentSize(
    containerRef,
  )
  const [containerHeight, setContainerHeight] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const isClient = typeof window === 'object'

  useEffect(() => {
    if (!isClient) return

    if (containerRef.current) {
      setContainerHeight(activeHeight)
    }
  }, [isActive, isClient, activeHeight])

  useEffect(() => {
    if (!isClient) return

    if (containerRef.current) {
      setContainerWidth(activeWidth)
    }
  }, [isComplete, isActive, activeWidth])

  useEffect(() => {
    if (!isClient) return
    let throttleTimeout: number

    const handleResize = () => {
      clearTimeout(throttleTimeout)
      throttleTimeout = window.setTimeout(function () {
        setIsSmallScreen(window.innerWidth <= islandUITheme.breakpoints.md)
      }, 250)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [, isClient])

  return (
    <Box
      ref={containerRef}
      className={styles.container}
      style={{
        marginLeft: isSmallScreen && isComplete ? `-${containerWidth}px` : '0',
      }}
    >
      <Box display="flex" alignItems="center" marginBottom={[0, 0, 1]}>
        <Box paddingTop={[0, 0, 2]}>
          <SectionNumber
            theme={theme}
            lineHeight={isLastSection ? 0 : containerHeight}
            currentState={
              isActive ? 'active' : isComplete ? 'previous' : 'next'
            }
            number={sectionIndex + 1}
          />
        </Box>

        <Box
          paddingTop={[0, 0, 2]}
          paddingRight={[2, 2, 0]}
          width="full"
          className={cn(styles.name, {
            [styles.nameWithActiveSubSections]: hasSubSections && isActive,
          })}
        >
          <Text lineHeight="lg" fontWeight={isActive ? 'semiBold' : 'light'}>
            {section.name}
          </Text>
        </Box>
      </Box>

      {hasSubSections && !isSmallScreen && (
        <SubSections
          subSections={subSections}
          activeSubSection={activeSubSection}
          showSubSectionIcon={showSubSectionIcon}
          isActive={isActive}
        />
      )}
    </Box>
  )
}
