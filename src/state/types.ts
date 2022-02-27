// Define entities
export type Player = {
  id: Number
  lastname: string
  firstname: string
}

export type Season = {
  id: Number
  start: Date
  end: Date
}

export type Play = {
  seasonStart: Date
  seasonEnd: Date
  squadNumber: Number
  scoredGoal: Number
  playerId: Number
  clubName: string
}

export type Club = {
  name: string
  logo: string
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
