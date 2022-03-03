import { AddSeasonAction, Season } from '../types'

export enum SEASON_LIST_ACTION_TYPES {
  ADD_SEASON = 'SEASON/LIST/ADD_SEASON',
}

export const addSeason = (
  seasonData: Season
): AddSeasonAction => ({
  type: SEASON_LIST_ACTION_TYPES.ADD_SEASON,
  seasonData: seasonData
})
