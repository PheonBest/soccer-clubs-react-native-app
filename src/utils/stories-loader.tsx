import { Club, Country, Play, Player, Season } from '../state/types'
import uuid from 'react-native-uuid'
import { shuffle } from './utils'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addClub } from '../state/club-list/actions'
import { addPlayer } from '../state/player-list/actions'
import React, { useEffect } from 'react'
import { addSeason } from '../state/season-list/actions'
import { addPlay } from '../state/play-list/actions'

import countries from '../assets/node_modules/world_countries_lists/data/countries/fr/countries.json'
import soccerData from '../assets/dataset/soccer-wiki-players-clubs.json'

const generateData = (): [Club[], Season[], Player[], Play[]] => {
  // Parameters
  const nbClubs = 20 // number of clubs to generate

  const nbSeasons = 7 // number of seasons to generate
  const seasonMonthStart = 8 // season's month start
  const seasonDayStart = 6 // season's day start
  const seasonMonthEnd = 5 // season's month end
  const seasonDayEnd = 21 // season's day end

  const nbPlayersPerClub = 11 // number of players in each club per season

  const nbPlayers = nbPlayersPerClub * nbClubs // number of players

  // Clubs generation
  const generatedClubs: Club[] = []
  for (let i = 0; i < nbClubs; ++i) {
    // assign a random country to the club
    const randomCountry: Country =
      countries[Math.floor(Math.random() * countries.length)]
    const randomAlpha2 = randomCountry.alpha2

    const club = soccerData.ClubData[i]
    generatedClubs.push({
      name: club.Name,
      logo: { uri: club.ImageURL },
      country: randomAlpha2,
    })
  }

  // Seasons generation
  const generatedSeasons: Season[] = []
  let currentDate = new Date()

  // e.g: the season starts the 08/06/XXXX.
  // if the current date is greater or equal to 08/06,
  //  then we create all the seasons from XXXX+1
  // else:
  //  then we create all the seasons from XXXX
  let currentYear =
    currentDate >=
    new Date(currentDate.getFullYear(), seasonMonthStart, seasonDayStart)
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear()

  for (let i = 0; i < nbSeasons; ++i) {
    generatedSeasons.push({
      id: uuid.v4(),
      start: new Date(currentYear - 1, seasonMonthStart, seasonDayStart),
      end: new Date(currentYear, seasonMonthEnd, seasonDayEnd),
    })
    currentYear = currentYear - 1
  }

  const generatedPlayers: Player[] = []
  // Players generation
  for (let i = 0; i < nbPlayers; ++i) {
    const player = soccerData.PlayerData[i]
    generatedPlayers.push({
      id: uuid.v4(),
      lastname: player.Surname,
      firstname: player.Forename,
    })
  }

  // Plays generation
  const generatedPlays: Play[] = []
  generatedSeasons.forEach((season) => {
    // For each season, the players are redistributed
    const tmpGeneratedPlayers = [...generatedPlayers]
    shuffle(tmpGeneratedPlayers)

    generatedClubs.forEach((club) => {
      for (let i = 1; i < nbPlayersPerClub + 1; ++i) {
        console.log(`[PLAY] ${club.name}`)
        const player = tmpGeneratedPlayers.pop()
        if (player) {
          generatedPlays.push({
            seasonId: season.id,
            playerId: player.id,
            clubName: club.name,
            squadNumber: i,
            scoredGoal: Math.floor(Math.random() * 40),
            playedMatches: Math.floor(Math.random() * (38 - 17 + 1) + 17),
          })
        }
      }
    })
  })

  return [generatedClubs, generatedSeasons, generatedPlayers, generatedPlays]
}

interface Props {
  onAddClub: (club: Club) => void
  onAddSeason: (season: Season) => void
  onAddPlay: (play: Play) => void
  onAddPlayer: (player: Player) => void
}

const StoriesLoaderFC = ({
  onAddClub,
  onAddSeason,
  onAddPlay,
  onAddPlayer,
}: Props): JSX.Element => {
  useEffect(() => {
    console.log('[USER STORIES] Generating data ...')
    const [clubs, seasons, players, plays] = generateData()
    console.log('[USER STORIES] Storing data ...')
    clubs.forEach((club) => {
      onAddClub(club)
    })
    seasons.forEach((season) => {
      onAddSeason(season)
    })
    plays.forEach((play) => {
      onAddPlay(play)
    })
    players.forEach((player) => {
      onAddPlayer(player)
    })
    console.log('[USER STORIES] Data successfully loaded !')
  }, [])
  return <></>
}

// maps all the action creators with the dispatch method
// and passes them to the component
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddClub: (club: Club) => {
    dispatch(addClub(club))
  },
  onAddSeason: (season: Season) => {
    dispatch(addSeason(season))
  },
  onAddPlay: (play: Play) => {
    dispatch(addPlay(play))
  },
  onAddPlayer: (player: Player) => {
    dispatch(addPlayer(player))
  },
})

// Define the connector
export const StoriesLoader = connect(null, mapDispatchToProps)(StoriesLoaderFC)
