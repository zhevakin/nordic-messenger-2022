const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

function Location({ onLocation }) {
  const onSuccess = (pos) => {
    onLocation(pos.coords)
  }

  const onError = (err) => {
    console.log(err)
  }

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
  }

  return (
    <button type="button" onClick={handleClick}>
      Определить координаты
    </button>
  )
}

export default Location
