import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {useState} from 'react';

const Forms = () => {
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [url, setURL]= useState("");
  // const [password, setPassword] = useState("");
  const [showPass, setshowPass] = useState(false);
  const [submit, setSubmit]= useState(false);

  const [data, setData] = useState({
    email: "",
    username:"",
    firstname:"",
    lastname:"",
    url:"",
    password:"",
  });

  const {email, username, firstname, lastname, url, password} = data
  
  const handleData = (e) => {
    setData ({...data, [e.target.id]: e.target.value})
  }
 
  // const handleEmail = (e) => {
  //   console.log(e.target.value)
  //   setEmail(e.target.value)
  // }

  // const handleUrl = (e) => {
  //   console.log(e.target.value)
  //   setURL(e.target.value)
  // }

  const isEmailValid = () => {
    const atIndex = email.indexOf('@')
    if(atIndex !== -1 && email.length - atIndex >= 2) {
      return true
    }
    return false
  }

  const isUserName = () => {
    const validUser = username.trim().length
    if(validUser >= 3){
      return true
    }
    return false
  }

  const isFirstName = () => {
    const validFirst = firstname.replace(/\s/g, '').length
    if(validFirst >= 3){
      return true
    }
    return false
  }

  const isLastName = () => {
    const validLast= lastname.replace(/\s/g, '').length
    if(validLast >= 3){
      return true
    }
    return false
  }
  
  const isImage = () => {
   const img = /\.(jpg|jpeg|gif|png)$/.test(url);
   if(img){
    return true
  }
  return false
  }

  const handleShowPass = () => {
    setshowPass(!showPass);
    console.log("click");
    console.log(!showPass);
  }
  
  // const handleUsername = (e) => {
  //   console.log(e.target.value)
  //   setUsername(e.target.value)
  // }

  const handleFormSubmit = (e) => {
    console.log(e.target)
    e.preventDefault()
    alert("form submit");
    setData ({email:"", username :"", firstname:"", lastname:"", url:"", password:""})

  }
  
  // const handleSubmit=() => {
  //   setSubmit(true)
  //   console.log(data)
  

  // }

  return (
    <Container className ="container mt-4">
      <h1 className="text-success">FORM</h1>
      <Form onSubmit={handleFormSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Email address: <span>{email}</span></Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email" 
        onChange={handleData}
        value= {email}
        id="email"
        required
        />
        {!isEmailValid() && <h6 className="text-danger"> after "@" you should enter just two letters! </h6>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username: {username}</Form.Label>
        <Form.Control type="text" placeholder="Enter User name" 
        onChange={handleData}
        value={username}
        id="username"/>
         {isUserName() ? <span className ="text-success">ok</span> : <span className = "text-danger">please type your username</span>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>First Name: {firstname}</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name"
        onChange={handleData} 
        value={firstname}
        id="firstname"/>
        {isFirstName() ? <span className='text-success'>ok</span> : <span className='text-danger'>please type your firstname</span>}
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Last Name:{lastname} </Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" 
        onChange = {handleData}
        value={lastname}
        id="lastname"/>
        {isLastName() ? <span className ="text-success">ok</span> : <span className = "text-danger">please type your lastname</span>}

      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" 
        accept=".jpg, .jpeg, .png, .gif"
        // pattern="https?://.+\.(jpg|jpeg|png|gif)"
        onChange={handleData}
        value={url}
        name="url"
        id="url"/>
        {isImage() ? <span className='text-success'>valid image</span>  : <span className='text-danger'>invalid</span> }
      </Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Group  className="d-flex mb-3" >
          <Form.Control placeholder="Password" 
          type = {showPass? "text" : "password"}
          maxLength="8"
          onChange={handleData}
          value={password}
          id="password"/>
          <Button  className ="" variant="dark" onClick={()=>handleShowPass()}>
          {showPass? "hidden" : "show"} 
          </Button>
      </Form.Group>
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <Button  className = "text-center" variant="primary" type="submit" >
            Submit
          </Button>

         </div>
        </div>
      </div>
    </Form>
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url}/>
      <Card.Body>
        <Card.Title className ="text-center">{username}</Card.Title>
        <Card.Text className ="text-center">
          {firstname}  {lastname}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className ="text-center">{email}</ListGroup.Item>
      </ListGroup>
    </Card>

  
    </Container>
    
  )
}

export default Forms