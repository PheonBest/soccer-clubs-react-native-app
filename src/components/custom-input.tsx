import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {Control, Controller, RegisterOptions,} from 'react-hook-form'

interface Props {
    control: Control<any>
    name: string
    rules?: RegisterOptions
    placeholder: string
    secureTextEntry?: boolean
    onChangeHandler?: (text: string) => void
    onBlurHandler?: () => void
}

export default function CustomInput({
                                         control,
                                         name,
                                         rules = {},
                                         placeholder,
                                         secureTextEntry = false,
                                         onChangeHandler,
                                         onBlurHandler,
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
                            onChangeText={(value: string) => {
                                onChange(value)
                                if (onChangeHandler) {
                                    onChangeHandler(value)
                                }
                            }}
                            onBlur={() => {
                                onBlur()
                                if (onBlurHandler) {
                                    onBlurHandler()
                                }
                            }}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                            underlineColorAndroid="transparent"
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
