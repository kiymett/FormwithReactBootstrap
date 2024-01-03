import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Forms = () => {
  return (
    <Container className ="container mt-4">
      <h1 className="text-success">FORM</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter User name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter First Name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="email" placeholder="Enter Image URL" />
      </Form.Group>
      <Form.Label>Password</Form.Label>
      <Form  className="d-flex mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
          <Button  className ="" variant="dark" type="submit">
          Show/Hidden
          </Button>
      </Form>

      <Button  className ="" variant="primary" type="submit">
        Submit
      </Button>

    </Form>

    </Container>
  )
}

export default Forms