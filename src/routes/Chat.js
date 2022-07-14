import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import {
  getMessages,
  selectMessages,
  connect,
  submitMessage,
} from '../features/chats/messagesSlice'
import Message from '../features/chats/Message'
import MessageForm from '../features/chats/MessageForm'

function Chat() {
  const { user, isAuthenticated } = useAuth0()
  const { chatId } = useParams()
  const dispatch = useDispatch()
  const messages = useSelector(selectMessages)
  const messagesRef = useRef()

  useEffect(() => {
    dispatch(getMessages(chatId))
    dispatch(connect())
  }, [chatId])

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [messages])

  const handleSubmit = ({ text, imageURL, location }) => {
    if (user) {
      const message = {
        chatId,
        name: user.name,
        text,
        imageURL,
        location,
      }
      dispatch(submitMessage(message))
    }
  }

  return (
    <div>
      <h1>Чат {chatId}</h1>
      <SMessages ref={messagesRef}>
        {messages.map((message) => (
          <div key={message._id} className="mb-3">
            <Message message={message} />
          </div>
        ))}
      </SMessages>
      {isAuthenticated ? (
        <MessageForm onSubmit={handleSubmit} />
      ) : (
        <div>Вы не авторизованы</div>
      )}
    </div>
  )
}

export default Chat

const SMessages = styled.div`
  max-height: 50vh;
  overflow: scroll;
`
