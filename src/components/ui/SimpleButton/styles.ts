import { StyleSheet } from 'react-native'
import { theme } from '../../../global/styles/theme'

export const styles = StyleSheet.create({
  simpleButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.dark,
    borderRadius: 10
  },
  simpleButtonFilled: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.dark,
    borderRadius: 10
  },
  simpleButtonText: {
    fontFamily: theme.fonts.poppins400,
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.dark,
    textAlign: 'center'
  },
  simpleButtonFilledText: {
    fontFamily: theme.fonts.poppins400,
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.light,
    textAlign: 'center'
  }
})
