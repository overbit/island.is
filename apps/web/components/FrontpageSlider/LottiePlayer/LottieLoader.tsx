import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@island.is/island-ui/core'
import SlideBackgroundGrid from '../SlideBackgroundGrid'

const LottiePlayer = dynamic(() => import('../LottiePlayer/LottiePlayer'), {
  ssr: false,
})

const LottieIllustration = ({
  animationData,
  selectedIndex,
}: {
  animationData: Array<JSON | null>
  selectedIndex: number
}) => {
  const [loaded, set] = useState(false)

  return (
    <Box position="relative">
      {animationData.map((animation: JSON | null, index: number) => (
        <LottiePlayer
          key={index}
          animationData={animation}
          isVisible={loaded && index === selectedIndex}
          onLoaded={set}
        />
      ))}
      <SlideBackgroundGrid />
    </Box>
  )
}

export default LottieIllustration
