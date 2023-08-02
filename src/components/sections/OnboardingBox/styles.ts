import { StyleSheet } from 'react-native'
import { theme } from '../../../global/styles/theme'

export const styles = StyleSheet.create({
  onboardingBoxContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  onboardingBoxImage: {
    width: 250,
    height: 250,
    marginTop: 100,
    marginBottom: 16
  },
  onboardingBoxTitle: {
    fontFamily: theme.fonts.poppins700,
    fontSize: 32,
    lineHeight: 38,
    color: theme.colors.rock,
    textAlign: 'center',
    marginBottom: 16
  },
  onboardingBoxText: {
    fontFamily: theme.fonts.poppins400,
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.rock,
    textAlign: 'center',
    marginBottom: 16
  }
})
