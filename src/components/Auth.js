import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button'

function Auth() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return (
      <div>
        <span className="me-2">{user.name}</span>
        <Button onClick={() => logout()}>Выйти</Button>
      </div>
    )
  }

  return (
    <div>
      <Button onClick={() => loginWithRedirect()}>Войти</Button>
    </div>
  )
}

export default Auth
