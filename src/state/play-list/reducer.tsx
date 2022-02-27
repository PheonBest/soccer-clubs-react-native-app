import cloneDeep from 'lodash/cloneDeep'
import { AddPlayAction, PlayListAction, PlayListState } from '../types'
import { PLAY_LIST_ACTION_TYPES } from './actions'

export const initialState: PlayListState = []

export const playList = (
  state: PlayListState = initialState,
  action: PlayListAction,
) => {
  const newState: PlayListState = cloneDeep(state) // a deep-cloning function
  switch (action.type) {
    case PLAY_LIST_ACTION_TYPES.ADD_PLAY:
      const {
        seasonStart,
        seasonEnd,
        squadNumber,
        scoredGoal,
        playerId,
        clubName,
      } = (action as AddPlayAction).playData
      return [
        ...newState,
        { seasonStart, seasonEnd, squadNumber, scoredGoal, playerId, clubName },
      ]

    default:
      return state
  }
}
