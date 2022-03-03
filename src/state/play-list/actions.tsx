import { AddPlayAction, Play } from '../types'

// Bind each action to a type string
// (optional if we have only one action as here)
export enum PLAY_LIST_ACTION_TYPES {
  ADD_PLAY = 'PLAY_LIST/ADD_PLAY',
}

export const addPlay = (
  playData: Play
): AddPlayAction => ({
  type: PLAY_LIST_ACTION_TYPES.ADD_PLAY,
  playData: playData
})
