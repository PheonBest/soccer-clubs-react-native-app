import { AddClubAction } from '../types'

// Bind each action to a type string
// (optional if we have only one action as here)
export enum CLUB_LIST_ACTION_TYPES {
  ADD_CLUB = 'CLUB_LIST/ADD_CLUB',
}

export const addClub = (
  name: string,
  logo: string,
  country: string,
): AddClubAction => ({
  type: CLUB_LIST_ACTION_TYPES.ADD_CLUB,
  clubData: {
    name,
    logo,
    country,
  },
})
