import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'

import * as api from './config'
import { themeReducer } from './store/theme/theme-reducer'

export const store = configureStore({
  reducer: {
    reducer: themeReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        client: axios,
        api,
      },
      serializableCheck: false,
    }),
})
