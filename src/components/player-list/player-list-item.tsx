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

  // Taille des colonnes
  const flexValues = {
    season: 1.3,
    club: 2,
    squadNumber: 1,
    scoredGoal: 1,
    playedMatches: 1,
  }

  return (
    /* Display flex
       so that the scrollview
       scrolls to the bottom of the page */
    <View style={{ flex: 1 }}>
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

      <DataTable.Header>
        <DataTable.Title
          style={{
            flex: flexValues.season,
            justifyContent: 'center',
          }}
        >
          <Text style={gstyles.table_TITLE}>Saison</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{
            flex: flexValues.club,
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
        <DataTable.Title
          style={{
            justifyContent: 'center',
            flex: flexValues.squadNumber,
          }}
        >
          <Text style={gstyles.table_TITLE}>Pos</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{
            justifyContent: 'center',
            flex: flexValues.scoredGoal,
          }}
        >
          <Text style={gstyles.table_TITLE}>Buts</Text>
        </DataTable.Title>
        <DataTable.Title
          style={{
            justifyContent: 'center',
            flex: flexValues.playedMatches,
          }}
        >
          <Text style={gstyles.table_TITLE}>Matchs</Text>
        </DataTable.Title>
      </DataTable.Header>

      <ScrollView>
        {filteredPlayList.map((play, index) => {
          return (
            <DataTable.Row
              key={index}
              style={{ height: 60, borderBottomWidth: 1 }}
            >
              <DataTable.Cell
                style={{
                  justifyContent: 'center',
                  flex: flexValues.season,
                }}
              >
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
                  flex: flexValues.club,
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
                    source={{
                      uri: clubList.find((club: Club) => {
                        return club.name == play.clubName
                      })!.logo,
                    }}
                  />

                  <Text style={gstyles.table_CELL_SMALL}>{play.clubName}</Text>
                </View>
              </DataTable.Cell>

              {/*<DataTable.Cell>
                  <Text style={gstyles.table_CELL_SMALL}>{play.clubName}</Text>
                </DataTable.Cell>*/}

              <DataTable.Cell
                style={{
                  justifyContent: 'center',
                  flex: flexValues.squadNumber,
                }}
              >
                <Text style={gstyles.table_CELL}>{play.squadNumber}</Text>
              </DataTable.Cell>

              <DataTable.Cell
                style={{
                  justifyContent: 'center',
                  flex: flexValues.scoredGoal,
                }}
              >
                <Text style={gstyles.table_CELL}>{play.scoredGoal}</Text>
              </DataTable.Cell>

              <DataTable.Cell
                style={{
                  justifyContent: 'center',
                  flex: flexValues.playedMatches,
                }}
              >
                <Text style={gstyles.table_CELL}>{play.playedMatches}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          )
        })}
      </ScrollView>
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
