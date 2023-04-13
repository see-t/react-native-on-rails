import { Button, NativeBaseProvider } from 'native-base'
import { config, theme } from 'styles'

export default function App() {
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <Button>Hi</Button>
    </NativeBaseProvider>
  )
}
