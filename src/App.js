import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import { ApplicationNavigator } from '@/Navigators'
import { ThemeProvider } from 'styled-components'
import './Translations'
import * as appTheme from './Theme'

const App = () => (
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  </ThemeProvider>
)

export default App
