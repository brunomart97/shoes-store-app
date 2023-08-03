import { View, Image, Text } from 'react-native'
import { SimpleButton } from '../../ui/SimpleButton'
import { MaterialIcons } from '@expo/vector-icons'
import { generateId } from '../../../utils/generateId'
import type { ImageSourcePropType } from 'react-native'

import { theme } from '../../../global/styles/theme'
import { styles } from './styles'

interface OnboardingBoxProps {
  image: ImageSourcePropType
  title: string
  text: string
  currentOnboardingSlide: number
  slideQuantity: number
  isLast: boolean
  nextButtonAction: () => void
}

export const OnboardingBox = ({
  image,
  title,
  text,
  currentOnboardingSlide,
  slideQuantity,
  isLast,
  nextButtonAction
}: OnboardingBoxProps) => {
  return (
    <View style={styles.onboardingBoxContainer}>
      <View style={styles.onboardingBoxTopSubcontainer}>
        <Text style={styles.onboardingBoxTitle}>{title}</Text>
        <Text style={styles.onboardingBoxText}>{text}</Text>
        <Image style={styles.onboardingBoxImage} source={image} />
      </View>

      <View style={styles.onboardingBoxBottomSubcontainer}>
        <View style={styles.onboardingBoxSlideDotsContainer}>
          {Array.from({ length: slideQuantity }, (_, index) => (
            <View
              style={[
                styles.onboardingBoxSlideDots,
                currentOnboardingSlide === index &&
                  styles.onboardingBoxSlideDotSelected
              ]}
              key={generateId(index)}
            />
          ))}
        </View>

        <View
          style={[
            styles.onboardingBoxButtons,
            { justifyContent: isLast ? 'center' : 'space-between' }
          ]}
        >
          {!isLast && (
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
          )}

          <SimpleButton
            text={isLast ? 'Iniciar' : ''}
            icon={
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.colors.light}
              />
            }
            action={isLast ? () => null : nextButtonAction}
          />
        </View>
      </View>
    </View>
  )
}
