import { applyMiddleware, combineReducers } from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { clubList } from './club-list/reducer'
import { playList } from './play-list/reducer'
import { playerList } from './player-list/reducer'
import { seasonList } from './season-list/reducer'

export const rootReducer = combineReducers({
  clubList,
  playList,
  playerList,
  seasonList,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))
