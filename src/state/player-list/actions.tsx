import { AddPlayerAction } from '../types'

// Bind each action to a type string
// (optional if we have only one action as here)
export enum PLAYER_LIST_ACTION_TYPES {
  ADD_PLAYER = 'PLAYER_LIST/ADD_PLAYER',
}

export const addPlayer = (
  id: Number,
  lastname: string,
  firstname: string,
): AddPlayerAction => ({
  type: PLAYER_LIST_ACTION_TYPES.ADD_PLAYER,
  playerData: {
    id,
    lastname,
    firstname,
  },
})
