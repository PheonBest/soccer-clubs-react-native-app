import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AppState, Club, ClubListState } from '../../state/types'
import { gstyles } from '../../utils/global-styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { StackNavigationProp } from '@react-navigation/stack'
import { connect } from 'react-redux'
import images from '../../assets/node_modules/world_countries_lists/data/flags/32x32/flags-32x32.json'

interface Props {
  clubList: ClubListState
  navigation: StackNavigationProp<any, any>
}

const ClubListBaseFC = ({ navigation, clubList }: Props): JSX.Element => {
  return (
    <View style={[{ flex: 1 }]}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        style={[styles.list, { zIndex: 0, elevation: 0 }]}
        data={clubList}
        renderItem={({ item }: { item: Club }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ClubListItem', { item })
            }}
            style={styles.countryItem}
          >
            <Text
              style={[
                gstyles.text_black,
                gstyles.text_size_MEDIUM,
                { height: 50 },
              ]}
            >
              <Image
                style={gstyles.logo_MEDIUM}
                resizeMode="center"
                source={item.logo}
              />
              &nbsp;&nbsp;
              <Image
                style={gstyles.logo_MEDIUM}
                source={{ uri: images[item.country as keyof typeof images] }}
              />
              &nbsp;&nbsp;
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={gstyles.button_BOTTOM_RIGHT}
        onPress={() => {
          navigation.navigate('ClubListAdd')
        }}
      >
        <FontAwesomeIcon icon={faPlus} size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state: AppState) => ({
  clubList: state.clubList,
})

// Define the connector
const ClubListBase = connect(mapStateToProps)(ClubListBaseFC)
export default ClubListBase
