import { View } from 'react-native'
import { OnboardingBox } from '../../components/sections/OnboardingBox'
import ecommerceOnboarding from '../../assets/images/e-commerce-onboarding.png'

import { styles } from './styles'

export const Onboarding = () => {
  const onboardingOptions = [
    {
      image: ecommerceOnboarding,
      title: 'Cadastre-se de forma simples em nossa loja',
      text: 'O primeiro passo para ter seus Super Sneakers é concluir seu cadastro em nosso app. É bem simples.'
    }
  ]

  return (
    <View style={styles.onboardingContainer}>
      <OnboardingBox
        image={onboardingOptions[0].image}
        title={onboardingOptions[0].title}
        text={onboardingOptions[0].text}
      />
    </View>
  )
}
