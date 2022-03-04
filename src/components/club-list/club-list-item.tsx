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

export type PlayerPlay = {
  id: string | number[]
  lastname: string
  firstname: string
  squadNumber: Number
  scoredGoal: Number
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
  const filteredPlayList = playList.filter((play: Play) => {
    return play.seasonId == currentSeason!.id && play.clubName == item.name
  })
  const filteredPlayIdList = filteredPlayList.map((play: Play) => {
    return play.playerId
  })
  const filteredPlayerList: PlayerPlay[] = playerList
    .filter((player: Player) => {
      return filteredPlayIdList.includes(player.id)
    })
    .map((player: Player) => {
      const play = filteredPlayList.find((play: Play) => {
        return play.playerId == player.id
      })
      return {
        id: player.id,
        lastname: player.lastname,
        firstname: player.firstname,
        squadNumber: play!.squadNumber,
        scoredGoal: play!.scoredGoal,
      }
    })
  filteredPlayerList.sort((a, b) => (a.squadNumber > b.squadNumber ? 1 : -1))

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
            style={gstyles.logo_M}
            resizeMode="center"
            source={item.logo}
          />
          <Text style={[gstyles.title, gstyles.alignment_CENTERED]}>
            &nbsp;{item.name}&nbsp;
          </Text>
          <Image
            style={gstyles.logo_M}
            source={{ uri: images[item.country as keyof typeof images] }}
          />
        </View>
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        style={gstyles.list}
        data={filteredPlayerList}
        renderItem={({ item }: { item: PlayerPlay }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PlayerListItem', { item })
            }}
            style={[
              gstyles.listItem_PRESSABLE,
              {
                flexDirection: 'row',
                alignItems: 'center', //Centered vertically
                flex: 1,
                height: 50,
              },
            ]}
          >
            <View
              style={{
                width: 50,
                height: '100%',
                backgroundColor: '#3B71F399',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                borderRadius: 10,
              }}
            >
              <Text style={[gstyles.text_black]}>{item.squadNumber}</Text>
            </View>
            <Text style={[gstyles.text_black, { marginRight: 10 }]}>
              {item.firstname}
            </Text>
            <Text style={[gstyles.text_black]}>{item.lastname}</Text>
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
