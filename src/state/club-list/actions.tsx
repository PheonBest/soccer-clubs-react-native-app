import { AddClubAction, Club } from '../types'

// Bind each action to a type string
// (optional if we have only one action as here)
export enum CLUB_LIST_ACTION_TYPES {
  ADD_CLUB = 'CLUB_LIST/ADD_CLUB',
}

export const addClub = (clubData: Club
): AddClubAction => ({
  type: CLUB_LIST_ACTION_TYPES.ADD_CLUB,
  clubData: clubData
})
