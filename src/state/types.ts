import { ImageProps } from 'react-native'

export type CountryImage = {
  alpha2: string
  data: Readonly<ImageProps>
}

export type Country = {
  id: Number
  alpha2: string
  alpha3: string
  name: string
}

export type CountryList = Country[]

// ---------------
// REDUX
// Define entities
export type Player = {
  id: string | number[]
  lastname: string
  firstname: string
}

export type Season = {
  id: string | number[]
  start: Date
  end: Date
}

export type Play = {
  // foreign keys
  seasonId: string | number[]
  playerId: string | number[]
  clubName: string

  // attributes
  squadNumber: Number
  scoredGoal: Number
}

export type Club = {
  name: string
  logo: { uri: string } | number
  country: string
}

// Define actions
export type AddClubAction = {
  type: string
  clubData: Club
}
export type ClubListAction = AddClubAction // | UpdateClubAction | RemoveClubAction ...

export type AddSeasonAction = {
  type: string
  seasonData: Season
}
export type SeasonListAction = AddSeasonAction

export type AddPlayerAction = {
  type: string
  playerData: Player
}
export type PlayerListAction = AddPlayerAction

export type AddPlayAction = {
  type: string
  playData: Play
}
export type PlayListAction = AddPlayAction

// Define states types
export type ClubListState = Club[]

export type PlayerListState = Player[]

export type SeasonListState = Season[]

export type PlayListState = Play[]

export type AppState = {
  clubList: ClubListState
  playerList: PlayerListState
  seasonList: SeasonListState
  playList: PlayListState
  // add future state slices here
}
