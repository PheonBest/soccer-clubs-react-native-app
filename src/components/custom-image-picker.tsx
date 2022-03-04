import React, { useEffect } from 'react'
import { Image, View, Platform, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { gstyles } from '../utils/global-styles'
import CustomButton from './custom-button'
import { Control, Controller, RegisterOptions } from 'react-hook-form'
import { UseFormSetValue } from 'react-hook-form/dist/types/form'

interface Props {
  control: Control<any>
  setValue: UseFormSetValue<any>
  name: string
  rules?: RegisterOptions
  onPressHandler?: (func: Function) => void
}

export default function CustomImagePicker({
  control,
  setValue,
  name,
  rules,
  onPressHandler,
}: Props) {
  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.cancelled) {
      setValue('logo', result.uri)
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value }, fieldState: { error } }) => (
        <View style={gstyles.container_NO_PADDING}>
          <CustomButton
            text="CHOISIR UNE IMAGE"
            onPress={
              onPressHandler ? () => onPressHandler(pickImage) : pickImage
            }
          />
          {value && (
            <Image
              source={{ uri: value }}
              style={{ width: 200, height: 200 }}
            />
          )}
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      )}
    />
  )
}
