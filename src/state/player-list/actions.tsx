import { AddPlayerAction, Player } from '../types'

// Bind each action to a type string
// (optional if we have only one action as here)
export enum PLAYER_LIST_ACTION_TYPES {
  ADD_PLAYER = 'PLAYER_LIST/ADD_PLAYER',
}

export const addPlayer = (
  playerData: Player
): AddPlayerAction => ({
  type: PLAYER_LIST_ACTION_TYPES.ADD_PLAYER,
  playerData: playerData,
})
