import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import ClubListBase from '../components/club-list/club-list-base'

interface Props {
  navigation: StackNavigationProp<any, any>
}

export default function Home({ navigation }: Props): JSX.Element {
  return (
    <>
      <ClubListBase navigation={navigation} />
    </>
  )
}
