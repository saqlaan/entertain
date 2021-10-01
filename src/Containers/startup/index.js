import React from 'react'
import { View } from 'react-native'
import { compose } from 'redux'
import { useTheme } from 'styled-components'
import { HeroWrapper, StartupWrapper } from './styled'
import { Spacer, Text } from '../../Components'

const Startup = () => {
  const theme = useTheme()
  return (
    <StartupWrapper>
      <HeroWrapper>
        <Text {...theme.typography.h1}>Welcome to Distro</Text>
        <Spacer marginVertical={theme.spacing.small} />
        <Text {...theme.typography.p1}>
          You can specify the device the simulator should run with.
        </Text>
      </HeroWrapper>
    </StartupWrapper>
  )
}

export default Startup
