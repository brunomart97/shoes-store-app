import { StyleSheet } from 'react-native'
import { theme } from '../../../global/styles/theme'

export const styles = StyleSheet.create({
  onboardingBoxContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  onboardingBoxTopSubcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100
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
    marginBottom: 24
  },
  onboardingBoxImage: {
    width: 250,
    height: 250,
    marginBottom: 16
  },
  onboardingBoxBottomSubcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16
  },
  onboardingBoxButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8
  }
})
