import { Form, TextField, Submit } from '@redwoodjs/forms'

const TravelorPage = () => {
  const onSubmit = (data) => {
    console.info(data)
  }

const onSubmit = (data) => {
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=66952,us&appid=WEATHER_KEY')
    .then(response => response.json())
    .then(json => console.info(json))
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
