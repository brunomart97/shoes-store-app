import { useState, useMemo } from 'react'
import { View } from 'react-native'
import { OnboardingBox } from '../../components/sections/OnboardingBox'
import { onboardingMock } from '../../mocks/onboarding'

import { styles } from './styles'

export const Onboarding = () => {
  const [currentOnboardingSlide, setCurrentOnboardingSlide] = useState(0)

  const onboardingSlideContent = useMemo(
    () => onboardingMock[currentOnboardingSlide],
    [currentOnboardingSlide]
  )

  const slideQuantity = onboardingMock.length

  return (
    <View style={styles.onboardingContainer}>
      <OnboardingBox
        image={onboardingSlideContent.image}
        title={onboardingSlideContent.title}
        text={onboardingSlideContent.text}
        currentOnboardingSlide={currentOnboardingSlide}
        slideQuantity={slideQuantity}
        isLast={currentOnboardingSlide === slideQuantity - 1}
        nextButtonAction={() =>
          setCurrentOnboardingSlide(currentOnboardingSlide + 1)
        }
      />
    </View>
  )
}
