import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'

interface Props {
  control: Control<FieldValues>
  name: keyof FieldValues
  rules?: RegisterOptions
  placeholder: string
  secureTextEntry?: boolean
}

export default function CustomButton({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry = false,
}: Props): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : '#e8e8e8' },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
})
