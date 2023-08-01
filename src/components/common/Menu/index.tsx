import { View, Pressable } from 'react-native'
import { generateId } from '../../../utils/generateId'
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../../global/styles/theme'

export const Menu = () => {
  const menuOption = [
    {
      route: '',
      icon: (
        <MaterialIcons name="storefront" size={25} color={theme.colors.light} />
      )
    },
    {
      route: '',
      icon: <AntDesign name="search1" size={25} color={theme.colors.light} />
    },
    {
      route: '',
      icon: (
        <MaterialIcons
          name="favorite-border"
          size={25}
          color={theme.colors.light}
        />
      )
    },
    {
      route: '',
      icon: (
        <Ionicons
          name="md-person-outline"
          size={25}
          color={theme.colors.light}
        />
      )
    }
  ]

  return (
    <View style={styles.menuContainer}>
      {menuOption.map(({ route, icon }) => (
        <Pressable style={styles.menuButton} key={generateId(route)}>
          {icon}
        </Pressable>
      ))}
    </View>
  )
}
