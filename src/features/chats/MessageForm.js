import { useForm } from 'react-hook-form'

function MessageForm({ onSubmit }) {
  const { register, handleSubmit } = useForm()

  const onFormSubmit = (data) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <input type="text" placeholder="Ваше имя" {...register('name')} />
      </div>
      <div>
        <textarea placeholder="Текст сообщения" {...register('text')} />
      </div>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default MessageForm
