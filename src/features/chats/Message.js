import { Card } from 'react-bootstrap'
import styled from 'styled-components'

function Message({ message }) {
  return (
    <Card>
      <Card.Header>
        {message.name} / {new Date(message.createdAt).toLocaleTimeString()}
      </Card.Header>
      <Card.Body>
        <div>{message.text}</div>
        {message.imageURL && <Image src={message.imageURL} alt="" />}
      </Card.Body>
    </Card>
  )
}

export default Message

const Image = styled.img`
  margin-top: 10px;
  max-width: 300px;
`
