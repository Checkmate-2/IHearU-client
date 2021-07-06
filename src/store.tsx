import { configureStore } from '@reduxjs/toolkit'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  threshold: number,
  showStats: boolean,
  speakAlong: boolean
}

const initialState: { settings: SettingsState, sentence: { predictions: string[], words: string[], log: string[][]} } = {
  settings: {
    threshold: 85,
    showStats: false,
    speakAlong: true,
  },
  sentence: {predictions: [], words:[], log: []},
  
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState.settings,
  reducers: {
  setThreshold: (state, action: PayloadAction<number>) => {
    state.threshold = action.payload
  },
  setShowStats: (state, action: PayloadAction<boolean>) => {
    state.showStats = action.payload
  },
  setSpeakAlong: (state, action: PayloadAction<boolean>) => {
    state.speakAlong = action.payload
  },
  },
})

export const sentenceSlice = createSlice({
  name: 'sentence',
  initialState:initialState.sentence,
  reducers: {
    addPrediction: (state, action: PayloadAction<string>) => {
      state.predictions.push(action.payload);
    },
    addWord: (state, action: PayloadAction<string>) => {
      state.predictions = [];
      state.words.push(action.payload);
    },
    logWords: (state) => {
      state.log.unshift(state.words);
      state.words = [];
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