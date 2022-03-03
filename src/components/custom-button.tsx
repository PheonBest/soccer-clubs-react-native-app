import React from 'react'
import {ColorValue, GestureResponderEvent, Pressable, Text,} from 'react-native'

import {gstyles} from '../utils/global-styles'

interface Props {
  onPress?: (event: GestureResponderEvent) => void
  onLongPress?: (event: GestureResponderEvent) => void
  text: string
  type?: string
  bgColor?: ColorValue
  fgColor?: ColorValue
}
export default function CustomButton({
  onPress,
  onLongPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: Props): JSX.Element {
  return (
    <>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [
          gstyles.container,
          gstyles[
            `container_${type}_${
              pressed ? 'PRESSED' : 'NORMAL'
            }` as keyof typeof gstyles
          ],
          { zIndex: 0, elevation: 0 },
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[
              gstyles.text,
              gstyles[
                `text_${type}_${
                  pressed ? 'PRESSED' : 'NORMAL'
                }` as keyof typeof gstyles
              ],
              fgColor ? { color: fgColor } : {},
            ]}
          >
            {text}
          </Text>
        )}
      </Pressable>
    </>
  )
}
