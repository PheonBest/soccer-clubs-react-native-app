import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { gstyles } from '../../utils/global-styles'
import {
  AppState,
  Club,
  ClubListState,
  Play,
  Player,
  PlayListState,
  Season,
  SeasonListState,
} from '../../state/types'
import { RouteProp } from '@react-navigation/native'
import { connect } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { DataTable } from 'react-native-paper'

interface Props {
  navigation: StackNavigationProp<any, any>
  route: RouteProp<{ params: { item: Player } }, 'params'>
  seasonList: SeasonListState
  playList: PlayListState
  clubList: ClubListState
}

const PlayerListItemFC = ({
  route,
  clubList,
  playList,
  seasonList,
}: Props): JSX.Element => {
  const { item } = route.params

  const filteredPlayList = playList.filter((play: Play) => {
    return play.playerId == item.id
  })

  const toString = (season: Season): string => {
    return `${season.start.getFullYear().toString()} - ${season.end
      .getFullYear()
      .toString()}`
  }

  return (
    <View>
      <View
        style={[
          { alignItems: 'center', padding: 10 },
          gstyles.container_PRIMARY_NORMAL,
        ]}
      >
        <Text style={gstyles.title_LARGE_CENTERED}>
          {item.firstname}&nbsp;&nbsp;{item.lastname}
        </Text>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Buts</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>N°</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Club</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Saison</Text>
          </DataTable.Title>
        </DataTable.Header>

        {filteredPlayList.map((play, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>
                <Text style={gstyles.table_CELL}>{play.scoredGoal}</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={gstyles.table_CELL}>{play.squadNumber}</Text>
              </DataTable.Cell>

              <DataTable.Cell>
                <Text style={gstyles.table_CELL}>
                  <Image
                    style={gstyles.logo_SMALL}
                    resizeMode="center"
                    source={
                      clubList.find((club: Club) => {
                        return club.name == play.clubName
                      })!.logo
                    }
                  />
                  &nbsp;
                  {play.clubName}
                </Text>
              </DataTable.Cell>

              <DataTable.Cell>
                <Text style={gstyles.table_CELL}>
                  {toString(
                    seasonList.find((season: Season) => {
                      return season.id == play.seasonId
                    })!
                  )}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          )
        })}
      </DataTable>
    </View>
  )
}

const mapStateToProps = (state: AppState) => ({
  playList: state.playList,
  seasonList: state.seasonList,
  clubList: state.clubList,
})

// Define the connector
const PlayerListItem = connect(mapStateToProps)(PlayerListItemFC)
export default PlayerListItem
