import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../helpers/api'

const initialState = {
  messages: [],
}

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (chatId) => {
    const response = await api.get(`/chats/${chatId}/messages`)
    return response.data
  }
)

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload
    })
  },
})

export const selectMessages = (state) => state.messages.messages

export default messagesSlice.reducer
