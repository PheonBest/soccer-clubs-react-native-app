import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { gstyles } from '../../utils/global-styles'
import {
  AppState,
  Club,
  Play,
  Player,
  PlayerListState,
  PlayListState,
  Season,
  SeasonListState,
} from '../../state/types'
import images from '../../assets/node_modules/world_countries_lists/data/flags/128x128/flags-128x128.json'
import { RouteProp } from '@react-navigation/native'
import { connect } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
  navigation: StackNavigationProp<any, any>
  route: RouteProp<{ params: { item: Club } }, 'params'>
  playerList: PlayerListState
  seasonList: SeasonListState
  playList: PlayListState
}

const ClubListItemFC = ({
  navigation,
  route,
  playerList,
  seasonList,
  playList,
}: Props): JSX.Element => {
  const { item } = route.params
  const currentDate = new Date()
  const currentSeason =
    seasonList.find((season: Season) => {
      return currentDate >= season.start && currentDate <= season.end
    }) || seasonList[0]
  const filteredPlayerId = playList
    .filter((play: Play) => {
      return play.seasonId == currentSeason!.id && play.clubName == item.name
    })
    .map((play: Play) => {
      return play.playerId
    })
  const filteredPlayerList = playerList.filter((player: Player) => {
    return filteredPlayerId.includes(player.id)
  })

  return (
    <View>
      <View
        style={[
          { alignItems: 'center', padding: 10 },
          gstyles.container_PRIMARY_NORMAL,
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={gstyles.logo_LARGE}
            resizeMode="center"
            source={item.logo}
          />
          <Text style={gstyles.title_LARGE_CENTERED}>
            &nbsp;{item.name}&nbsp;
          </Text>
          <Image
            style={gstyles.logo_LARGE}
            source={{ uri: images[item.country as keyof typeof images] }}
          />
        </View>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        style={gstyles.list}
        data={filteredPlayerList}
        renderItem={({ item }: { item: Player }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PlayerListItem', { item })
            }}
            style={gstyles.listItem}
          >
            <Text
              style={[
                gstyles.text_black,
                gstyles.text_size_MEDIUM,
                { height: 50 },
              ]}
            >
              {item.firstname}
              &nbsp;&nbsp;
              {item.lastname}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const mapStateToProps = (state: AppState) => ({
  playerList: state.playerList,
  seasonList: state.seasonList,
  playList: state.playList,
})

// Define the connector
const ClubListItem = connect(mapStateToProps)(ClubListItemFC)
export default ClubListItem
