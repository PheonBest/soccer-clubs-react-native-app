import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ColorValue,
} from 'react-native'

import { gstyles } from '../utils/global-styles'
interface Props {
  onPress: (event: GestureResponderEvent) => void
  text: string
  type?: string
  bgColor?: ColorValue
  fgColor?: ColorValue
}
export default function CustomButton({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: Props): JSX.Element {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          gstyles.container,
          gstyles[
            `container_${type}_${
              pressed ? 'PRESSED' : 'NORMAL'
            }` as keyof typeof gstyles
          ],
        ]}
      >
        <Text
          style={[
            gstyles.text,
            gstyles[`text_${type}` as keyof typeof gstyles],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </>
  )
}
