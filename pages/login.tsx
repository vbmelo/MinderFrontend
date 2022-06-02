import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="outer">
      <Container>
      <Row className="justify-content-md-center mb-20">
        <Col lg="3">
        <img src="https://media.discordapp.net/attachments/951497109167829012/981032753124479016/MinderLogo.png" alt="Minder"
        className="d-inline-block"
        width="400"
        />
        </Col>
      </Row>
      </Container>
      
        <div className="inner">
            <div
            className='login_form'
            >
            <h1 className="text-center my-3 ">Login</h1>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    onChange={(e: any) =>
                    setData({
                        ...data,
                        email: e.target.value,
                    })
                    }
                    value={data.email}
                    required
                    type="email"
                    placeholder="Enter email"
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e: any) =>
                    setData({
                        ...data,
                        password: e.target.value,
                    })
                    }
                    value={data.password}
                    required
                    type="password"
                    placeholder="Password"
                />
                </Form.Group>
                <Button className="btn btn-dark btn-lg btn-block" type="submit">
                Login
                </Button>
        
            </Form>
            </div>
        </div>
    </div>
      
    
  )
}

export default Login