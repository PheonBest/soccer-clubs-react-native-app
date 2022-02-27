import cloneDeep from 'lodash/cloneDeep'
import { PlayerListAction, PlayerListState } from '../types'
import { PLAYER_LIST_ACTION_TYPES } from './actions'
import { AddPlayerAction } from '../types'

export const initialState: PlayerListState = []

export const playerList = (
  state: PlayerListState = initialState,
  action: PlayerListAction,
) => {
  const newState: PlayerListState = cloneDeep(state) // a deep-cloning function
  switch (action.type) {
    case PLAYER_LIST_ACTION_TYPES.ADD_PLAYER:
      const { id, lastname, firstname } = (action as AddPlayerAction).playerData
      return [...newState, { id, lastname, firstname }]

    default:
      return state
  }
}
