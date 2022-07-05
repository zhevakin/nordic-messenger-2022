import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../helpers/api'

const initialState = {
  messages: [],
  isEstablishingConnection: false,
  isConnected: false,
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
  reducers: {
    startConnecting: (state) => {
      state.isEstablishingConnection = true
    },
    connectionEstablished: (state) => {
      state.isConnected = true
      state.isEstablishingConnection = true
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    submitMessage: (state, action) => {
      return
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload
    })
  },
})

export const {
  startConnecting,
  connectionEstablished,
  receiveMessage,
  submitMessage,
} = messagesSlice.actions

export const selectMessages = (state) => state.messages.messages

export default messagesSlice.reducer
