import { View, Image, Text } from 'react-native'
import type { ImageSourcePropType } from 'react-native'

import { styles } from './styles'

interface OnboardingBoxProps {
  image: ImageSourcePropType
  title: string
  text: string
}

export const OnboardingBox = ({ image, title, text }: OnboardingBoxProps) => {
  return (
    <View style={styles.onboardingBoxContainer}>
      <Image style={styles.onboardingBoxImage} source={image} />
      <Text style={styles.onboardingBoxTitle}>{title}</Text>
      <Text style={styles.onboardingBoxText}>{text}</Text>
    </View>
  )
}
