import { useEffect, useRef, useState } from 'react'
import { FormControl, Spinner } from 'react-bootstrap'
import api from '../helpers/api'

function FileUpload({ onUpload, value }) {
  const [loading, setLoading] = useState(false)
  const fileRef = useRef()

  useEffect(() => {
    if (!value) {
      fileRef.current.value = null
    }
  }, [value])

  const handleChange = async (event) => {
    const formData = new FormData()
    formData.append('file', event.target.files[0])
    setLoading(true)
    const response = await api.post('/upload', formData)
    setLoading(false)

    if (response.data.fileURL) {
      onUpload(response.data.fileURL)
    }
  }

  return (
    <div className="d-flex align-items-center">
      {value && <span className="me-2">✅</span>}
      {loading && (
        <Spinner
          className="me-2"
          variant="primary"
          animation="border"
          size="sm"
        />
      )}
      <FormControl
        disabled={loading}
        type="file"
        onChange={handleChange}
        ref={fileRef}
      />
    </div>
  )
}

export default FileUpload
