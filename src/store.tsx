import { configureStore } from '@reduxjs/toolkit'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  treshold: number
}

const initialState: { settings: SettingsState, sentence: string[] } = {
  settings: {
    treshold: 85,
  },
  sentence: []
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState.settings,
  reducers: {
  update: (state, action: PayloadAction<number>) => {
    state.treshold = action.payload
  },
  },
})

export const sentenceSlice = createSlice({
  name: 'sentence',
  initialState:initialState.sentence,
  reducers: {
    addWord: (state, action: PayloadAction<string>) => {
      return [...state.slice(-4), action.payload]
    },
  },
})


export default settingsSlice.reducer
export const store = configureStore({
  reducer: { settings: settingsSlice.reducer, sentence: sentenceSlice.reducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const getState = store.getState;
export const dispatch = store.dispatch;