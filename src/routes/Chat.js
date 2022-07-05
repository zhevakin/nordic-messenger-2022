import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getMessages,
  selectMessages,
  startConnecting,
  submitMessage,
} from '../features/chats/messagesSlice'
import Message from '../features/chats/Message'
import MessageForm from '../features/chats/MessageForm'

function Chat() {
  const { chatId } = useParams()
  const dispatch = useDispatch()
  const messages = useSelector(selectMessages)

  useEffect(() => {
    dispatch(startConnecting())
    dispatch(getMessages(chatId))
  }, [chatId])

  const handleMessageSubmit = ({ name, text }) => {
    const message = { chatId, name, text }
    dispatch(submitMessage(message))
  }

  return (
    <div>
      <h1>Чат {chatId}</h1>
      <div style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        {messages.map((message) => (
          <div key={message._id} className="mb-3">
            <Message message={message} />
          </div>
        ))}
      </div>
      <MessageForm onSubmit={handleMessageSubmit} />
    </div>
  )
}

export default Chat
