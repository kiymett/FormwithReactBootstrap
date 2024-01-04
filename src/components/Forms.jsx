import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';

const Forms = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [url, setURL]= useState("");
  const [password,setPassword] = useState("");


  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }

  const handleFormSubmit = (e) => {
    console.log(e.target)
    alert("form submit")
  }

  return (
    <Container className ="container mt-4">
      <h1 className="text-success">FORM</h1>
      <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Email address: <span>{email}</span></Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email" 
        onChange={handleEmail}
        value= {email}
        id="email"
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username: {username}</Form.Label>
        <Form.Control type="text" placeholder="Enter User name" 
        onChange={handleUsername}
        value={username}
        id="username"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>First Name: {firstname}</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name"
        onChange={(e)=>setFirstname(e.target.value)} 
        value={firstname}
        id="firstname"/>
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Last Name:{lastname} </Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" 
        onChange = {(e)=>setLastname(e.target.value)}
        value={lastname}
        id="lastname"/>

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" 
        onChange={(e)=>setURL(e.target.value)}/>
      </Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Group  className="d-flex mb-3" >
          <Form.Control type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          id="password"/>
          <Button  className ="" variant="dark" type="submit">
          Show/Hidden
          </Button>
      </Form.Group>

      <Button  className ="" variant="primary" type="submit">
        Submit
      </Button>

    </Form>

    </Container>
  )
}

export default Forms