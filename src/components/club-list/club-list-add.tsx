import { View } from 'react-native'
import React from 'react'
import { ClubListState } from '../../state/types'
import CustomButton from '../custom-button'
import CustomInput from '../custom-input'
import { useForm } from 'react-hook-form'

interface Props {
  clubs: ClubListState
  onAddClub: (name: string, logo: string, country: string) => void
}

export default function ClubListAdd({ onAddClub }: Props): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <View>
      <CustomInput
        control={control}
        name={'name'}
        placeholder={'ex: RC Strasbourg'}
      />

      <CustomInput
        control={control}
        name={'logo'}
        placeholder={
          'ex: ../assets/club/1___Escudo_do_Corinthians-logo-EF2867ED2B-seeklogo.com.png'
        }
      />

      <CustomInput
        control={control}
        name={'country'}
        placeholder={'ex: France'}
      />

      <CustomButton
        onPress={handleSubmit((data) => console.log(data))}
        text="Enregistrer"
      />
    </View>
  )
}
