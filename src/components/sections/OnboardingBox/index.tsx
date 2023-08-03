import { View, Image, Text, Pressable } from 'react-native'
import { SimpleButton } from '../../ui/SimpleButton'
import { MaterialIcons } from '@expo/vector-icons'
import type { ImageSourcePropType } from 'react-native'

import { theme } from '../../../global/styles/theme'
import { styles } from './styles'

interface OnboardingBoxProps {
  image: ImageSourcePropType
  title: string
  text: string
}

export const OnboardingBox = ({ image, title, text }: OnboardingBoxProps) => {
  return (
    <View style={styles.onboardingBoxContainer}>
      <View style={styles.onboardingBoxTopSubcontainer}>
        <Text style={styles.onboardingBoxTitle}>{title}</Text>
        <Text style={styles.onboardingBoxText}>{text}</Text>
        <Image style={styles.onboardingBoxImage} source={image} />
      </View>

      <View style={styles.onboardingBoxBottomSubcontainer}>
        <View style={styles.onboardingBoxButtons}>
          <SimpleButton
            text="Pular"
            icon={
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.colors.dark}
              />
            }
            filled={false}
            action={() => null}
          />

          <SimpleButton
            icon={
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.colors.light}
              />
            }
            action={() => null}
          />
        </View>
      </View>
    </View>
  )
}
