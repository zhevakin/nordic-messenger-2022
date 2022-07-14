import { useAuth0 } from '@auth0/auth0-react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

function Auth() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  if (isLoading) {
    return <Spinner size="sm" variant="primary" animation="border" />
  }

  if (isAuthenticated && user) {
    return (
      <div>
        <span className="me-2">{user.name}</span>
        <Button size="sm" varian="default" onClick={logout}>
          Выйти
        </Button>
      </div>
    )
  }

  return (
    <button size="sm" varian="default" onClick={() => loginWithRedirect()}>
      Войти
    </button>
  )
}

export default Auth
