import { useForm } from 'react-hook-form'
import { FormControl, Button } from 'react-bootstrap'
import FileUpload from '../../components/FileUpload'

function MessageForm({ onSubmit }) {
  const { register, handleSubmit, setValue } = useForm()

  const onFormSubmit = (data) => {
    onSubmit(data)
    setValue('text', '')
  }

  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      handleSubmit(onFormSubmit)()
    }
  }

  const handleImageSubmit = (imageURL) => {
    setValue('imageURL', imageURL)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-2">
        <FormControl type="text" placeholder="Ваше имя" {...register('name')} />
      </div>
      <div className="mb-2">
        <FormControl
          as="textarea"
          placeholder="Текст сообщения"
          onKeyDown={handleKeyDown}
          {...register('text')}
        />
      </div>
      <div className="mb-2">
        <FileUpload onUpload={handleImageSubmit} {...register('imageURL')} />
      </div>
      <Button type="submit">Отправить</Button>
    </form>
  )
}

export default MessageForm
