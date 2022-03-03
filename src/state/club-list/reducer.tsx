import cloneDeep from 'lodash/cloneDeep'
import { ClubListAction, ClubListState } from '../types'
import { CLUB_LIST_ACTION_TYPES } from './actions'
import { AddClubAction } from '../types'

export const initialState: ClubListState = []

export const clubList = (
  state: ClubListState = initialState,
  action: ClubListAction,
) => {
  const newState: ClubListState = cloneDeep(state) // a deep-cloning function
  switch (action.type) {
    case CLUB_LIST_ACTION_TYPES.ADD_CLUB:
      return [...newState, (action as AddClubAction).clubData]

    default:
      return state
  }
}
