import { View, Pressable } from 'react-native'
import { generateId } from '../../../utils/generateId'
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../../global/styles/theme'

export const Menu = () => {
  const menuOption = [
    {
      route: '',
      icon: (
        <MaterialIcons name="storefront" size={20} color={theme.colors.light} />
      )
    },
    {
      route: '',
      icon: <AntDesign name="search1" size={20} color={theme.colors.light} />
    },
    {
      route: '',
      icon: (
        <MaterialIcons
          name="favorite-border"
          size={20}
          color={theme.colors.light}
        />
      )
    },
    {
      route: '',
      icon: (
        <Feather name="shopping-cart" size={20} color={theme.colors.light} />
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
