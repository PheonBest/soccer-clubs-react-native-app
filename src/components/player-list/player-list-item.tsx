import { Image, ScrollView, Text, View } from 'react-native'
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

  // Convert a season to string.
  // The format is YYYY/YY
  // e.g: If the season starts in 2021 and ends in 2022,
  //      it will be shown as 2021/22
  const toString = (season: Season): string => {
    return `${season.start.getFullYear().toString()}/${season.end
      .getFullYear()
      .toString()
      .substring(2, 4)}`
  }

  const clubFlex = 1.8 // Taille de la colonne Club

  return (
    <View>
      <View
        style={[
          { alignItems: 'center', padding: 10 },
          gstyles.container_PRIMARY_NORMAL,
        ]}
      >
        <Text style={[gstyles.title, gstyles.alignment_CENTERED]}>
          {item.firstname}&nbsp;&nbsp;{item.lastname}
        </Text>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Saison</Text>
          </DataTable.Title>
          <DataTable.Title
            style={{
              flex: clubFlex,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text
              style={[
                gstyles.table_TITLE,
                gstyles.alignment_CENTERED,
                { alignItems: 'center' },
              ]}
            >
              Club
            </Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Pos</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Buts</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={gstyles.table_TITLE}>Matchs</Text>
          </DataTable.Title>
        </DataTable.Header>

        <ScrollView>
          {filteredPlayList.map((play, index) => {
            return (
              <DataTable.Row
                key={index}
                style={{ height: 60, justifyContent: 'center' }}
              >
                <DataTable.Cell>
                  <Text style={gstyles.table_CELL}>
                    {toString(
                      seasonList.find((season: Season) => {
                        return season.id == play.seasonId
                      })!
                    )}
                  </Text>
                </DataTable.Cell>

                <DataTable.Cell
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: clubFlex,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      style={[gstyles.logo_M]}
                      resizeMode="center"
                      source={
                        clubList.find((club: Club) => {
                          return club.name == play.clubName
                        })!.logo
                      }
                    />

                    <Text style={gstyles.table_CELL_SMALL}>
                      {play.clubName}
                    </Text>
                  </View>
                </DataTable.Cell>

                {/*<DataTable.Cell>
                  <Text style={gstyles.table_CELL_SMALL}>{play.clubName}</Text>
                </DataTable.Cell>*/}

                <DataTable.Cell>
                  <Text style={gstyles.table_CELL}>{play.squadNumber}</Text>
                </DataTable.Cell>

                <DataTable.Cell>
                  <Text style={gstyles.table_CELL}>{play.scoredGoal}</Text>
                </DataTable.Cell>

                <DataTable.Cell>
                  <Text style={gstyles.table_CELL}>{play.playedMatches}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            )
          })}
        </ScrollView>
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
