import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { Startup } from '../Containers'
import { NAVIGATION_ROUTES } from '../utils/constants'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

const navTheme = {
  ...DefaultTheme,
}

const ApplicationNavigator = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={Startup} name={NAVIGATION_ROUTES.STARTUP} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
