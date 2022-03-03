import { Club, Country, Play, Player, Season } from '../state/types'
import countries from '../assets/node_modules/world_countries_lists/data/countries/fr/countries.json'
import { clubImages } from './clubImages'
import uuid from 'react-native-uuid'
import { makeId, shuffle } from './utils'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addClub } from '../state/club-list/actions'
import { addPlayer } from '../state/player-list/actions'
import React, { useEffect } from 'react'
import { addSeason } from '../state/season-list/actions'
import { addPlay } from '../state/play-list/actions'

const generateData = (): [Club[], Season[], Player[], Play[]] => {
  // Parameters
  const nbClubs = 20 // number of clubs to generate

  const nbSeasons = 2 // number of seasons to generate
  const seasonMonthStart = 8 // season's month start
  const seasonDayStart = 6 // season's day start
  const seasonMonthEnd = 5 // season's month end
  const seasonDayEnd = 21 // season's day end

  const nbPlayersPerClub = 11 // number of players in each club per season

  const nbPlayers = nbPlayersPerClub * nbClubs // number of players

  // Clubs generation
  const generatedClubs: Club[] = []
  for (let i = 0; i < nbClubs; ++i) {
    const randomCountry: Country =
      countries[Math.floor(Math.random() * countries.length)]
    const randomAlpha2 = randomCountry.alpha2
    const randomImage: any =
      clubImages[Math.floor(Math.random() * clubImages.length)]
    generatedClubs.push({
      name: makeId(5),
      logo: randomImage,
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

  // Players generation
  const generatedPlayers: Player[] = []
  for (let i = 0; i < nbPlayers; ++i) {
    generatedPlayers.push({
      id: uuid.v4(),
      lastname: makeId(7),
      firstname: makeId(7),
    })
  }

  // Plays generation
  const generatedPlays: Play[] = []
  generatedSeasons.forEach((season) => {
    // For each season, the players are redistributed
    const tmpGeneratedPlayers = [...generatedPlayers]
    shuffle(tmpGeneratedPlayers)

    generatedClubs.forEach((club) => {
      let squadNumber = 1
      for (let i = 0; i < nbPlayersPerClub; ++i) {
        const player = tmpGeneratedPlayers.pop()
        if (player) {
          generatedPlays.push({
            seasonId: season.id,
            playerId: player.id,
            clubName: club.name,
            squadNumber: squadNumber,
            scoredGoal: Math.floor(Math.random() * 40),
          })
          squadNumber = squadNumber + 1
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
    const [clubs, seasons, players, plays] = generateData()
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
