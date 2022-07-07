import { Card } from 'react-bootstrap'

function Message({ message }) {
  return (
    <Card>
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body>{message.text}</Card.Body>
    </Card>
  )
}

export default Message
