import cloneDeep from 'lodash/cloneDeep'
import { SeasonListAction, SeasonListState } from '../types'
import { SEASON_LIST_ACTION_TYPES } from './actions'
import { AddSeasonAction } from '../types'

export const initialState: SeasonListState = []

export const seasonList = (
  state: SeasonListState = initialState,
  action: SeasonListAction,
) => {
  const newState: SeasonListState = cloneDeep(state) // a deep-cloning function
  switch (action.type) {
    case SEASON_LIST_ACTION_TYPES.ADD_SEASON:
      const { start, end } = (action as AddSeasonAction).seasonData
      return [...newState, { start, end }]

    default:
      return state
  }
}
