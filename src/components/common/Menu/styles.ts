import { StyleSheet } from 'react-native'
import { theme } from '../../../global/styles/theme'

export const styles = StyleSheet.create({
  menuContainer: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: theme.colors.rock,
    bottom: 30,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  menuButton: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'transparent'
  }
})
