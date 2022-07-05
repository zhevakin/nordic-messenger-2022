import { io } from 'socket.io-client'
import {
  startConnecting,
  connectionEstablished,
  receiveMessage,
  submitMessage,
} from './messagesSlice'

const chatMiddleware = (store) => {
  let socket

  return (next) => (action) => {
    const isConnected = socket && store.getState().messages.isConnected

    const isEstablishingConnection =
      socket && store.getState().messages.isEstablishingConnection

    if (startConnecting.match(action) && !isEstablishingConnection) {
      socket = io(process.env.REACT_APP_API_URL)

      socket.on('connect', () => {
        store.dispatch(connectionEstablished())
      })

      socket.on('new message', (message) => {
        store.dispatch(receiveMessage(message))
      })
    }

    if (submitMessage.match(action) && isConnected) {
      console.log('SEND', action.payload)
      socket.emit('new message', action.payload)
    }

    next(action)
  }
}

export default chatMiddleware
