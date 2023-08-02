import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { View } from 'react-native'
import { Menu } from './src/components/common/Menu'
import { Onboarding } from './src/screens/Onboarding'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  return (
    <View>
      <StatusBar style="auto" />
      {/* <Menu /> */}
      <Onboarding />
    </View>
  )
}
