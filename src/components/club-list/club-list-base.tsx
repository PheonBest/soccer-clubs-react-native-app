import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ClubListState } from '../../state/types'
import { FlatList } from 'react-native'
import CustomButton from '../custom-button'
import { Club } from '../../state/types'
import { gstyles } from '../../utils/global-styles'

interface Props {
  clubs: ClubListState
  onAddClub: (name: string, logo: string, country: string) => void
}

export default function ClubListBase({ clubs }: Props): JSX.Element {
  return (
    <View style={gstyles.container}>
      <FlatList
        keyExtractor={(index) => index.toString()}
        style={styles.list}
        data={clubs}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name} : {item.logo} : {item.country}
          </Text>
        )}
      ></FlatList>

      <CustomButton
        onPress={() => console.log('pressed')}
        text="Ajouter un Club"
      />
    </View>
  )
}
