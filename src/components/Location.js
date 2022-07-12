import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

function Location({ onLocation }) {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState()
  const [error, setError] = useState(false)

  const onSuccess = (pos) => {
    setLoading(false)
    setValue(pos.coords)
    onLocation(pos.coords)
  }

  const onError = (err) => {
    setLoading(false)
    setError(true)
    console.log(err)
  }

  const handleClick = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
  }

  return (
    <Button variant="outline-primary" type="button" onClick={handleClick}>
      Определить координаты
      {loading && (
        <Spinner
          className="ms-2"
          size="sm"
          animation="border"
          variant="primary"
        />
      )}
      {value && <span className="ms-2">✅</span>}
      {error && <span className="ms-2">❌</span>}
    </Button>
  )
}

export default Location
