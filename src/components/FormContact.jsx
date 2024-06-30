import { Button, Form } from 'react-bootstrap'

const FormContact = () => {
  return (
    <div className='d-flex justify-content-center mt-2 pb-5 mx-auto text-center vh-100'>
        <Form>
            <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Tu Email:</Form.Label>
            <Form.Control type='email' placeholder='Ingresa tu email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='textarea'>
            <Form.Label>Descripción:</Form.Label>
            <Form.Control as='textarea' placeholder='Dejanos tus comentarios'/>
        </Form.Group>
        <Button variant='danger' type='submit'>
            Enviar
        </Button>
        </Form>
    </div>
  )
}

export default FormContact
