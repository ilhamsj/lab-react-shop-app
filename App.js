import React from 'react'
import { View, Text } from 'react-native'
import { ThemeProvider, Button } from 'react-native-elements'

const App = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  )
}

export default App
