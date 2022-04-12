import { Form, TextField, Submit } from '@redwoodjs/forms'

const TravelorPage = () => {
  const onSubmit = (data) => {
    console.info(data)
  }

  return (
    <Form onSubmit={onSubmit} style={{fontSize: '2rem'}}>
      <TextField
        name="zip"
        placeholder="Zip code"
        maxLength="5"
        validation={{ required: true, pattern: /^\d{5}$/ }}
      />
      <Submit>Go</Submit>
    </Form>
  )
}

export default TravelorPage
