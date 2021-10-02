import React from 'react'
import { useTheme } from 'styled-components'
import { HeroWrapper, StartupWrapper } from './styled'
import { Icon, Spacer, Text } from '../../Components'
import { Image, StatusBar } from 'react-native'
import playButton from '../../Assets/Images/play-button.svg'

const Startup = () => {
  const theme = useTheme()

  return (
    <StartupWrapper>
      <StatusBar animated={false} barStyle={'light-content'} />
      <Image
        style={{ width: '100%', height: '100%', opacity: 0.9 }}
        resizeMode={'cover'}
        source={require('../../Assets/Images/startup.jpg')}
      />
      <HeroWrapper>
        <Text {...theme.typography.h1} color={'#fff'} textAlign={'right'}>
          Welcome to Distro
        </Text>
        <Spacer marginVertical={theme.spacing.small} />
        <Text {...theme.typography.p1} color={'#fff'} textAlign={'right'}>
          You can specify the device the simulator should run with.
        </Text>
        <Spacer marginVertical={theme.spacing.small} />
        <Text {...theme.typography.p1} color={'#fff'}>
          Lets Start
        </Text>
        {/* <Icon svg={playButton} fill={'red'} /> */}
      </HeroWrapper>
    </StartupWrapper>
  )
}

export default Startup
