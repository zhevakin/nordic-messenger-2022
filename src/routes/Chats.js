import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { addChat, getChats, selectChats } from '../features/chats/chatsSlice'

function Chats() {
  const dispatch = useDispatch()
  const chats = useSelector(selectChats)
  console.log(chats)

  useEffect(() => {
    dispatch(getChats())
  }, [])

  const handleAddChat = () => {
    const title = prompt('Введите название чата')
    dispatch(addChat(title))
  }

  return (
    <div>
      <h1>Чаты</h1>
      <div>
        <Button onClick={handleAddChat}>+ Добавить чат</Button>
      </div>
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>
            <Button>{chat.title}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chats
