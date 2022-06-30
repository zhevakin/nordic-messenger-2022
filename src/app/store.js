import { configureStore } from '@reduxjs/toolkit'
import chatsSlice from '../features/chats/chatsSlice'

export const store = configureStore({
  reducer: {
    chats: chatsSlice,
  },
})
