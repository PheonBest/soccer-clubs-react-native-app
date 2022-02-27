import { AddPlayAction } from '../types'

// Bind each action to a type string
// (optional if we have only one action as here)
export enum PLAY_LIST_ACTION_TYPES {
  ADD_PLAY = 'PLAY_LIST/ADD_PLAY',
}

export const addPlay = (
  seasonStart: Date,
  seasonEnd: Date,
  squadNumber: Number,
  scoredGoal: Number,
  playerId: Number,
  clubName: string,
): AddPlayAction => ({
  type: PLAY_LIST_ACTION_TYPES.ADD_PLAY,
  playData: {
    seasonStart,
    seasonEnd,
    squadNumber,
    scoredGoal,
    playerId,
    clubName,
  },
})
