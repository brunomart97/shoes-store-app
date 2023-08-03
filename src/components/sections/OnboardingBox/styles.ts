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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  onboardingBoxTitle: {
    fontFamily: theme.fonts.poppins700,
    fontSize: 32,
    lineHeight: 38,
    color: theme.colors.rock,
    textAlign: 'center',
    marginBottom: 8
  },
  onboardingBoxText: {
    fontFamily: theme.fonts.poppins400,
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.rock,
    textAlign: 'center',
    marginBottom: 16
  },
  onboardingBoxImage: {
    width: 250,
    height: 250,
    marginBottom: 8
  },
  onboardingBoxBottomSubcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8
  },
  onboardingBoxSlideDotsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16
  },
  onboardingBoxSlideDots: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: theme.colors.rock,
    marginHorizontal: 4
  },
  onboardingBoxSlideDotSelected: {
    width: 20,
    backgroundColor: theme.colors.splash
  },
  onboardingBoxButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8
  }
})
