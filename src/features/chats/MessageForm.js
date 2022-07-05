import { useForm } from 'react-hook-form'
import { Button, FormControl } from 'react-bootstrap'

export default function MessageForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm()
  const onFormSubmit = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FormControl type="text" {...register('name')} />
      <FormControl as="textarea" {...register('text')} />

      <Button type="submit">Отправить</Button>
    </form>
  )
}
