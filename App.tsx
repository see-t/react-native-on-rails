import { Button, NativeBaseProvider } from 'native-base'
import RNBootSplash from 'react-native-bootsplash'
import { config, theme } from 'styles'

RNBootSplash.hide({ duration: 500, fade: true })

export default function App() {
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <Button>Hi</Button>
    </NativeBaseProvider>
  )
}
