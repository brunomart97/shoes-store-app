import { Pressable, Text } from 'react-native'
import { JSX } from 'react'

import { styles } from './styles'

interface SimpleButtonProps {
  text?: string
  icon?: JSX.Element
  filled?: boolean
  action: () => void
}

export const SimpleButton = ({
  text,
  icon,
  filled = true,
  action
}: SimpleButtonProps) => {
  return (
    <Pressable
      onPress={action}
      style={filled ? styles.simpleButtonFilled : styles.simpleButton}
    >
      {text && (
        <Text
          style={
            filled ? styles.simpleButtonFilledText : styles.simpleButtonText
          }
        >
          {text}
        </Text>
      )}
      {icon}
    </Pressable>
  )
}
