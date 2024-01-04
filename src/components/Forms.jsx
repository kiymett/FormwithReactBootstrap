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
  const [password, setPassword] = useState("");
  const [showPass, setshowPass] = useState(true);


  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleUrl = (e) => {
    console.log(e.target.value)
    setURL(e.target.value)
  }

  const isEmailValid = () => {
    const atIndex = email.indexOf('@')
    if(atIndex !== -1 && email.length - atIndex >= 2) {
      return true
    }
    return false
  }
  
  const handleShowPass = () => {
    setshowPass(!setshowPass);
    console.log("click")
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
        {!isEmailValid() && <h6 className="text-danger"> after "@" you should enter just two letters!  </h6>}
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
        accept=".jpg, .jpeg, .png, .gif"
        pattern="https?://.+\.(jpg|jpeg|png|gif)"
        onChange={handleUrl}
        value={url}
        name="url"
        id="url"/>
        {/* {!isUrlValid() && <h6 className="text-danger"> you have to type a valid url for image! </h6>} */}
      </Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Group  className="d-flex mb-3" >
          <Form.Control placeholder="Password" 
          type = {showPass ? "password" : "text"}
          maxLength="8"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          id="password"/>
          <Button  className ="" variant="dark" onClick={()=>handleShowPass()}>
          {showPass? "show" : "hidden"} 
          </Button>
      </Form.Group>
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <Button  className = "text-center" variant="primary" type="submit">
            Submit
          </Button>
         </div>
        </div>
      </div>
    </Form>

    </Container>
  )
}

export default Forms